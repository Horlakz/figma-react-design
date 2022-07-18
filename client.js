import axios from "axios";

axios.defaults.baseURL = "http://www.omdbapi.com/?apikey=1b123409";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.responseEncoding = "utf8";

export const client = axios.create({});
