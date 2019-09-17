import React from "react";
import "./index.css";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import {
  MenuItem,
  Select,
  InputLabel,
  Typography,
  Card,
  CardContent
} from "@material-ui/core";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { connect } from "react-redux";
import {
  handleFieldChange,
  onClickCreateRole,
  onClickUpdateRole,
  dialog,
  toggleDialog
} from "../../../redux/actions";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: 2
  }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};
const CreateUpdateUser = props => {
  const classes = useStyles();
  let tryoutArray = [];
  const theme = useTheme();
  console.log(props);
  debugger;
  const {
    role,
    userDetails = {},
    handleFieldChange,
    onClickCreateRole,
    onClickUpdateRole,
    toggleDialog,
    dialog,roleList,
    usersList
  } = props;
  const { openDialog = false } = dialog || {};
  const { userRoles } = userDetails;
  var { id } = userDetails;
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
            label="Name"
            value={userDetails.name}
            onChange={e =>
              handleFieldChange("name", e.target.value, "userDetails")
            }
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-name"
            label="Phone"
            value={userDetails.phone}
            onChange={e =>
              handleFieldChange("phone", e.target.value, "userDetails")
            }
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-name"
            label="Email"
            value={userDetails.email}
            onChange={e =>
              handleFieldChange("email", e.target.value, "userDetails")
            }
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-name"
            label="Password"
            type= "Password"
            value={userDetails.password}
            onChange={e =>
              handleFieldChange("password", e.target.value, "userDetails")
            }
            margin="normal"
            variant="outlined"
          />

              <FormControl className={classes.formControl}>
                SELECT ROLES
                <InputLabel htmlFor="select-multiple-chip"></InputLabel>
                <Select
                multiple
                  value={userRoles}
                  onChange={e => {
                    handleFieldChange("userRoles", e.target.value, "userDetails");
                  }}
                  input={<Input id="select-multiple" />}
                  MenuProps={MenuProps}
                >
                  {roleList.map((role, index) => {
                    return (
                      <MenuItem key={role.rolename} value={role.rolename}>
                        {role.rolename}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>

          <Button
            color="primary"
            variant="contained"
            onClick={() =>
              fun(dialog, onClickCreateRole, onClickUpdateRole, id)
            }
          >
            {dialog.buttonName}
          </Button>
        </Dialog>
      </Grid>
    </Grid>
  );
};

const fun = (dialog, onClickCreateRole, onClickUpdateRole, id) => {
  debugger;
  if (dialog.buttonName == "Create") {
    debugger;
    onClickCreateRole();
  } else if (dialog.buttonName == "Update") {
    debugger;
    onClickUpdateRole(id);
  }
};
const mapStateToProps = ({ role, userDetails, usersList, dialog,roleList }) => {
  return {
    role,
    userDetails,
    dialog,
    usersList,roleList
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleFieldChange: (property, value, propertyObject) =>
      dispatch(handleFieldChange(property, value, propertyObject)),
    onClickCreateRole: () => dispatch(onClickCreateRole()),
    onClickUpdateRole: id => dispatch(onClickUpdateRole(id)),
    toggleDialog: (title, buttonName) =>
      dispatch(toggleDialog(title, buttonName))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateUpdateUser);



// <TextField
//   id="outlined-select-currency"
//   select
//   label="Role"
//   value={userDetails.rolename}
//   onChange={e =>
//     handleFieldChange("rolename", e.target.value, "userDetails")
//   }
//   helperText="Please select a role"
//   margin="normal"
//   variant="outlined"
// >
//   {rolename.map((option, index) => (
//     <MenuItem key={index} value={option.value}>
//       {option.label}
//     </MenuItem>
//   ))}
// </TextField>
