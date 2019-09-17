import React from "react";
import "./index.css";
import {
  Grid,
  Button,
  TextField,
  DialogTitle,
  Dialog,
  Paper,
  Card
} from "@material-ui/core";


import {
  handleFieldChange,handleCreateUserRole,toggleDialog
} from "../../../../redux/actions";
import { connect } from "react-redux";


const CreateRoles = props => {
  console.log(props);
  const {roles,dialog,handleFieldChange,roleList,toggleDialog,handleCreateUserRole}=props;
    const { openDialog = false } = dialog || {};
      var { id } = roles;
  return (
    <Grid container>
      <Grid item md={12} classes={{ root: "displaying" }}>
        <Dialog
            onClose={toggleDialog}
          aria-labelledby="simple-dialog-title"
          open={openDialog}
        >
          <DialogTitle id="simple-dialog-title">{dialog.title}</DialogTitle>
          <TextField
            id="outlined-name"
            label="Role Name"
            value={roles.rolename}
            margin="normal"
            variant="outlined"
            onChange={e =>handleFieldChange("rolename", e.target.value, "roles")}
          />
          <Button
            color="primary"
            variant="contained"
            onClick={handleCreateUserRole}
          >
            {dialog.buttonName}
          </Button>
        </Dialog>
      </Grid>
    </Grid>
  );
};


const mapStateToProps = ({ actions, roleList, dialog,roles }) => {
  return {
    actions,
    roleList,
    dialog,roles
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleFieldChange: (property, value, propertyObject) => {
      dispatch(handleFieldChange(property, value, propertyObject));
    },
    toggleDialog: (title, buttonName, id) =>
      {dispatch(toggleDialog(title, buttonName, id))},
    handleCreateUserRole:()=>{
      dispatch(handleCreateUserRole())
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateRoles);


// const fun = (dialog, onClickCreateAction, onClickUpdateAction, id) => {
//   debugger;
//   if (dialog.buttonName == "Create") {
//     debugger;
//     onClickCreateAction();
//   } else if (dialog.buttonName == "Update") {
//     debugger;
//     onClickUpdateAction(id);
//   }
// };
// const mapDispatchToProps = dispatch => {
//   return {
//     handleFieldChange: (property, value, propertyObject) => {
//       dispatch(handleFieldChange(property, value, propertyObject));
//     }
//   };
// };
