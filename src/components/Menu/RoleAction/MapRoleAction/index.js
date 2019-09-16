import React from 'react';
import './index.css';
import {Grid,Button,TextField,DialogTitle,Dialog,Paper,Card} from '@material-ui/core';
import {connect} from 'react-redux';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import {toggleDialog, handleFieldChange,mapRoleAction} from '../../../../redux/actions';
import Chip from '@material-ui/core/Chip';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const MapRoleAction =(props)=>{
  const classes = useStyles();
  let tryoutArray=[];
    const theme = useTheme();
    const { handleFieldChange,dialog,toggleDialog,roleactionList,actionList,roleAction,usersList,mapRoleAction} = props;
    const {actionNames}=roleAction;
    const {roleNames}=roleAction;
const {openDialog=false} = dialog || {};
console.log(roleactionList);

return(
               <Dialog  onClose={toggleDialog} aria-labelledby="simple-dialog-title" open={ openDialog}>
               <Grid container direction="row" justify="center">
               <DialogTitle style={{display:"center"}} id="simple-dialog-title">{dialog.title}</DialogTitle>
                 <Grid item md ={12} classes = {{root : 'displaying1'}}>

                 <Grid item md={6}>
                   <FormControl className={classes.formControl}>
                                  SELECT ROLES
                             <InputLabel htmlFor="select-multiple-chip"></InputLabel>
                             <Select
                             multiple
                              value={roleNames}
                               onChange={e =>{handleFieldChange("roleNames",e.target.value,"roleAction")}}
                               input={<Input id="select-multiple" />}

                               MenuProps={MenuProps}
                               >
                             {usersList.map((role,index) => {
                             return  <MenuItem key={role.rolename} value={role.rolename} >{role.rolename}</MenuItem>
                             })}

                             </Select>
                           </FormControl>
                 </Grid>

<Grid item md={6}>
  <FormControl className={classes.formControl}>
                 SELECT ACTIONS
            <InputLabel htmlFor="select-multiple-chip"></InputLabel>
            <Select
            multiple
             value={actionNames}
              onChange={e =>{handleFieldChange("actionNames",e.target.value,"roleAction")}}
              input={<Input id="select-multiple" />}

              MenuProps={MenuProps}
              >
            {actionList.map((action,index) => {
            return  <MenuItem key={action.actionName} value={action.actionName} >{action.actionName}</MenuItem>
            })}

            </Select>
          </FormControl>
</Grid>
                                              </Grid>
                                  <Grid item md={12}>
                                  <Button  color="primary"  variant="contained" onClick={mapRoleAction}>
                                   {dialog.buttonName}
                                  </Button>
                                  </Grid>
                                   </Grid>
                          </Dialog>



    );}
                      const mapStateToProps =({roleactionList,dialog,usersList,actionList,roleAction})=>{
                      return {
                          roleactionList,dialog,usersList,actionList,roleAction
                      };
                      };
                      const mapDispatchToProps=dispatch=>{
                        return ({
                          toggleDialog : (title,buttonName,id) => dispatch(toggleDialog(title,buttonName,id)),
                          handleFieldChange :(property,value,propertyObject) => dispatch(handleFieldChange(property,value,propertyObject)),
                          mapRoleAction:()=>{dispatch(mapRoleAction())}
                        })
                      };


                  export default connect(mapStateToProps,mapDispatchToProps)(MapRoleAction);

                           // <Grid item md={6}>
                           // <FormControl className={classes.formControl}>
                           //                SELECT ACTIONS
                           //           <InputLabel htmlFor="select-multiple-chip"></InputLabel>
                           //           <Select
                           //             multiple
                           //            value={actionList}
                           //             onChange={e =>{handleFieldChange("actionList", e.target.value)}}
                           //             input={<Input id="select-multiple-chip" />}
                           //             renderValue={selected => (
                           //               <div className={classes.chips}>
                           //                 {selected.map(value => (
                           //                   <Chip  key={value} label={value} className={classes.chip} />
                           //                 ))}
                           //               </div>
                           //             )}
                           //             MenuProps={MenuProps}
                           //           >
                           //           {actionList.map(action => (
                           //             <MenuItem classes={{root:"chipstyle"}}  key={action} value={action} >
                           //               {action}
                           //             </MenuItem>
                           //           ))}
                           //
                           //           </Select>
                           //         </FormControl>
                           // </Grid>
                           // <Grid item md={6}>
                           //   <FormControl className={classes.formControl}>
                           //                  SELECT ACTIONS
                           //             <InputLabel htmlFor="select-multiple-chip"></InputLabel>
                           //             <Select
                           //               multiple
                           //              value={roleactionList}
                           //               onChange={e =>{handleFieldChange("actionList", e.target.value)}}
                           //               input={<Input id="select-multiple-chip" />}
                           //               renderValue={selected => (
                           //                 <div className={classes.chips}>
                           //                   {selected.map(value => (
                           //                     <Chip  key={value} label={value} className={classes.chip} />
                           //                   ))}
                           //                 </div>
                           //               )}
                           //               MenuProps={MenuProps}
                           //             >
                           //             {roleactionList.map(action => (
                           //               <MenuItem classes={{root:"chipstyle"}}  key={action.index} value={action.actionName} >
                           //                 {action.actionName}
                           //               </MenuItem>
                           //             ))}
                           //
                           //             </Select>
                           //           </FormControl>
