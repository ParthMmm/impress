import { DISLIKE_POST, LIKE_POST } from "../actions/types";

export default function foo(state = [], action) {
  switch (action.type) {
    case LIKE_POST:
      return action.payload;
    case DISLIKE_POST:
      return action.payloads;
    default:
      return state;
  }
}
