import axios from "axios";

import {
  AUTH_RESET,
  FETCH_LIKES,
  USER_LOGOUT,
  USER_REGISTER,
  FETCH_DISLIKES,
  LIKE_POST,
  DISLIKE_POST,
} from "./types";
import { USER_LOGIN } from "./types";
import { USER_PROFILE } from "./types";
import { LOGIN_ERROR } from "./types";
import { FETCH_POSTS } from "./types";
import { FETCH_ACCESSORIES } from "./types";
import history from "../util/history";
import { persist } from "../util/store";

export const userRegister = (data) => async (dispatch) => {
  const res = await axios.post(
    `${process.env.REACT_APP_LOCAL_SERVER}api/signup`,
    data
  );
  // const { token } = res.data;

  // dispatch({ type: USER_REGISTER, payload: res.data });
  history.push("/");
  dispatch({ type: USER_REGISTER, payload: res.data });
};

export const userLogin = (data) => async (dispatch) => {
  const res = await axios.post(
    `${process.env.REACT_APP_LOCAL_SERVER}api/login`,
    data
  );
  if (res.status === 201) {
    // console.log(res.data);
    dispatch({
      type: LOGIN_ERROR,
      payload: { msg: res.data, authorized: false, error: true },
    });
  } else {
    const { token } = res.data;
    // history.push("/");
    history.push({
      pathname: "/loading",
      state: { message: "Fetching Your Info  😎", path: "/" },
    });
    dispatch({ type: USER_LOGIN, payload: { token, authorized: true } });
  }
};

export const userProfile = (token) => async (dispatch) => {
  const res = await axios.get(
    `${process.env.REACT_APP_LOCAL_SERVER}api/user/profile`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  const { user } = res.data;
  dispatch({ type: USER_PROFILE, payload: user });
};

export const userLogOut = () => async (dispatch) => {
  await axios
    .get(`${process.env.REACT_APP_LOCAL_SERVER}api/logout`)
    .then(() => dispatch({ type: AUTH_RESET }))
    .then(() => persist.flush())
    .then(() =>
      history.push({
        pathname: "/loading",
        state: { message: "Signing Out  ", path: "/" },
      })
    );
};

export const authError = () => (dispatch) => {
  persist.flush();

  dispatch({ type: AUTH_RESET });
};

export const logOut = () => async (dispatch) => {
  await axios.get(`${process.env.REACT_APP_LOCAL_SERVER}api/logout`);

  dispatch({ type: USER_LOGOUT });
};

// export const submitPost = (data) => async (dispatch) => {
//   console.log(data);
//   // const res = await axios.post(
//   //   "https://api.cloudinary.com/v1_1/dnswq1qos/upload",
//   //   data.picture,
//   //   {
//   //     upload_preset: "bkbn5m1r",
//   //   },
//   //   { headers: { "Content-Type": null } }
//   // );
//   // console.log(res.data);
//   const res1 = await axios.post(
//     `${process.env.REACT_APP_LOCAL_SERVER}api/user/create_post?secret_token=${data}`,
//     data
//   );
//   // axios.post(`${process.env.REACT_APP_LOCAL_SERVER}create_post`, formData, {
//   //   headers: { "Content-type": "application/x-www-form-urlencoded" },
//   // });

//   console.log(res1.data);

//   // dispatch({ type: USER_PROFILE, payload: user });
// };

export const fetchPosts = () => async (dispatch) => {
  const res = await axios.get(
    `${process.env.REACT_APP_LOCAL_SERVER}api/posts`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  if (res.status === 200) {
    dispatch({ type: FETCH_POSTS, payload: res.data });
  }
};

export const fetchAccessories = () => async (dispatch) => {
  const res = await axios.get(
    `${process.env.REACT_APP_LOCAL_SERVER}api/accessories`
  );

  dispatch({ type: FETCH_ACCESSORIES, payload: res.data });

  // let { films } = res1.data;
  // dispatch({ type: FETCH_FILMS, payload: films });
};

export const likePost = (token, id) => async (dispatch) => {
  const objID = { id };

  const res = await axios.post(
    `${process.env.REACT_APP_LOCAL_SERVER}api/user/like_post`,
    objID,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  if (res.status === 400) {
    // dispatch({ type: LIKE_ERROR });
  } else if (res.status === 200) {
    dispatch({ type: LIKE_POST, payload: res.data });
  }

  // dispatch({ type: FETCH_POSTS, payload: res.data });
};

export const dislikePost = (token, id) => async (dispatch) => {
  const objID = { id };

  const res = await axios.post(
    `${process.env.REACT_APP_LOCAL_SERVER}api/user/dislike_post`,
    objID,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  if (res.status === 400) {
    // dispatch({ type: LIKE_ERROR });
  } else if (res.status === 200) {
    dispatch({ type: DISLIKE_POST, payload: res.data });
  }
};

export const fetchLikes = (token) => async (dispatch) => {
  const res = await axios.get(
    `${process.env.REACT_APP_LOCAL_SERVER}api/user/find_likes`,
    { headers: { Authorization: `Bearer ${token}` } }
  );

  dispatch({ type: FETCH_LIKES, payload: { likes: res.data } });
};

export const fetchDislikes = (token) => async (dispatch) => {
  const res = await axios.get(
    `${process.env.REACT_APP_LOCAL_SERVER}api/user/find_dislikes`,
    { headers: { Authorization: `Bearer ${token}` } }
  );

  dispatch({ type: FETCH_DISLIKES, payload: { dislikes: res.data } });
};
