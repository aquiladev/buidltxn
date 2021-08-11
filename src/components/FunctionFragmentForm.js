import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import { ethers } from 'ethers';

const useStyles = makeStyles(() => ({
  inputForm: {
    marginTop: 10
  }
}));

export default function FunctionFragmentForm({ abi, onUpdate }) {
  const classes = useStyles();

  const [funcs, setFuncs] = useState([]);

  const [func, setFunc] = useState({
    selector: '',
    params: []
  });

  useEffect(() => {
    const iface = new ethers.utils.Interface(abi);
    setFuncs(
      Object.values(iface.functions)
        .filter(fragment => !fragment.constant)
        .map(fragment => {
          const uniqueName = `${fragment.name}(${fragment.inputs.map(x => `${x.type}`).join(',')})`;
          const sigHash = iface.getSighash(uniqueName)
          return {...fragment, uniqueName, sigHash };
        })
    );
  }, [abi])

  const renderFragment = (selector) => {
    const fragment = funcs.find(x => x.uniqueName === selector);
    return (
      <>
        {fragment.inputs.length > 0 && fragment.inputs.map((input, i) => {
          return (
            <Grid className={classes.inputForm} key={`${fragment.sigHash}_${i}`}>
              <TextField
                label={`${input.name} (${input.type})`}
                variant='outlined'
                size='small'
                color='primary'
                defaultValue={func.params[i]}
                value={func.params[i]}
                placeholder={input.type}
                fullWidth
                onChange={(event) => {
                  const {selector, params} = func;
                  params[i] = event.target.value;

                  setFunc({...func, params});

                  onUpdate && onUpdate({
                    selector,
                    params,
                    error: undefined,
                    result: undefined,
                  });
                }}
                />
            </Grid>
          );
        })}
      </>
    );
  }

  return (
    <>
      <TextField
        label='Function'
        size='small'
        variant='outlined'
        defaultValue={func.selector}
        onChange={(event) => {
          setFunc({
            selector: event.target.value,
            params: []
          });

          onUpdate && onUpdate({
            selector: event.target.value,
            params: [],
            error: undefined,
            result: undefined,
          });
        }}
        fullWidth
        select>
        {funcs.map(x => {
          return <MenuItem value={x.uniqueName}>{x.uniqueName} - {x.sigHash}</MenuItem>
        })}
      </TextField>
      {func.selector && renderFragment(func.selector)}
    </>
  );
}
