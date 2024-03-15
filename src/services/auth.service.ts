import { instance } from "../api/axios.api";
import { IUserData, IUserDataResponse } from "../types";

export const AuthService = {
    async register(userData: IUserData): Promise<IUserDataResponse | undefined> {
        const { data } = await instance.post('user', userData);
        return data;
    },

    async login() {},    

    async me() {}
}