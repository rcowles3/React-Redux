import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import PostReducer from "./reducerPosts";

const rootReducer = combineReducers({
  posts: PostReducer,
  form: formReducer
});

export default rootReducer;
