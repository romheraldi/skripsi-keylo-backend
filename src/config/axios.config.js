import axios from "axios";

import { configdata } from "./config";

const getConfig = () => {
    const config = {
        // baseURL: process.env.NODE_ENV === "production" ? 'https://api.rupira.com/' : 'https://lit-lowlands-24059.herokuapp.com/',
        baseURL: `http://${configdata.base_url}/api`,
        headers: {
            "Content-type": "application/json",
        },
    };
    return config;
};

const myAxios = () => {
    return axios.create(getConfig());
};

export default myAxios;
