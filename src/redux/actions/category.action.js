import axios from "../../config/axios.config";
import {
    LOADING_CATEGORY,
    LOADED_CATEGORY,
    LOADED_CATEGORYS,
    DELETE_CATEGORY,
    SUCCESS_CATEGORY,
} from "../types";

export const loadCategorys = () => (dispatch) => {
    dispatch({
        type: LOADING_CATEGORY,
    });

    return axios()
        .get("/category")
        .then((res) => {

            dispatch({
                type: LOADED_CATEGORYS,
                payload: res.data,
            });
        })
        .catch((err) => {
            return console.log(err.message);
        });
};

export const getCategory = (id) => (dispatch) => {
    dispatch({
        type: LOADING_CATEGORY,
    });

    return axios()
        .get(`/category/${id}`)
        .then((res) => {

            dispatch({
                type: LOADED_CATEGORY,
                payload: res.data,
            });
        })
        .catch((err) => {
            return console.log(err.message);
        });
};

export const addCategory = (category) => (dispatch) => {
    return axios()
        .post("/category", category)
        .then((res) => {
            dispatch({
                type: SUCCESS_CATEGORY,
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

export const editCategory = (id, category, callback) => (dispatch) => {
    return axios()
        .put(`/category/${id}`, category)
        .then((res) => {
            // console.log(room);
            dispatch({
                type: SUCCESS_CATEGORY,
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

export const deleteCategory = (id) => (dispatch) => {
    return axios()
        .delete(`/category/${id}`)
        .then((res) => {
            dispatch({
                type: DELETE_CATEGORY,
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
