import { FETCH_POSTS } from "../actions/types";

export default function foo(state = [], action) {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload || null;

    default:
      return state;
  }
}