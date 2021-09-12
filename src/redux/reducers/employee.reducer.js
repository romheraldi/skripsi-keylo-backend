import {
    DELETE_EMPLOYEE,
    ERROR_EMPLOYEE,
    LOADED_EMPLOYEE,
    LOADED_EMPLOYEES,
    LOADING_EMPLOYEE,
    SUCCESS_EMPLOYEE,
} from "../types";

const initialState = {
    employees: [],
    employee: {},
    isLoading: false,
    success: false,
    msg: {},
};

const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_EMPLOYEE: {
            return {
                ...state,
                success: false,
                isLoading: true,
            };
        }

        case LOADED_EMPLOYEE: {
            return {
                ...state,
                isLoading: false,
                employee: action.payload,
            };
        }

        case LOADED_EMPLOYEES: {
            return {
                ...state,
                isLoading: false,
                employees: action.payload,
            };
        }

        case SUCCESS_EMPLOYEE: {
            return {
                ...state,
                isLoading: false,
                success: true,
                msg: action.message,
            };
        }
        case DELETE_EMPLOYEE: {
            let newemployee = state.employees.filter(
                (employee) => employee._id !== action.payload
            );
            return {
                ...state,
                isLoading: false,
                success: true,
                employees: newemployee,
                msg: action.message,
            };
        }

        case ERROR_EMPLOYEE: {
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

export default employeeReducer;
