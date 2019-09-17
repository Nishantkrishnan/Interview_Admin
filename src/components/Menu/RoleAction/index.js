import React from "react";
import "./index.css";
import TextField from "@material-ui/core/TextField";
import {
  Grid,
  Button,
  Paper,
  Table,
  TableRow,
  TableCell,
  TableHead,
  Icon
} from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { connect } from "react-redux";
import MapRoleAction from "./MapRoleAction";
import { toggleDialog, onClickDeleteAction } from "../../../redux/actions";
const RoleAction = props => {
  console.log(props);
  const {
    actionList = [],
    actions,
    dialog,
    toggleDialog,
    roleactionList,
    onClickDeleteAction
  } = props;
  return (
    <Grid container>
      <Grid item md={12} className="icon">
        <AddCircleIcon
          button
          style={{ fontSize: 40, color: "gray" }}
          dialog={dialog}
          onClick={() => {
            toggleDialog("Create Role Action", "Create");
          }}
        />
      </Grid>
      <Grid item md={1}></Grid>
      <Grid item md={10}>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Sr. No.</TableCell>
                <TableCell>RoleType</TableCell>
                <TableCell>Action Name</TableCell>
                <TableCell>Operation</TableCell>
              </TableRow>
              {roleactionList.map((roleActions, index) => {
                return (
                  <TableRow>
                    <TableCell>{roleActions.id}</TableCell>
                    <TableCell>{roleActions.roleNames}</TableCell>
                    <TableCell>
                      {roleActions.actionNames.map((roleactionname, index) => {
                        return (
                          <TableRow>
                            <TableCell>
                              <ol>{roleactionname}</ol>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableCell>
                    <TableCell>
                      <Button
                        color="primary"
                        onClick={() => {
                          toggleDialog(
                            "Update roleActions",
                            "Update",
                            roleActions.id
                          );
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        color="primary"
                        onClick={() => {
                          onClickDeleteAction(roleActions.id);
                        }}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableHead>
          </Table>
        </Paper>
      </Grid>
      <Grid item md={1}></Grid>
      <MapRoleAction />
    </Grid>
  );
};

const mapStateToProps = ({ actionList, actions, dialog, roleactionList }) => {
  return {
    actionList,
    actions,
    dialog,
    roleactionList
  };
};
const mapDispatchToProps = dispatch => {
  return {
    toggleDialog: (title, buttonName, id) => {
      dispatch(toggleDialog(title, buttonName, id));
    },
    onClickDeleteAction: id => dispatch(onClickDeleteAction(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoleAction);
// {actionList.map((action,index) => {
// return (<TableRow>
// <TableCell>{action.id}</TableCell>
// <TableCell>{action.actionName}</TableCell>
// <TableCell><Button color ="primary" >Edit</Button>
//  <Button color ="primary" >Delete</Button></TableCell>
// </TableRow>
// );
// })}
