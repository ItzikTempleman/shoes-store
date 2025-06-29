import "./Menu.css";
import {NavLink} from "react-router-dom";
import type {AppState} from "../../../Redux/Store.ts";
import type {UserModel} from "../../../Models/user-model/UserModel.ts";
import {useSelector} from "react-redux";
import {Role} from "../../../Models/user-model/Role.ts";

export function Menu() {
    const user = useSelector<AppState, UserModel>(state => state.user);
    return (
        <div className="Menu">

            <NavLink to="/home" className="nav-link">דף הבית</NavLink>
            <hr className="menu-divider"/>
            <NavLink to="/employees/new" className="nav-link">הוסף עובד</NavLink>
            <NavLink to="/employees" end className="nav-link">העובדים שלנו</NavLink>
            <hr className="menu-divider"/>
            <NavLink to="/suppliers/new" className="nav-link">הוסף ספק</NavLink>
            <NavLink to="/suppliers" end className="nav-link">הספקים שלנו</NavLink>
            <hr className="menu-divider"/>
            <NavLink to="/products/new" className="nav-link">הוסף מוצר </NavLink>
            <NavLink to="/products" end className="nav-link">המוצרים שלנו </NavLink>
            <hr className="menu-divider"/>
            <NavLink to="/success-stories" className="nav-link">סיפורי הצלחה</NavLink>
            <NavLink to="/about" className="nav-link">מי אנחנו</NavLink>
            <hr className="menu-divider"/>
            <NavLink to="/register" className="nav-link">הרשמה</NavLink>
            {user?.role === Role.Admin && <NavLink to="/admin" className="nav-link">מנהל מערכת</NavLink>}
        </div>
    );
}
