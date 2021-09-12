import { LOGIN, LOGOUT } from "../types";

const initialState = {
    auth: false,
    user: {},
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                auth: true,
            };
            break;

        case LOGOUT:
            return {
                ...state,
                auth: false,
            };
            break;

        default:
            return {
                ...state,
            };
    }
};
export default authReducer;
