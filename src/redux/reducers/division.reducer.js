import {
    DELETE_DIVISION,
    ERROR_DIVISION,
    LOADED_DIVISION,
    LOADED_DIVISIONS,
    LOADING_DIVISION,
    SUCCESS_DIVISION,
} from "../types";

const initialState = {
    divisions: [],
    division: {},
    isLoading: false,
    success: false,
    msg: {},
};

const divisionReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_DIVISION: {
            return {
                ...state,
                success: false,
                isLoading: true,
            };
        }

        case LOADED_DIVISION: {
            return {
                ...state,
                isLoading: false,
                division: action.payload,
            };
        }

        case LOADED_DIVISIONS: {
            return {
                ...state,
                isLoading: false,
                divisions: action.payload,
            };
        }

        case SUCCESS_DIVISION: {
            return {
                ...state,
                isLoading: false,
                success: true,
                msg: action.message,
            };
        }
        case DELETE_DIVISION: {
            let newdivision = state.divisions.filter(
                (division) => division._id !== action.payload
            );
            return {
                ...state,
                isLoading: false,
                success: true,
                divisions: newdivision,
                msg: action.message,
            };
        }

        case ERROR_DIVISION: {
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

export default divisionReducer;
