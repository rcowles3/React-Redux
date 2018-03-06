import _ from "lodash";
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case DELETE_POST:
      return _.omit(state, action.paylod);
    // return state;

    case FETCH_POST:
      // Key interpolation
      // By placing square braces around [ action.payload.data.id ] makes a new key on the state
      // object using action.paylod.data as its value
      return {
        ...state, // adds data to stae object rather than replacing data
        [action.payload.data.id]: action.payload.data // create a new key. id: data
      };
    case FETCH_POSTS:
      console.log(action.payload.data);
      return _.mapKeys(action.payload.data, "id");
    default:
      return state;
  }
}
