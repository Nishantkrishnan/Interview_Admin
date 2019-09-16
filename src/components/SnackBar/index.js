import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import {Card,CardContent,Toolbar,Typography,AppBar,IconButton} from '@material-ui/core';
import {connect} from 'react-redux';
import {handleClose} from '../../redux/actions';
import CloseIcon from '@material-ui/icons/Close';

const SnackBar = (props) =>{
  console.log(props);
  const {message,snackBarOpen,handleClose} = props;
  return (
      <Snackbar
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right-center',
            }}
            open={snackBarOpen}
            autoHideDuration={10000}
            onClose= {handleClose}
            ContentProps={{
              'aria-describedby': 'message-id',
            }}
            message=<span id="message-id">{message}</span>
            action={[
<IconButton
 key="close"
 aria-label="Close"
 color="inherit"
 onClick={handleClose}
>
 <CloseIcon />
</IconButton>
]}
          />
);
};

const mapStateToProps =({message,snackBarOpen})=>{
return {
  message,snackBarOpen
};
};
const mapDispatchToProps=dispatch=>{
  return ({
    handleClose:()=>dispatch(handleClose()),
  });
};
export default connect(mapStateToProps,mapDispatchToProps)(SnackBar);
