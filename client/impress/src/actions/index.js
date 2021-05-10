import axios from "axios";

import { AUTH_RESET, USER_REGISTER } from "./types";
import { USER_LOGIN } from "./types";
import { USER_PROFILE } from "./types";
import { USER_LOGOUT } from "./types";
import { LOGIN_ERROR } from "./types";
import { CURRENT_USER } from "./types";
import history from "../util/history";

export const userRegister = (data) => async (dispatch) => {
  const res = await axios.post(
    `${process.env.REACT_APP_LOCAL_SERVER}signup`,
    data
  );
  dispatch({ type: USER_REGISTER, payload: res.data });
};

export const userLogin = (data) => async (dispatch) => {
  const res = await axios.post(
    `${process.env.REACT_APP_LOCAL_SERVER}login`,
    data
  );
  console.log(res);
  if (res.status === 201) {
    // console.log(res.data);
    dispatch({
      type: LOGIN_ERROR,
      payload: { msg: res.data, authorized: false, error: true },
    });
  } else {
    const { token } = res.data;
    history.push("/");
    dispatch({ type: USER_LOGIN, payload: { token, authorized: true } });
  }
};

export const userProfile = (data) => async (dispatch) => {
  const res = await axios.get(
    `${process.env.REACT_APP_LOCAL_SERVER}user/profile?secret_token=${data}`
  );
  const { user } = res.data;
  dispatch({ type: USER_PROFILE, payload: user });
};

export const userLogOut = () => async (dispatch) => {
  const res = await axios.get(
    `${process.env.REACT_APP_LOCAL_SERVER}api/logout`
  );
  history.push("/");
  dispatch({ type: AUTH_RESET });
};

export const authError = () => (dispatch) => {
  console.log("error");
  dispatch({ type: AUTH_RESET, payload: [] });
};
