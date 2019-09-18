import React from "react";
import "./index.css";
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
import CreateRoles from "./CreateRoles";

import AddCircleIcon from "@material-ui/icons/AddCircle";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { connect } from "react-redux";
import {
  toggleDialog,
  onClickUpdateUserRole,
  onClickDeleteAction
} from "../../../redux/actions";
const Roles = props => {
  console.log(props);
  const { dialog, toggleDialog, roleList, roles, onClickDeleteAction } = props;
  return (
    <Grid container>
      <Grid item md={12} className="icon">
        <AddCircleIcon
          button
          style={{ fontSize: 40, color: "gray" }}
          dialog={dialog}
          onClick={() => {
            toggleDialog("Create Role", "Create");
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
                <TableCell>Roles</TableCell>
                <TableCell>Edit</TableCell>
              </TableRow>
              {roleList.map((roles, index) => {
                return (
                  <TableRow>
                    <TableCell>{roles.id}</TableCell>
                    <TableCell>{roles.rolename}</TableCell>
                    <TableCell>
                      <Button
                        color="primary"
                        onClick={() => {
                          toggleDialog("Update Roles", "Update", roles.id);
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        color="primary"
                        onClick={() => {
                          onClickDeleteAction(roles.id);
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
      <CreateRoles />
    </Grid>
  );
};
const mapStateToProps = ({ dialog, roleList, roles }) => {
  return {
    dialog,
    roleList,
    roles
  };
};
const mapDispatchToProps = dispatch => {
  return {
    toggleDialog: (title, buttonName, id) =>
      dispatch(toggleDialog(title, buttonName, id)),
    onClickDeleteAction: id => dispatch(onClickDeleteAction(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Roles);
