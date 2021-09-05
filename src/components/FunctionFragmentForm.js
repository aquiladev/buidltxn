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

export default function FunctionFragmentForm({ abi, fragment, params = [], onUpdate, readOnly }) {
  const classes = useStyles();

  const [funcs, setFuncs] = useState([]);

  const [func, setFunc] = useState({
    selector: '',
    params: []
  });

  useEffect(() => {
    const iface = new ethers.utils.Interface(abi || [fragment]);
    setFuncs(
      Object.values(iface.functions)
        .filter(fr => !fr.constant)
        .map(fr => {
          const selector = `${fr.name}(${fr.inputs.map(x => `${x.type}`).join(',')})`;
          const sigHash = iface.getSighash(selector)
          return {...fr, selector, sigHash };
        })
    );
    if(fragment) {
      const selector = `${fragment.name}(${fragment.inputs.map(x => `${x.type}`).join(',')})`;
      setFunc({selector, params});
    }
  }, [abi, fragment])

  const renderFragment = (selector) => {
    const fr = funcs.find(x => x.selector === selector);
    return (
      <>
        {fr.inputs.length > 0 && fr.inputs.map((input, i) => {
          return (
            <Grid className={classes.inputForm} key={`${fr.sigHash}_${i}`}>
              <TextField
                label={`${input.name} (${input.type})`}
                variant='outlined'
                size='small'
                color='primary'
                defaultValue={func.params[i]}
                value={func.params[i]}
                placeholder={input.type}
                fullWidth
                disabled={readOnly}
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
        value={func.selector}
        disabled={readOnly}
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
          // return <MenuItem value={x.selector}>{x.selector} - {x.sigHash}</MenuItem>
          return <MenuItem value={x.selector} key={x.selector}>{x.selector}</MenuItem>
        })}
      </TextField>
      {func.selector && renderFragment(func.selector)}
    </>
  );
}
