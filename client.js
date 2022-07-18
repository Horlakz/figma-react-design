import axios from "axios";

axios.defaults.baseURL = "http://www.omdbapi.com/";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.responseEncoding = "utf8";

export const client = axios.create({});
