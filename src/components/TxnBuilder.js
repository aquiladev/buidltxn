import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useWeb3React } from '@web3-react/core';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import CallMadeIcon from '@material-ui/icons/CallMade';
import SendIcon from '@material-ui/icons/Send';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ShareIcon from '@material-ui/icons/Share';
import CopyIcon from '@material-ui/icons/FileCopy';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { ethers } from 'ethers';

import { composeFunctions } from './../utils/abi';
import { ETHERSCAN_API_MAP } from './../utils/constants';
import ProtocolsManager from './../protocol';
import FunctionFragmentForm from './FunctionFragmentForm';
import ContentModal from './ContentModal';

const useStyles = makeStyles((theme) => ({
  stepper: {
    padding: 0,
  },
  form: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      minWidth: 'initial',
    }
  },
  grow: {
    flexGrow: 1,
  },
  label: {
    marginTop: 4,
    marginLeft: 8
  },
  divider: {
    marginTop: 14,
    marginBottom: 14,
  },
  abi_loading: {
    marginLeft: 8
  },
  alert: {
    marginTop: 8,
  },
  btn: {
    marginRight: 8,
  },
  jsonFooter: {
    padding: 20,
    textAlign: 'center'
  }
}));

export default function TxnBuilder({mode}) {
  const classes = useStyles();

  const { library, account, chainId, active } = useWeb3React();

  const [address, setAddress] = useState({
    value: '',
    isValid: true,
    isLoading: false,
    isDisabled: false,
    type: undefined
  });

  const [contract, setContract] = useState({
    abi: undefined,
    functions: undefined,
    error: undefined,
    isLoading: false,
  });

  const [func, setFunc] = useState({
    selector: undefined,
    params: [],
    functions: undefined,
    error: undefined,
    result: undefined,
  });

  const [shareJson, setShareJson] = useState(undefined);

  const loadContract = async (address) => {
    const baseUri = ETHERSCAN_API_MAP[chainId];
    if(!baseUri) {
      setContract({
        abi: undefined,
        functions: undefined,
        error: 'Etherscan does not support the network',
        isLoading: false,
      });
    }

    await fetch(`${baseUri}api?module=contract&action=getabi&address=${address}&apikey=CW1N8TD93FUZMTI46EWNV7K6TRJS7C9HU2`)
      .then(response => response.json())
      .then(data => {
        const {message, result} = data;
        if(message === 'NOTOK') {
          setContract({
            abi: undefined,
            functions: undefined,
            error: result,
            isLoading: false,
          });
        } else {
          const abi = JSON.parse(result);
          setContract({
            abi,
            functions: composeFunctions(abi),
            error: undefined,
            isLoading: false,
          });
        }
      })
      .catch(error => {
        setContract({
          abi: undefined,
          functions: undefined,
          error: error,
          isLoading: false,
        });
      });
  }

  const call = async () => {
    const cntrct = new ethers.Contract(address.value, contract.abi, library.getSigner());
    try
    {
      const res = await cntrct.callStatic[func.selector](...func.params);
      setFunc({...func, error: undefined, result: JSON.stringify(res)});
    } catch(err) {
      setFunc({...func, error: err, result: undefined});
    }
  }

  const estimate = async () => {
    const cntrct = new ethers.Contract(address.value, contract.abi, library.getSigner());
    try
    {
      const res = await cntrct.estimateGas[func.selector](...func.params);
      setFunc({...func, error: undefined, result: res.toString()});
    } catch(err) {
      setFunc({...func, error: err, result: undefined});
    }
  }

  const send = async () => {
    const cntrct = new ethers.Contract(address.value, contract.abi, library.getSigner());
    try
    {
      const res = await cntrct.functions[func.selector](...func.params);
      setFunc({...func, error: undefined, result: res.toString()});
    } catch(err) {
      setFunc({...func, error: err, result: undefined});
    }
  }

  const share = () => {
    try {
      const protocol = ProtocolsManager.getProtocol();
      const cntrct = new ethers.Contract(address.value, contract.abi, library.getSigner());
      const data = protocol.build(
        account,
        contract.functions[func.selector],
        {
          to: address.value,
          data: cntrct.interface.encodeFunctionData(func.selector, func.params)
        }
      );
      setShareJson(data);
    } catch(err) {
      setFunc({...func, error: err, result: undefined});
    }
  }

  return (
    <>
      <Stepper orientation='vertical' className={classes.stepper}>
        <Step expanded completed={address.type === 'Contract'}>
          <StepLabel>Contract</StepLabel>
          <StepContent>
            <Grid className={classes.form}>
              <TextField
                label='Address'
                variant='outlined'
                size='small'
                color='primary'
                className={classes.grow}
                fullWidth
                disabled={address.isDisabled || !active}
                defaultValue={address.value}
                error={!address.isValid}
                onChange={async (event) => {
                  const { value } = event.target;
                  if(ethers.utils.isAddress(value)) {
                    setAddress({
                      value,
                      isValid: true,
                      isLoading: true,
                      isDisabled: false,
                      type: undefined
                    });

                    const code = await library.getCode(value);
                    setAddress({
                      value,
                      isValid: true,
                      isLoading: false,
                      isDisabled: code !== '0x',
                      type: code !== '0x' ? 'Contract' : 'EOA'
                    });

                    if(code !== '0x') {
                      setContract({
                        abi: undefined,
                        functions: undefined,
                        isLoading: true,
                      });

                      await loadContract(value);
                    }
                  } else {
                    setAddress({
                      value,
                      isValid: false,
                      isLoading: false,
                      isDisabled: false,
                      type: undefined
                    });
                  }
                }}
                helperText={address.isValid ? '' : 'Incorrect address'}
              />
              {address.isLoading && <CircularProgress color='inherit' size={18} thickness={5} />}
              {address.type && <Chip variant='outlined' color='secondary' label={address.type} className={classes.label} />}
            </Grid>
            {address.type === 'EOA' &&
              <Alert severity='warning' className={classes.alert}>
                Externally Owned Account(EOA) not supported yet
              </Alert>
            }
            {address.type === 'Contract' &&
              <>
                <Divider className={classes.divider}/>
                {contract.isLoading ?
                  <Grid className={classes.form}>
                    <CircularProgress color='inherit' size={18} thickness={5} />
                    <Typography className={classes.abi_loading}>Loading ABI from Etherscan</Typography>
                  </Grid> :
                  <>
                    {contract.error && <Alert severity='error'>{contract.error}</Alert>}
                    {contract.abi &&
                      <TextField
                        label='ABI'
                        variant='outlined'
                        color='primary'
                        defaultValue={JSON.stringify(contract.abi, null, ' ')}
                        disabled
                        multiline
                        fullWidth
                        maxRows={5}
                      />
                    }
                  </>
                }
              </>
            }
          </StepContent>
        </Step>
        <Step expanded={contract.abi}>
          <StepLabel>Transaction</StepLabel>
          <StepContent>
            {contract.abi && <FunctionFragmentForm abi={contract.abi} onUpdate={(data) => { setFunc(data) }}/>}
          </StepContent>
        </Step>
        <Step expanded={func.selector}>
          <StepLabel>Actions</StepLabel>
          <StepContent>
            <Button
              color='primary'
              variant='contained'
              className={classes.btn}
              startIcon={<CallMadeIcon />}
              onClick={call}
              disabled={!active}
            >
              Call
            </Button>
            <Button
              color='primary'
              variant='contained'
              className={classes.btn}
              startIcon={<MonetizationOnIcon />}
              onClick={estimate}
              disabled={!active}
            >
              Estimate
            </Button>
            <Button
              color='primary'
              variant='contained'
              className={classes.btn}
              startIcon={<SendIcon />}
              onClick={send}
              disabled={!active}
            >
              Send
            </Button>
            <Button
             color='primary'
             variant='contained'
             className={classes.btn}
             startIcon={<ShareIcon />}
             onClick={share}
             disabled={!active}
            >
              Share
            </Button>
            <ContentModal
              isOpen={shareJson}
              onClose={() => setShareJson() }
              title='Transaction data'
              content={
                <>
                  <pre>{JSON.stringify(shareJson, null, 2)}</pre>
                  <div className={classes.jsonFooter}>
                    <CopyToClipboard text={JSON.stringify(shareJson)}>
                      <Button
                        color='primary'
                        className={classes.btn}
                        startIcon={<CopyIcon />}
                        >
                        Copy
                      </Button>
                    </CopyToClipboard>
                  </div>
                </>
              } />
            {func.error &&
              <Alert severity='error' className={classes.alert}>
                {func.error.message}
              </Alert>
            }
            {func.result &&
              <Alert severity='info' className={classes.alert}>
                Result: {func.result}
              </Alert>
            }
          </StepContent>
        </Step>
      </Stepper>
    </>
  );
}
