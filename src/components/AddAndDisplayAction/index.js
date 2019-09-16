import React from 'react';
import './index.css';
import { Grid, Button, Paper, Table, TableRow, TableCell,TableHead, Icon } from "@material-ui/core";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CreateUpdateAction from './CreateUpdateAction';
import ReactTable from "react-table";
import "react-table/react-table.css";
import {connect} from 'react-redux';
import {toggleDialog, onClickDeleteAction} from '../../redux/actions';

const AddAndDisplayAction = (props) => {

  console.log(props);
  const {actionList=[], actions, toggleDialog, dialog,onClickDeleteAction} = props;
return(
<Grid container>
<Grid item md ={12} className = "icon">
<AddCircleIcon button style = {{fontSize : 40, color : "gray"}} dialog = {dialog} onClick ={() => {toggleDialog("Create Action", "Create")}} />
</Grid>
<Grid item md ={1} ></Grid>
<Grid item md ={10} >
<Paper>
<Table>
<TableHead>
<TableRow>
<TableCell>Sr. No.</TableCell>
<TableCell>Action Name</TableCell>
<TableCell>Edit</TableCell>
</TableRow>
{actionList.map((action,index) => {
return (<TableRow>
  <TableCell>{action.id}</TableCell>
  <TableCell>{action.actionName}</TableCell>
  <TableCell><Button color ="primary" onClick ={() => {toggleDialog("Update Action", "Update", action.id)}}>Edit</Button>
   <Button color ="primary" onClick ={() => {onClickDeleteAction(action.id)}}>Delete</Button></TableCell>
  </TableRow>
);
})}
</TableHead>
</Table>
</Paper>
</Grid>
<Grid item md ={1} ></Grid>
        <CreateUpdateAction />
</Grid>

);
};

const mapStateToProps = ({actionList, actions, dialog}) =>{
  return {
    actionList, actions,dialog
  };
};
const mapDispatchToProps = dispatch =>{
  return ({
           toggleDialog : (title, buttonName,id) => dispatch(toggleDialog(title, buttonName,id)),
           onClickDeleteAction : (id) => dispatch(onClickDeleteAction(id))
  });
};
export default connect(mapStateToProps, mapDispatchToProps)(AddAndDisplayAction);
