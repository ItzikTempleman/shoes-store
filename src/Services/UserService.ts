import {jwtDecode} from "jwt-decode";
import type {UserModel} from "../Models/user-model/UserModel.ts";
import {store} from "../Redux/Store.ts";
import {userSlice} from "../Redux/UserSlice.ts";
import axios from "axios";
import {appConfig} from "../Utils/AppConfig.ts";
import type {CredentialsModel} from "../Models/user-model/CredentialsModel.ts";

class UserService {

    public constructor() {
        const token = localStorage.getItem("token");
        if (token) {
            const dbUser = jwtDecode<{ user: UserModel }>(token).user;
            store.dispatch(userSlice.actions.initUser(dbUser))
        }
    }

    public async register(user: UserModel) {
        const response = await axios.post<string>(appConfig.registerUrl, user);
        const token = response.data;
        console.log(token)
        const dbUser = jwtDecode<{ user: UserModel }>(token).user;
        store.dispatch(userSlice.actions.initUser(dbUser));
        localStorage.setItem("token", token);
    }

    public async login(credential: CredentialsModel) {
        const response = await axios.post<string>(appConfig.loginUrl, credential)
        const token = response.data;
        const dbUser = jwtDecode<{ user: UserModel }>(token)
        store.dispatch(userSlice.actions.initUser(dbUser))
        localStorage.setItem("token", token);
    }

    public logout() {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        store.dispatch(userSlice.actions.logoutUser())
        localStorage.removeItem("token");
    }
}

export const userService = new UserService();
