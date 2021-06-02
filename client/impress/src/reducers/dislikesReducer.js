import { FETCH_DISLIKES } from "../actions/types";

export default function foo(state = [], action) {
  switch (action.type) {
    case FETCH_DISLIKES:
      return action.payload;
    default:
      return state;
  }
}
