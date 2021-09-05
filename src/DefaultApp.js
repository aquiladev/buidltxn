import React, { useEffect, useState } from 'react';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Web3ReactProvider, useWeb3React, UnsupportedChainIdError } from '@web3-react/core';
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected
} from '@web3-react/injected-connector';
import {
  UserRejectedRequestError as UserRejectedRequestErrorWalletConnect
} from '@web3-react/walletconnect-connector';

import { ethers } from 'ethers';

import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';
import Paper from '@material-ui/core/Paper';

import { useEagerConnect, useInactiveListener } from './hooks';
import Header from './components/Header';
import JsonTxn from './components/JsonTxn';
import TxnBuilder from './components/TxnBuilder';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#c0c0c0',
    },
  },
  overrides: {
    MuiFilledInput: {
      input: {
        paddingTop: '13px',
      },
    },
    MuiDialogActions: {
      root: {
        display: 'block'
      }
    },
    MuiAlert: {
      message: {
        width: '100%',
        overflow: 'scroll'
      }
    }
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    minHeight: '100%'
  },
  content: {
    paddingTop: theme.spacing(16),
    paddingBottom: theme.spacing(8),
    minHeight: 100
  },
  paper: {
    padding: theme.spacing(3)
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

function getErrorMessage(error) {
  console.error(error)
  if (error instanceof NoEthereumProviderError) {
    return 'No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.'
  } else if (error instanceof UnsupportedChainIdError) {
    return 'You\'re connected to an unsupported network.'
  } else if (
    error instanceof UserRejectedRequestErrorInjected ||
    error instanceof UserRejectedRequestErrorWalletConnect
  ) {
    return 'Please authorize this website to access your Ethereum account.'
  } else {
    return 'An unknown error occurred. Check the console for more details.'
  }
}

function getLibrary(provider) {
  return new ethers.providers.Web3Provider(provider);
}

function DefaultApp() {
  const classes = useStyles();

  const { connector, error } = useWeb3React();

  const [activatingConnector, setActivatingConnector] = useState();
  const [mode, setMode] = useState('basic');

  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined)
    }
  }, [activatingConnector, connector]);

  const triedEager = useEagerConnect();
  useInactiveListener(!triedEager || !!activatingConnector);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <Header changeMode={setMode} />
          <Container maxWidth={mode === 'basic' ? 'sm' : 'md'} className={classes.content}>
            {
              !!error &&
              <Alert
                variant='filled'
                severity='error'
                style={{ position: 'fixed', zIndex: 1200, bottom: 10, left: 10 }}
              >
                {getErrorMessage(error)}
              </Alert>
            }
            <Paper elevation={3} className={classes.paper}>
              <Switch>
                <Route path="/json">
                  <JsonTxn />
                </Route>
                <Route path="/">
                  <TxnBuilder mode={mode} />
                </Route>
              </Switch>
            </Paper>
          </Container>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default function () {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <DefaultApp />
    </Web3ReactProvider>
  )
}
