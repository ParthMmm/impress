import axios from "axios";

import { AUTH_RESET, USER_LOGOUT, USER_REGISTER } from "./types";
import { USER_LOGIN } from "./types";
import { USER_PROFILE } from "./types";
import { LOGIN_ERROR } from "./types";
import { FETCH_POSTS } from "./types";
import { FETCH_ACCESSORIES } from "./types";
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

export const logOut = () => async (dispatch) => {
  await axios.get(`${process.env.REACT_APP_LOCAL_SERVER}api/logout`);

  dispatch({ type: USER_LOGOUT });
};

export const submitPost = (data) => async (dispatch) => {
  console.log(data);
  // const res = await axios.post(
  //   "https://api.cloudinary.com/v1_1/dnswq1qos/upload",
  //   data.picture,
  //   {
  //     upload_preset: "bkbn5m1r",
  //   },
  //   { headers: { "Content-Type": null } }
  // );
  // console.log(res.data);
  const res1 = await axios.post(
    `${process.env.REACT_APP_LOCAL_SERVER}user/create_post?secret_token=${data}`,
    data
  );
  // axios.post(`${process.env.REACT_APP_LOCAL_SERVER}create_post`, formData, {
  //   headers: { "Content-type": "application/x-www-form-urlencoded" },
  // });

  console.log(res1.data);

  // dispatch({ type: USER_PROFILE, payload: user });
};

export const fetchPosts = (data) => async (dispatch) => {
  const res = await axios.get(
    `${process.env.REACT_APP_LOCAL_SERVER}user/posts?secret_token=${data}`
  );

  dispatch({ type: FETCH_POSTS, payload: res.data });
};

export const fetchAccessories = () => async (dispatch) => {
  const res = await axios.get(
    `${process.env.REACT_APP_LOCAL_SERVER}accessories`
  );

  dispatch({ type: FETCH_ACCESSORIES, payload: res.data });

  // let { films } = res1.data;
  // dispatch({ type: FETCH_FILMS, payload: films });
};
