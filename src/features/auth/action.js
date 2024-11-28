import {
  getAuthStorage,
  removeAuthStorage,
  saveAuthStorage,
} from "../../utils/helper/storage";
import { successToast } from "../../utils/helper/error";
import { authActions } from "./slice";

const logoutHandler = () => {
  return (dispatch) => {
    removeAuthStorage();
    dispatch(authActions.logout());
    successToast("Logged out");
  };
};

const checkLoginStatus = () => {
  return (dispatch) => {
    const authDetails = getAuthStorage();

    if (authDetails) {
      dispatch(authActions.login(authDetails));
      return;
    }
    removeAuthStorage();
    dispatch(authActions.logout());
  };
};

const loginHandler = ({ id, username, role }) => {
  return (dispatch) => {
    saveAuthStorage({
      id,
      role,
      username,
    });
    dispatch(
      authActions.login({
        id,
        role,
        username,
      })
    );

    successToast("Logged in successfully");
  };
};

export { checkLoginStatus, loginHandler, logoutHandler };
