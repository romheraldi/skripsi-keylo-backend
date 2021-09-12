import {
    DELETE_POSITION,
    ERROR_POSITION,
    LOADED_POSITION,
    LOADED_POSITIONS,
    LOADING_POSITION,
    SUCCESS_POSITION,
} from "../types";

const initialState = {
    positions: [],
    position: {},
    isLoading: false,
    success: false,
    msg: {},
};

const positionReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_POSITION: {
            return {
                ...state,
                success: false,
                isLoading: true,
            };
        }

        case LOADED_POSITION: {
            return {
                ...state,
                isLoading: false,
                position: action.payload,
            };
        }

        case LOADED_POSITIONS: {
            return {
                ...state,
                isLoading: false,
                positions: action.payload,
            };
        }

        case SUCCESS_POSITION: {
            return {
                ...state,
                isLoading: false,
                success: true,
                msg: action.message,
            };
        }
        case DELETE_POSITION: {
            let newposition = state.positions.filter(
                (position) => position._id !== action.payload
            );
            return {
                ...state,
                isLoading: false,
                success: true,
                positions: newposition,
                msg: action.message,
            };
        }

        case ERROR_POSITION: {
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

export default positionReducer;
