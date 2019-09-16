import React from 'react';
import './index.css';
import { Grid, Button, Paper, Table, TableRow, TableCell,TableHead, Icon } from "@material-ui/core";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CreateUpdateUser from './CreateUpdateUser';
import ReactTable from "react-table";
import "react-table/react-table.css";
import {connect} from 'react-redux';
import {toggleDialog, onClickDeleteRole} from '../../redux/actions';

const AddAndDisplay = (props) => {
  console.log(props);
  const {usersList=[], userDetails, toggleDialog, dialog, onClickDeleteRole} = props;
return(
<Grid container>
<Grid item md ={12} className = "icon">
<AddCircleIcon button style = {{fontSize : 40, color : "gray"}} dialog = {dialog} onClick ={() => {toggleDialog()}} />
</Grid>
<Grid item md ={1} ></Grid>
<Grid item md ={10} >
<Paper>
<Table>
<TableHead>
<TableRow>
<TableCell>Sr. No.</TableCell>
<TableCell>Name</TableCell>
<TableCell>Phone</TableCell>
<TableCell>Email</TableCell>
<TableCell>Role Type</TableCell>
<TableCell>Edit</TableCell>
</TableRow>
{usersList.map((user,index) => {
return<TableRow>
  <TableCell>{user.id}</TableCell>
  <TableCell>{user.name}</TableCell>
  <TableCell>{user.phone}</TableCell>
  <TableCell>{user.email}</TableCell>
  <TableCell>{user.rolename}</TableCell>
  <TableCell><Button color ="primary" onClick ={() => {toggleDialog("Update User", "Update",user.id)}}>Edit</Button>
   <Button color ="primary" onClick ={() => {onClickDeleteRole(user.id)}}>Delete</Button></TableCell>
  </TableRow>
})}
</TableHead>
</Table>
</Paper>
</Grid>
<Grid item md ={1} ></Grid>
        <CreateUpdateUser />
</Grid>

);
};

const mapStateToProps = ({usersList,userDetails, dialog}) =>{
  return {
    usersList, dialog,userDetails
  };
};
const mapDispatchToProps = dispatch =>{
  return ({
           toggleDialog : (title, buttonName,id) => dispatch(toggleDialog(title, buttonName,id)),
           onClickDeleteRole : (id) => dispatch(onClickDeleteRole(id))
  });
};
export default connect(mapStateToProps, mapDispatchToProps)(AddAndDisplay);
