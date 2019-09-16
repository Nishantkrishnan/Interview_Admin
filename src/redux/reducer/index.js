import * as actionTypes from '../actionTypes';
import {
  toggleDialog,
  handleCheckLogin
} from '../actions';

const initialState = {
  login: {
    username: "",
    password: "",
  },
  snackBarOpen: false,
  message: '',
  open: false,
  role: {
    rolename: "Hr"
  },
  roles: [{
    rolename: ""
  }],
  userDetails: {
    id: 1,
    name: '',
    phone: '',
    email: '',
    rolename: '',
    password: ''

  },
  usersList: [],
  length: 0,
  dialog: {
    openDialog: false,
    title: '',
    buttonName: ''
  },
  actions: {
    id: 1,
    actionName: ''
  },
  actionList: [],
  roleAction:{
    actionName:"",
    roleNames:[],
    actionNames:[],
    id:1,roletype:""
  },

  roleactionList: []

}

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.ON_CLICK_LOGIN:
      var history = action.payload.history;
      var snackBarOpen = state.snackBarOpen;
      const {
        username, password
      } = state.login;
      var message = state.message;
      snackBarOpen = !snackBarOpen;
      debugger
      username === "GWL" && password === "123" ? history.push("/menu") : (username == "" && password == "" ? message = "Enter Credentials" :
        message = "Invalid Credentials");
      debugger
      return {
        ...state, message, snackBarOpen
      };

    case actionTypes.HANDLE_FIELD_CHANGE:
      const {
        property, value, propertyObject
      } = action.payload;
console.log(state,value,property, value, propertyObject);
      return {
        ...state,
        [propertyObject]: {
          ...state[propertyObject],
          [property]: value
        }
      };

    case actionTypes.HANDLE_CLOSE:
      var {
        snackBarOpen
      } = state;
      return {
        ...state,
        snackBarOpen: !snackBarOpen
      };

    case actionTypes.HANDLE_DRAWER_OPEN:
      var {
        open
      } = state.open;
      return {
        ...state,
        open: true
      };

    case actionTypes.HANDLE_DRAWER_CLOSE:
      var {
        open
      } = state.open;
      return {
        ...state,
        open: false
      };

    case actionTypes.HANDLE_ROLES_ON_CLICK:
      var history = action.payload.history;
      history.push('/menu/roles');
      return {
        ...state
      };

    case actionTypes.TOGGLE_DIALOG:
      debugger
      var {
        dialog, userDetails, usersList, actionList, actions, roles, roleactionList
      } = state;
      debugger
      var {
        openDialog
      } = dialog;
      var {
        title, buttonName, id
      } = action.payload;
      debugger
      openDialog = !openDialog;
      dialog = {
        title,
        buttonName,
        openDialog
      }
      debugger
      if (buttonName == 'Update') {
        if (title == 'Update User') {
          userDetails = {
            ...usersList[id - 1],
            id
          }
        }
         else {
          actions = {
            ...actionList[id - 1],
            id
          }
        }
      }
      debugger
      return {
        ...state,
        dialog,
        userDetails, actions, actionList
      };

    case actionTypes.ON_CLICK_CREATE_ROLE:
      debugger
      var {
        usersList, userDetails, dialog, roleactionList
      } = state;
      var {
        id
      } = userDetails;
      usersList[id - 1] = userDetails;
      debugger
      id = id + 1;
      debugger
      return {
        ...state,
        id,
        userDetails, usersList,
        userDetails: {
            name: '',
            mobile: '',
            email: '',
            password: '',
            rolename: '',
            id: id
          },
          dialog: {
            openDialog: false
          }

      };

    case actionTypes.ON_CLICK_UPDATE_ROLE:
      debugger
      var {
        userDetails, usersList, dialog
      } = state;
      var {
        id
      } = userDetails;
      debugger
      usersList[userDetails.id - 1] = userDetails;
      debugger
      return {
        ...state,
        userDetails,
        usersList,
        dialog: {
            openDialog: false
          },
          userDetails: {
            id: usersList.length + 1,
            name: '',
            mobile: '',
            email: '',
            password: '',
            rolename: '',
          }
      };

    case actionTypes.ON_CLICK_DELETE_ROLE:
      debugger
      var {
        usersList
      } = state;
      var {
        id
      } = action.payload;
      debugger
      usersList = usersList.filter(uList => uList.id != id);
      debugger
      return {
        ...state,
        usersList
      };


    case actionTypes.HANDLE_ACTIONS_ON_CLICK:
      var history = action.payload.history;
      history.push('/menu/actions');
      return {
        ...state
      };


    case actionTypes.ON_CLICK_CREATE_ACTION:
      debugger
      var {
        actionList, dialog, actions
      } = state;
      var {
        openDialog
      } = dialog;
      var {
        id
      } = actions;
      debugger
      actionList[id - 1] = actions;
      id = id + 1;
      debugger
      return {
        ...state,
        id,
        actions,
        actionList,
        actions: {
            actionName: '',
            id: id
          },
          dialog: {
            openDialog: false
          }
      };

    case actionTypes.ON_CLICK_UPDATE_ACTION:
      debugger
      var {
        actionList, actions, dialog,
      } = state;
      var {
        id
      } = actions;
      debugger
      actionList[actions.id - 1] = actions;
      debugger
      return {
        ...state,
        actions,
        actionList,
        dialog: {
            openDialog: false
          },
          actions: {
            id: actionList.length + 1,
            actionName: ''
          }
      };

    case actionTypes.ON_CLICK_DELETE_ACTION:
      debugger
      var {
        actionList,roleactionList
      } = state;
      var {
        id
      } = action.payload;
      debugger
      actionList = actionList.filter(aList => aList.id != id);
      roleactionList=roleactionList.filter(blist=>blist.id !=id);
      debugger
      return {
        ...state,
        actionList,roleactionList
      };

    case actionTypes.HANDLE_ROLE_ACTION_ON_CLICK:
      var history = action.payload.history;
      history.push('/menu/role-action');
      return {
        ...state
      };

    case actionTypes.MAP_ACTION_ROLE:
    var {roleAction,roleactionList,dialog}=state;
    var {actionName,roletype}=roleAction;
    var {
      id
    } = roleAction;
    debugger
    roleactionList[roleAction.id - 1] = roleAction;
    id = id + 1;
    debugger
    return {
      ...state,
      id,
      roleAction,
      roleactionList,
      roleAction: {
          actionNames: [],roleNames:[],
          id: id
        },
        dialog: {
          openDialog: false
        }
    };


    default:
      return state;

  }
}
export default reducer;
