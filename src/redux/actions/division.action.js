import axios from "../../config/axios.config";
import {
    LOADING_DIVISION,
    LOADED_DIVISION,
    LOADED_DIVISIONS,
    DELETE_DIVISION,
    SUCCESS_DIVISION,
} from "../types";

export const loadDivisions = () => (dispatch) => {
    dispatch({
        type: LOADING_DIVISION,
    });

    return axios()
        .get("/division")
        .then((res) => {

            dispatch({
                type: LOADED_DIVISIONS,
                payload: res.data,
            });
        })
        .catch((err) => {
            return console.log(err.message);
        });
};

export const getDivision = (id) => (dispatch) => {
    dispatch({
        type: LOADING_DIVISION,
    });

    return axios()
        .get(`/division/${id}`)
        .then((res) => {

            dispatch({
                type: LOADED_DIVISION,
                payload: res.data,
            });
        })
        .catch((err) => {
            return console.log(err.message);
        });
};

export const addDivision = (division) => (dispatch) => {
    return axios()
        .post("/division", division)
        .then((res) => {
            dispatch({
                type: SUCCESS_DIVISION,
                payload: res.data,
                message: {
                    message: res.data.message,
                },
            });
        })
        .catch((err) => {
            return console.log(err.message);
        });
};

export const editDivision = (id, division, callback) => (dispatch) => {
    return axios()
        .put(`/division/${id}`, division)
        .then((res) => {
            // console.log(room);
            dispatch({
                type: SUCCESS_DIVISION,
                payload: res.data,
                message: {
                    message: res.data.message,
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

export const changePassword = (id, division, callback) => (dispatch) => {
    return axios()
        .put(`/division/${id}/password`, division)
        .then((res) => {
            // console.log(room);
            dispatch({
                type: SUCCESS_DIVISION,
                payload: res.data,
                message: {
                    message: res.data.message,
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

export const deleteDivision = (id) => (dispatch) => {
    return axios()
        .delete(`/division/${id}`)
        .then((res) => {
            const { status, message } = res.data;
            dispatch({
                type: DELETE_DIVISION,
                payload: id,
                message: {
                    message: res.data.message,
                },
            });
        })
        .catch((err) => {
            return console.log(err.message);
        });
};
