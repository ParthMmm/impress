import { FETCH_POSTS } from "../actions/types";

export default function foo(state = null, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload.reverse() || null;

    default:
      return state;
  }
}
