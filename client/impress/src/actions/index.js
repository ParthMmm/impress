import axios from "axios";

import { USER_REGISTER } from "./types";

export const userRegister = (data) => async (dispatch) => {
  const res = await axios.post("/signup", data);
  dispatch({ type: USER_REGISTER, payload: res.data });
};
