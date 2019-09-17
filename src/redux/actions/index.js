import * as actionTypes from '../actionTypes';

export const handleFieldChange = (property, value,propertyObject="login") =>{
  return {
    type : actionTypes.HANDLE_FIELD_CHANGE,
    payload : {
      property,
      value,
      propertyObject
    }
  };
};

 export const handleClose = (reason) => {
   return {
     type : actionTypes.HANDLE_CLOSE,
     payload : {
       reason
     }
   };
  };


export const onClickLogin=(history)=>{
  return {
    type : actionTypes.ON_CLICK_LOGIN,
    payload : {
      history
    }
  };
};

export const onClickLogout=(history)=>{
  return {
    type : actionTypes.ON_CLICK_LOGOUT,
    payload : {
      history
    }
  };
};


export const handleDrawerOpen = () => {
  return {
    type : actionTypes.HANDLE_DRAWER_OPEN
  };
};

export const handleDrawerClose = () => {
  return {
    type : actionTypes.HANDLE_DRAWER_CLOSE
  };
};

export const handleUserOnClick = (history) => {
  return {
    type : actionTypes.HANDLE_USER_ON_CLICK,
    payload : {
      history
    }
  };
};

export const handleRolesOnClick = (history) => {
  return {
    type : actionTypes.HANDLE_ROLES_ON_CLICK,
    payload : {
      history
    }
  };
};

 export const toggleDialog = (title= "Create User", buttonName = "Create",id=1) => {
   return {
     type : actionTypes.TOGGLE_DIALOG,
     payload : {
       title, buttonName,
       id
     }
   };
   };

export const onClickCreateRole= () => {
  return {
       type : actionTypes.ON_CLICK_CREATE_ROLE
  };
};

export const onClickUpdateRole= (id) => {
  return {
      type : actionTypes.ON_CLICK_UPDATE_ROLE,
      payload : {
        id
      }
  };
};

export const onClickDeleteRole = (id) => {
  return {
    type : actionTypes.ON_CLICK_DELETE_ROLE,
    payload : {
      id
    }
  };
};

export const onClickCreateAction =()=>{
 return{
   type:actionTypes.ON_CLICK_CREATE_ACTION
 };
};

export const onClickUpdateAction = (id) => {
  return {
    type : actionTypes.ON_CLICK_UPDATE_ACTION,
    payload : {
      id
    }
  };
};

export const onClickDeleteAction = (id) => {
  return {
    type : actionTypes.ON_CLICK_DELETE_ACTION,
    payload : {
      id
    }
  };
};

export const handleActionsOnClick =(history)=>{
 return{
   type:actionTypes.HANDLE_ACTIONS_ON_CLICK,
   payload : {
     history
   }
 };
};

export const handleRoleActionOnClick =(history)=>{
 return{
   type:actionTypes.HANDLE_ROLE_ACTION_ON_CLICK,
   payload : {
     history
   }
 };
};


export const mapRoleAction = () => {
  return {
    type : actionTypes.MAP_ACTION_ROLE
  };
};


export const handleCreateUserRole = () => {
  return {
    type : actionTypes.HANDLE_CREATE_USER_ROLE
  };
};
export const onClickUpdateUserRole=()=>{
  return{
    type:actionTypes.ON_CLICK_UPDATE_USER_ROLE
  };
}
