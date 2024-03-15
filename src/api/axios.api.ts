import axios from "axios";
import { getTokenFromLocalStorage } from "../helpers/localstorage.helper";

export const instance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {
        Authorization: 'Bearer ' + getTokenFromLocalStorage()
    }
})