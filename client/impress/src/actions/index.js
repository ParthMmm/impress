import axios from "axios";

import { USER_REGISTER } from "./types";
import { USER_LOGIN } from "./types";
import { USER_PROFILE } from "./types";
import { USER_LOGOUT } from "./types";
import { LOGIN_ERROR } from "./types";
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
    dispatch({ type: USER_LOGIN, payload: { token, authorized: true } });
  }
};

export const userProfile = (data) => async (dispatch) => {
  const res = await axios.get(
    `${process.env.REACT_APP_LOCAL_SERVER}user/profile?secret_token=${data}`
  );
  dispatch({ type: USER_PROFILE, payload: res.data });
};

export const userLogOut = () => async (dispatch) => {
  const res = await axios.get(
    `${process.env.REACT_APP_LOCAL_SERVER}api/logout`
  );
  dispatch({ type: USER_LOGOUT, payload: res.data });
};
