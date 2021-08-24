import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    margin: 0,
    padding: theme.spacing(2),
    minWidth: 500,
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const DialogTitle = (({ children, onClose, ...other }) => {
  const classes = useStyles();
  return (
    <MuiDialogTitle disableTypography className={classes.title} {...other}>
      <Typography variant='h6'>{children}</Typography>
      {onClose ? (
        <IconButton aria-label='close' className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

export default function ConnectModal({isOpen, onClose, title, content}) {
  const handleClose = () => {
    onClose && onClose();
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      TransitionComponent={Transition}
      maxWidth='lg'
      keepMounted
    >
      <DialogTitle onClose={handleClose}>{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
    </Dialog>
  );
}
