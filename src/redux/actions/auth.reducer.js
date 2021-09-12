import { toast } from "react-toastify";
import axios from "../../config/axios.config";

import { LOGIN, LOGOUT, MESSAGES } from "../types";

export const login = (credentials) => (dispatch) => {
    return axios()
        .post("/admin/login", credentials)
        .then((res) => {
            const { data } = res.data;
            console.log(data);

            localStorage.setItem("user", JSON.stringify(data));

            dispatch({
                type: LOGIN,
            });

            toast.success("Berhasil masuk");
        })
        .catch((err) => {
            toast.error(err.response.data.message);
        });
};

export const refresh = () => (dispatch) => {
    return axios()
        .get("/auth/token")
        .then((res) => {
            const { data } = res.data;

            localStorage.setItem("token", data.accessToken);

            dispatch({
                type: LOGIN,
            });
        })
        .catch((err) => {
            localStorage.removeItem("token");
            dispatch({
                type: MESSAGES,
                messages: err.response.data.errors[0],
            });
            toast.success(err.response.data.errors[0].message);
            return console.log(err.message);
        });
};

export const logout = () => (dispatch) => {
    return axios()
        .get("/admin/logout")
        .then((res) => {
            localStorage.removeItem("user");

            dispatch({
                type: LOGOUT,
            });

            toast.success("Berhasil keluar");
        })
        .catch((err) => {
            toast.success(err.response.data.message);
        });
};
