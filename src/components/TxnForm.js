import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ethers } from 'ethers';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import FunctionFragmentForm from './FunctionFragmentForm';

const useStyles = makeStyles((theme) => ({
  inputForm: {
    marginTop: 10
  }
}));

export default function TxnForm({txn, readOnly}) {
  const classes = useStyles();

  const {fragment, transaction} = txn;
  const iface = new ethers.utils.Interface([fragment]);
  const ethFragment = ethers.utils.FunctionFragment.from(fragment);
  const params = iface.decodeFunctionData(ethFragment, transaction.data);

  return (
    <>
      <Grid className={classes.inputForm}>
        <TextField
          label='To'
          variant='outlined'
          size='small'
          color='primary'
          className={classes.grow}
          fullWidth
          disabled={readOnly}
          value={transaction.to}
        />
      </Grid>
      <Grid className={classes.inputForm}>
        <FunctionFragmentForm fragment={txn.fragment} params={Array.from(params)} readOnly />
      </Grid>
    </>
  );
}
