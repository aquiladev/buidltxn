import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(() => ({
  footer: {
    alignItems: 'center',
    background: 'transparent',
    boxShadow: 'none',
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <AppBar position='static' className={classes.footer}>
      <Typography variant='body1'>Sometimes transactions are difficult, Buidltxn aims to help building transactions.</Typography>

      {/* <Typography variant='body1'>Imagine you need to explain somebody to execute transaction through Etherscan with list of parameters.</Typography>
      <Typography variant='body1'>Buidltxn allows to build and share transaction with anybody.</Typography> */}
      <Toolbar>
        <Link href='//github.com/aquiladev/buidltxn' target='_blank' rel='noopener'>
          <IconButton color='default' aria-label='GitHub repo' component='span'>
            <GitHubIcon fontSize='default' />
          </IconButton>
        </Link>
        {process.env.REACT_APP_GITHUB_REF_SHA &&
          <Chip label={process.env.REACT_APP_GITHUB_REF_SHA} variant='outlined' />
        }
      </Toolbar>
    </AppBar>
  );
}
