import axios from "../../config/axios.config";
import {
    LOADING_DOORLOCK,
    LOADED_DOORLOCK,
    LOADED_DOORLOCKS,
    DELETE_DOORLOCK,
    SUCCESS_DOORLOCK,
} from "../types";

export const loadDoorlocks = () => (dispatch) => {
    dispatch({
        type: LOADING_DOORLOCK,
    });

    return axios()
        .get("/door-lock")
        .then((res) => {

            dispatch({
                type: LOADED_DOORLOCKS,
                payload: res.data,
            });
        })
        .catch((err) => {
            return console.log(err.message);
        });
};

export const getDoorlock = (id) => (dispatch) => {
    dispatch({
        type: LOADING_DOORLOCK,
    });

    return axios()
        .get(`/door-lock/${id}`)
        .then((res) => {

            dispatch({
                type: LOADED_DOORLOCK,
                payload: res.data,
            });
        })
        .catch((err) => {
            return console.log(err.message);
        });
};

export const addDoorlock = (doorlock) => (dispatch) => {
    return axios()
        .post("/door-lock", doorlock)
        .then((res) => {
            dispatch({
                type: SUCCESS_DOORLOCK,
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

export const editDoorlock = (id, doorlock, callback) => (dispatch) => {
    return axios()
        .put(`/door-lock/${id}`, doorlock)
        .then((res) => {
            // console.log(room);
            dispatch({
                type: SUCCESS_DOORLOCK,
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

export const deleteDoorlock = (id) => (dispatch) => {
    return axios()
        .delete(`/door-lock/${id}`)
        .then((res) => {
            dispatch({
                type: DELETE_DOORLOCK,
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
