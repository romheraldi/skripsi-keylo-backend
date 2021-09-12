import {
    DELETE_CATEGORY,
    ERROR_CATEGORY,
    LOADED_CATEGORY,
    LOADED_CATEGORYS,
    LOADING_CATEGORY,
    SUCCESS_CATEGORY,
} from "../types";

const initialState = {
    categorys: [],
    category: {},
    isLoading: false,
    success: false,
    msg: {},
};

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_CATEGORY: {
            return {
                ...state,
                success: false,
                isLoading: true,
            };
        }

        case LOADED_CATEGORY: {
            return {
                ...state,
                isLoading: false,
                category: action.payload,
            };
        }

        case LOADED_CATEGORYS: {
            return {
                ...state,
                isLoading: false,
                categorys: action.payload,
            };
        }

        case SUCCESS_CATEGORY: {
            return {
                ...state,
                isLoading: false,
                success: true,
                msg: action.message,
            };
        }
        case DELETE_CATEGORY: {
            let newcategory = state.categorys.filter(
                (category) => category._id !== action.payload
            );
            return {
                ...state,
                isLoading: false,
                success: true,
                categorys: newcategory,
                msg: action.message,
            };
        }

        case ERROR_CATEGORY: {
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

export default categoryReducer;
