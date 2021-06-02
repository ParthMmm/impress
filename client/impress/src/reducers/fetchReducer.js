import { FETCH_ACCESSORIES } from "../actions/types";

export default function foo(state = [], action) {
  switch (action.type) {
    case FETCH_ACCESSORIES:
      return action.payload;

    default:
      return state;
  }
}
