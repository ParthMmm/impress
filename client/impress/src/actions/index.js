import axios from "axios";

import { USER_REGISTER } from "./types";
import { USER_LOGIN } from "./types";
import { USER_PROFILE } from "./types";

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
  dispatch({ type: USER_LOGIN, payload: res.data });
};

export const userProfile = (data) => async (dispatch) => {
  const res = await axios.get(
    `${process.env.REACT_APP_LOCAL_SERVER}user/profile?secret_token=${data}`
  );
  console.log(res);
  dispatch({ type: USER_PROFILE, payload: res.data });
};
