import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import divisionReducer from "./division.reducer";
import positionReducer from "./position.reducer";
import employeeReducer from "./employee.reducer";
import categoryReducer from "./category.reducer";
import doorlockReducer from "./doorlock.reducer";

export default combineReducers({
    auth: authReducer,
    division: divisionReducer,
    position: positionReducer,
    employee: employeeReducer,
    category: categoryReducer,
    doorlock: doorlockReducer,
});
