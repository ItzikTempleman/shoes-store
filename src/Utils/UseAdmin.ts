import {useSelector} from "react-redux";
import type {AppState} from "../Redux/Store.ts";
import type {UserModel} from "../Models/user-model/UserModel.ts";
import {useNavigate} from "react-router-dom";
import { useEffect} from "react";
import {Role} from "../Models/user-model/Role.ts";
import {notify} from "./Notify.ts";

export function useAdmin() {
const user = useSelector<AppState, UserModel>(userState=>userState.user);
const navigate= useNavigate()

    useEffect(() => {
        if (user?.role !== Role.Admin){
            notify.error("You are not an admin")
            navigate("/login")
        }
    }, []);
}


