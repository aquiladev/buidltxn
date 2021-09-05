import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useWeb3React } from '@web3-react/core';
import Button from '@material-ui/core/Button';
import CallMadeIcon from '@material-ui/icons/CallMade';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
  btn: {
    marginRight: 8,
  },
}));

export default function TxnActions({txn, onComplete}) {
  const classes = useStyles();

  const { library, active } = useWeb3React();

  const call = async () => {
    await execute('call');
  }

  const estimate = async () => {
    await execute('estimateGas');
  }

  const send = async () => {
    await execute('sendTransaction');
  }

  const execute = async (action) => {
    const { transaction } = txn;
    try
    {
      const result = await library.getSigner()[action](transaction);
      onComplete && onComplete(result);
    } catch(err) {
      onComplete && onComplete(undefined, err);
    }
  }

  return (
    <>
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
    </>
  );
}
