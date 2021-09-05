import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';

import TxnForm from './TxnForm';

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
    result: undefined,
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
          maxRows={5}
          onChange={(event) => {
            const { value } = event.target;
            try {
              const data = JSON.parse(value);
              setTxn({value: data, result: undefined, error: undefined});
            } catch (err) {
              setTxn({value: undefined, result: undefined, error: err.message});
            }
          }}
        />
      </Grid>
      {txn.value && 
        <TxnForm txn={txn.value} readOnly onComplete={
          (res, error) => {
            setTxn({
              ...txn,
              result: JSON.stringify(res, null, 2),
              error: error && error.message,
            })
          }
        } />}
      {txn.error &&
        <Alert severity='error' className={classes.alert}>
          {txn.error}
        </Alert>
      }
      {txn.result &&
        <Alert severity='info' className={classes.alert}>
          Result: {txn.result}
        </Alert>
      }
    </>
  )
}
