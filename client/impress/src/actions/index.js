import axios from "axios";

import { AUTH_RESET, USER_REGISTER } from "./types";
import { USER_LOGIN } from "./types";
import { USER_PROFILE } from "./types";
import { LOGIN_ERROR } from "./types";
import history from "../util/history";

export const userRegister = (data) => async (dispatch) => {
  const res = await axios.post(
    `${process.env.REACT_APP_LOCAL_SERVER}signup`,
    data
  );
  // const { token } = res.data;

  // dispatch({ type: USER_REGISTER, payload: res.data });
  history.push("/");
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
  console.log(res.data);
  const { user } = res.data;
  dispatch({ type: USER_PROFILE, payload: user });
};

export const userLogOut = () => async (dispatch) => {
  await axios.get(`${process.env.REACT_APP_LOCAL_SERVER}api/logout`);
  history.push("/");
  dispatch({ type: AUTH_RESET });
};

export const authError = () => (dispatch) => {
  console.log("error");
  dispatch({ type: AUTH_RESET });
};

export const submitPost = (data) => async (dispatch) => {
  console.log("dd");
  const res = await axios.post(
    `${process.env.REACT_APP_LOCAL_SERVER}create_post`,
    data
  );
  console.log(res);

  // dispatch({ type: USER_PROFILE, payload: user });
};
