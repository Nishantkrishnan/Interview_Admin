import React from 'react';
import './index.css';
import {Grid,Button,TextField,DialogTitle,Dialog,Paper,Card} from '@material-ui/core';
import {onClickCreateAction,onClickUpdateAction,onClickDeleteAction, toggleDialog,handleFieldChange} from '../../../redux/actions';
import {connect} from 'react-redux';

const CreateUpdateAction =(props)=>{
console.log(props);

const {onClickCreateAction,onClickUpdateAction,onClickDeleteAction,
          actions,actionList,handleFieldChange,toggleDialog,dialog}=props;
const {openDialog=false} = dialog || {};
var {id} = actions;
return(
  <Grid container>
   <Grid item md ={12} classes = {{root : 'displaying'}}>
               <Dialog onClose={toggleDialog} aria-labelledby="simple-dialog-title" open={openDialog}>
               <DialogTitle id="simple-dialog-title">{dialog.title}</DialogTitle>
                           <TextField  id="outlined-name"
                           label="Action Name"
                            margin="normal"
                            variant="outlined"
                            value = {actions.actionName}
                            onChange ={e => handleFieldChange("actionName", e.target.value, "actions")}
                            />
                          <Button  color="primary"  variant="contained"
                           onClick={() => {fun(dialog, onClickCreateAction, onClickUpdateAction, id)}}>
                           {dialog.buttonName}
                          </Button>
                          </Dialog>
             </Grid>
             </Grid>
    );
  };

  const fun = (dialog,onClickCreateAction, onClickUpdateAction,id) => {
    debugger
     if(dialog.buttonName == "Create"){
       debugger
            onClickCreateAction();
     }
     else if(dialog.buttonName == "Update") {
       debugger
       onClickUpdateAction(id);
     }
  };
                      const mapStateToProps =({actions,actionList,dialog})=>{
                      return {
                            actions,actionList,dialog
                      };
                      };
                      const mapDispatchToProps=dispatch=>{
                        return ({
                          onClickCreateAction:()=>{dispatch(onClickCreateAction())},
                          onClickUpdateAction : (id) => {dispatch (onClickUpdateAction(id))},
                          handleFieldChange : (property,value, propertyObject) => {dispatch(handleFieldChange(property,value,propertyObject))},
                          toggleDialog:(title, buttonName,id)=>{dispatch(toggleDialog(title, buttonName,id))}
                        });
                      };


                  export default connect(mapStateToProps,mapDispatchToProps) (CreateUpdateAction);
