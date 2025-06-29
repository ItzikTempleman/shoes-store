import "./Login.css";
import {useTitle} from "../../../Utils/UseTitle.ts";
import {useForm} from "react-hook-form";

import type {CredentialsModel} from "../../../Models/user-model/CredentialsModel.ts";
import {useNavigate} from "react-router-dom";
import {notify} from "../../../Utils/Notify.ts";
import {userService} from "../../../Services/UserService.ts";
import {Button, TextField} from "@mui/material";

export function Login() {
    useTitle("Login")
    const {register, handleSubmit} = useForm<CredentialsModel>();
    const navigate = useNavigate();

    async function send(credentials: CredentialsModel) {
        try {
            await userService.login(credentials)
            notify.success("ברוך שובך")
            navigate("/home")
        } catch (err: unknown) {
            notify.error(err)
        }
    }


    return (
        <div className="Login">

            <form onSubmit={handleSubmit(send)}>
                <TextField label=" אימייל שלך" fullWidth inputProps={{minLength: 2, maxLength: 30}} type="email" required
                           placeholder=" אימייל שלך" {...register("email")}/>
                <TextField label="סיסמה שלך" fullWidth inputProps={{minLength: 2, maxLength: 30}} type="password"
                           required placeholder="סיסמה שלך" {...register("password")}/>
                <Button variant="contained"  color="primary" fullWidth  type="submit">הכנס</Button>
            </form>
        </div>
    );
}
