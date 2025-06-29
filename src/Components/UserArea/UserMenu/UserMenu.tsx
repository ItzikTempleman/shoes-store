import "./UserMenu.css";
import {NavLink, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import type {AppState} from "../../../Redux/Store.ts";
import type {UserModel} from "../../../Models/user-model/UserModel.ts";
import {userService} from "../../../Services/UserService.ts";
import {notify} from "../../../Utils/Notify.ts";


export function UserMenu() {
    const user = useSelector<AppState, UserModel>(userState => userState.user);
    const navigate = useNavigate();


    function logout() {
        userService.logout();
        notify.success("Bye");
        navigate("/home")
    }

    return (
        <div className="UserMenu">
            {
                !user?.id && <div>
                    <NavLink to="/login">כניסה</NavLink>
                </div>
            }
            {
                user?.id && <div>
                    <span>Hello {user.firstName} {user.lastName} | </span>
                    <NavLink to="#" onClick={logout}>התנתק</NavLink>
                </div>
            }

        </div>
    );
}
