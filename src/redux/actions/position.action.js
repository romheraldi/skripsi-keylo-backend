import axios from "../../config/axios.config";
import {
    LOADING_POSITION,
    LOADED_POSITION,
    LOADED_POSITIONS,
    DELETE_POSITION,
    SUCCESS_POSITION,
} from "../types";

export const loadPositions = () => (dispatch) => {
    dispatch({
        type: LOADING_POSITION,
    });

    return axios()
        .get("/position")
        .then((res) => {

            dispatch({
                type: LOADED_POSITIONS,
                payload: res.data,
            });
        })
        .catch((err) => {
            return console.log(err.message);
        });
};

export const getPosition = (id) => (dispatch) => {
    dispatch({
        type: LOADING_POSITION,
    });

    return axios()
        .get(`/position/${id}`)
        .then((res) => {

            dispatch({
                type: LOADED_POSITION,
                payload: res.data,
            });
        })
        .catch((err) => {
            return console.log(err.message);
        });
};

export const addPosition = (position) => (dispatch) => {
    return axios()
        .post("/position", position)
        .then((res) => {
            dispatch({
                type: SUCCESS_POSITION,
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

export const editPosition = (id, position, callback) => (dispatch) => {
    return axios()
        .put(`/position/${id}`, position)
        .then((res) => {
            // console.log(room);
            dispatch({
                type: SUCCESS_POSITION,
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

export const deletePosition = (id) => (dispatch) => {
    return axios()
        .delete(`/position/${id}`)
        .then((res) => {
            dispatch({
                type: DELETE_POSITION,
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
