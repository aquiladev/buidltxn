import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useWeb3React } from '@web3-react/core';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';

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

export default function JsonTxn() {
  const classes = useStyles();

  const [txn, setTxn] = useState({
    value: undefined,
    error: undefined,
  });

  return (
    <>
      <Grid className={classes.form}>
        <TextField
          label='Transaction data (JSON)'
          variant='outlined'
          size='small'
          color='primary'
          className={classes.grow}
          fullWidth
          multiline
          onChange={(event) => {
            const { value } = event.target;
            try {
              const data = JSON.parse(value);
              setTxn({value: data, error: undefined});
            } catch (err) {
              setTxn({value: undefined, error: err.message});
            }
          }}
        />
      </Grid>
      {txn.error &&
        <Alert severity='error' className={classes.alert}>
          {txn.error}
        </Alert>
      }
    </>
  )
}
