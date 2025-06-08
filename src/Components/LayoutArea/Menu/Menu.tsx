import "./Menu.css";
import {NavLink} from "react-router-dom";

export function Menu() {
    return (
        <div className="Menu">
            <h3>תפריט</h3>
            <NavLink to={"/home"}>דף הבית</NavLink>
            <NavLink to={"/products"}>מוצרים</NavLink>
            <NavLink to={"/success-stories"}>סיפורי הצלחה</NavLink>
            <NavLink to={"/employees"}>העובדים שלנו</NavLink>
            <NavLink to="/employees/new">הוסף עובד</NavLink>
            <NavLink to={"/about"}>מי אנחנו</NavLink>
        </div>
    );
}
