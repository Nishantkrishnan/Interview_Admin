import React from 'react';
import './index.css';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {MenuItem,Select,InputLabel,Typography,Card,CardContent} from '@material-ui/core';
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import {connect} from 'react-redux';
import {handleFieldChange, onClickCreateRole, onClickUpdateRole, dialog, toggleDialog} from '../../../redux/actions';

const CreateUpdateUser = (props) =>{
  console.log(props);
  debugger
  const {role,roles, userDetails={},handleFieldChange, onClickCreateRole, onClickUpdateRole,
  toggleDialog,dialog,usersList} = props;
   const {openDialog=false}=dialog||{};
   var  {id} = userDetails;
  const rolename=[
    {
      value:"HR",
      label:"HR"
    },
    {
      value:"Interviewer",
      label:"Interviewer"
    },
    {
      value:"Candidate",
      label:"candidate"
    }
  ];
return (
      <Grid container>
             <Grid item md ={12}  classes= {{root:"displaying"}} >
                 <Dialog
                             onClose={toggleDialog}
                             aria-labelledby="simple-dialog-title"
                             open={openDialog}
                           >
                             <DialogTitle id="simple-dialog-title">{dialog.title}</DialogTitle>
                             <TextField
                               id="outlined-name"
                               label="Name"
                               value={userDetails.name}
                               onChange={e => handleFieldChange("name",e.target.value,"userDetails")}
                               margin="normal"
                               variant="outlined"
                             />
                             <TextField
                               id="outlined-name"
                               label="Phone"
                               value={userDetails.phone}
                               onChange={e => handleFieldChange("phone",e.target.value,"userDetails")}
                               margin="normal"
                               variant="outlined"
                             />
                             <TextField
                               id="outlined-name"
                               label="Email"
                               value={userDetails.email}
                               onChange={e => handleFieldChange("email",e.target.value,"userDetails")}
                               margin="normal"
                               variant="outlined"
                             />
                             <TextField
                               id="outlined-name"
                               label="Password"
                               value={userDetails.password}
                               onChange={e =>handleFieldChange("password",e.target.value,"userDetails")}
                               margin="normal"
                               variant="outlined"
                             />
                             <TextField
                               id="outlined-select-currency"
                               select
                               label="Role"
                               value={userDetails.rolename}
                               onChange={e => handleFieldChange("rolename",e.target.value,"userDetails")}
                               helperText="Please select a role"
                               margin="normal"
                               variant="outlined"
                             >
                               {rolename.map((option, index) => (
                                 <MenuItem key={index} value={option.value}>
                                   {option.label}
                                 </MenuItem>
                               ))}
                             </TextField>
                             <Button
                               color="primary"
                               variant="contained"
                               onClick={() => fun(dialog,onClickCreateRole,onClickUpdateRole,id)}
                             >
                               {dialog.buttonName}
                             </Button>
                           </Dialog>
             </Grid>
     </Grid>
   );
 };

const fun = (dialog,onClickCreateRole, onClickUpdateRole,id) => {
  debugger
   if(dialog.buttonName == "Create"){
     debugger
          onClickCreateRole();
   }
   else if(dialog.buttonName == "Update") {
     debugger
     onClickUpdateRole(id);
   }
}
 const mapStateToProps = ({role,roles, userDetails,usersList, dialog}) =>{
   return {
     role,roles, userDetails,dialog,usersList
   };
 };
 const mapDispatchToProps = dispatch =>{
   return ({
            handleFieldChange : (property, value,propertyObject) => dispatch(handleFieldChange(property,value,propertyObject)),
            onClickCreateRole : () => dispatch(onClickCreateRole()),
            onClickUpdateRole : (id) => dispatch(onClickUpdateRole(id)),
            toggleDialog : (title,buttonName) => dispatch(toggleDialog(title,buttonName))
   });
 };
  export default connect(mapStateToProps, mapDispatchToProps)(CreateUpdateUser);
