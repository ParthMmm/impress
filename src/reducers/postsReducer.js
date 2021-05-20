import { FETCH_LIKES, FETCH_POSTS } from "../actions/types";

export default function foo(state = [], action) {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload;
    case FETCH_LIKES:
      return action.payload;

    default:
      return state;
  }
}
