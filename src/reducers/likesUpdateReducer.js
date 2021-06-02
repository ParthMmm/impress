import { FETCH_LIKES_SUCCESS } from "../actions/types";

export default function foo(state = false, action) {
  switch (action.type) {
    case FETCH_LIKES_SUCCESS:
      return true;

    default:
      return state;
  }
}
