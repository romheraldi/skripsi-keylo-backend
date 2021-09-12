import {
    DELETE_DOORLOCK,
    ERROR_DOORLOCK,
    LOADED_DOORLOCK,
    LOADED_DOORLOCKS,
    LOADING_DOORLOCK,
    SUCCESS_DOORLOCK,
} from "../types";

const initialState = {
    doorlocks: [],
    doorlock: {},
    isLoading: false,
    success: false,
    msg: {},
};

const doorlockReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_DOORLOCK: {
            return {
                ...state,
                success: false,
                isLoading: true,
            };
        }

        case LOADED_DOORLOCK: {
            return {
                ...state,
                isLoading: false,
                doorlock: action.payload,
            };
        }

        case LOADED_DOORLOCKS: {
            return {
                ...state,
                isLoading: false,
                doorlocks: action.payload,
            };
        }

        case SUCCESS_DOORLOCK: {
            return {
                ...state,
                isLoading: false,
                success: true,
                msg: action.message,
            };
        }
        case DELETE_DOORLOCK: {
            let newdoorlock = state.doorlocks.filter(
                (doorlock) => doorlock._id !== action.payload
            );
            return {
                ...state,
                isLoading: false,
                success: true,
                doorlocks: newdoorlock,
                msg: action.message,
            };
        }

        case ERROR_DOORLOCK: {
            return {
                ...state,
                isLoading: false,
                msg: action.payload,
            };
        }

        default: {
            return {
                ...state,
            };
        }
    }
};

export default doorlockReducer;
