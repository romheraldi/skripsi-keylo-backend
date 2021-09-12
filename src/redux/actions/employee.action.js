import axios from "../../config/axios.config";
import {
    LOADING_EMPLOYEE,
    LOADED_EMPLOYEE,
    LOADED_EMPLOYEES,
    DELETE_EMPLOYEE,
    SUCCESS_EMPLOYEE,
} from "../types";

export const loadEmployees = () => (dispatch) => {
    dispatch({
        type: LOADING_EMPLOYEE,
    });

    return axios()
        .get("/employee")
        .then((res) => {

            dispatch({
                type: LOADED_EMPLOYEES,
                payload: res.data,
            });
        })
        .catch((err) => {
            return console.log(err.message);
        });
};

export const getEmployee = (id) => (dispatch) => {
    dispatch({
        type: LOADING_EMPLOYEE,
    });

    return axios()
        .get(`/employee/${id}`)
        .then((res) => {

            dispatch({
                type: LOADED_EMPLOYEE,
                payload: res.data,
            });
        })
        .catch((err) => {
            return console.log(err.message);
        });
};

export const addEmployee = (employee) => (dispatch) => {
    return axios()
        .post("/employee", employee)
        .then((res) => {
            dispatch({
                type: SUCCESS_EMPLOYEE,
                payload: res.data,
                message: {
                    message: "Sukses memasukan data baru",
                },
            });
        })
        .catch((err) => {
            return console.log(err.message);
        });
};

export const editEmployee = (id, employee, callback) => (dispatch) => {
    return axios()
        .put(`/employee/${id}`, employee)
        .then((res) => {
            // console.log(room);
            dispatch({
                type: SUCCESS_EMPLOYEE,
                payload: res.data,
                message: {
                    message: "Sukses mengubah data",
                },
            });

            if (callback) {
                return callback(res.data);
            }
        })
        .catch((err) => {
            return console.log(err.message);
        });
};

export const deleteEmployee = (id) => (dispatch) => {
    return axios()
        .delete(`/employee/${id}`)
        .then((res) => {
            dispatch({
                type: DELETE_EMPLOYEE,
                payload: id,
                message: {
                    message: "Sukses menghapus data",
                },
            });
        })
        .catch((err) => {
            return console.log(err.message);
        });
};
