import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import divisionReducer from "./division.reducer";
import positionReducer from "./position.reducer";

export default combineReducers({
    auth: authReducer,
    division: divisionReducer,
    position: positionReducer
});
