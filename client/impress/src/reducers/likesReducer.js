import { FETCH_LIKES } from "../actions/types";

export default function foo(state = [], action) {
  switch (action.type) {
    case FETCH_LIKES:
      return action.payload;

    default:
      return state;
  }
}
