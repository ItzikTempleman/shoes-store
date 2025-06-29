import "./Register.css";
import {useTitle} from "../../../Utils/UseTitle.ts";
import {useForm} from "react-hook-form";

import type {UserModel} from "../../../Models/user-model/UserModel.ts";
import {useNavigate} from "react-router-dom";
import {notify} from "../../../Utils/Notify.ts";
import {userService} from "../../../Services/UserService.ts";
import {Button, TextField} from "@mui/material";

export function Register() {
    useTitle("Registration")
    const {register, handleSubmit} = useForm<UserModel>();
    const navigate = useNavigate();


    async function send(user: UserModel) {
        try {
            await userService.register(user)
            notify.success("ברוך הבא")
            navigate("/home")
        } catch (err: unknown) {
            notify.error(err);
            navigate("/loginScreen")
        }
    }


    return (
        <div className="Register">
            <form onSubmit={handleSubmit(send)}>
                <TextField label="שם פרטי" fullWidth inputProps={{minLength: 2, maxLength: 30}} type="text" required
                           placeholder="שם פרטי" {...register("firstName")}/>
                <TextField label="שם משפחה" fullWidth inputProps={{minLength: 2, maxLength: 30}} type="text" required
                           placeholder="שם משפחה" {...register("lastName")}/>
                <TextField label="הזן אימייל" fullWidth inputProps={{minLength: 2, maxLength: 30}} type="email" required
                           placeholder="הזן אימייל" {...register("email")}/>
                <TextField label="הזן סיסמה" fullWidth inputProps={{minLength: 2, maxLength: 30}} type="password"
                           required placeholder="הזן סיסמה" {...register("password")}/>
                <Button variant="contained"  color="primary" fullWidth  type="submit">הרשם</Button>
            </form>
        </div>
    );
}
