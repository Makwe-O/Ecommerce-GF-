import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import cartReducer from "./cart/cartReducer";

const reducers = combineReducers({
  userReducer,
  cartReducer
});

export default reducers;
