import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import ConnectButton from './ConnectButton';

const useStyles = makeStyles((theme) => ({
  header: {
    background: 'transparent',
    boxShadow: 'none',
  },
  logo: {
    maxWidth: 32,
    paddingRight: 8,
  },
  title: {
    fontSize: '1rem',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.5rem',
    },
  },
  grow: {
    flexGrow: 1,
    paddingLeft: 30,
  },
}));

export default function Header({changeMode}) {
  const classes = useStyles();

  return (
    <header>
      <AppBar position='fixed' className={classes.header}>
        <Toolbar>
          <img src="logo.png" alt="logo" className={classes.logo} />
          <Typography className={classes.title} variant='h5' noWrap>
            Buidltxn
          </Typography>
          <div className={classes.grow}></div>
          {/* <FormControlLabel
            value='advanced'
            control={<Switch color='primary' />}
            label='Advanced'
            onChange={(event) => {changeMode(event.target.checked ? 'advanced' : 'basic')}}
          /> */}
          <ConnectButton />
        </Toolbar>
      </AppBar>
    </header>
  );
}
