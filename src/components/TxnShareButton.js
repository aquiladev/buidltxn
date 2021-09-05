import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useWeb3React } from '@web3-react/core';
import Button from '@material-ui/core/Button';
import ShareIcon from '@material-ui/icons/Share';
import CopyIcon from '@material-ui/icons/FileCopy';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import ContentModal from './ContentModal';

const useStyles = makeStyles((theme) => ({
  btn: {
    marginRight: 8,
  },
  jsonFooter: {
    padding: 20,
    textAlign: 'center'
  },
}));

export default function TxnShareButton({txn}) {
  const classes = useStyles();
  const { active } = useWeb3React();

  const [shareJson, setShareJson] = useState(undefined);

  return (
    <>
      <Button
        color='primary'
        variant='contained'
        className={classes.btn}
        startIcon={<ShareIcon />}
        onClick={() => setShareJson(JSON.stringify(txn, null, 2))}
        disabled={!active}
      >
        Share
      </Button>
      <ContentModal
        isOpen={shareJson}
        onClose={() => setShareJson()}
        title='Transaction data'
        content={
          <>
            <pre>{shareJson}</pre>
            <div className={classes.jsonFooter}>
              <CopyToClipboard text={shareJson}>
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
    </>
  );
}
