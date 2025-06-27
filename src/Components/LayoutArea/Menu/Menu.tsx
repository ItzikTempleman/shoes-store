import "./Menu.css";
import {NavLink} from "react-router-dom";

export function Menu() {
    return (
        <div className="Menu">

            <NavLink to="/home" className="nav-link">דף הבית</NavLink>


            <NavLink to="/employees/new" className="nav-link">הוסף עובד</NavLink>
            <NavLink to="/employees" end className="nav-link">העובדים שלנו</NavLink>

            <NavLink to="/suppliers/new" className="nav-link" >הוסף ספק</NavLink>
            <NavLink to="/suppliers" end className="nav-link">הספקים שלנו</NavLink>

            <NavLink to="/products/new" className="nav-link">הוסף מוצר </NavLink>
            <NavLink to="/products" end className="nav-link">המוצרים שלנו </NavLink>

            <NavLink to="/success-stories" className="nav-link">סיפורי הצלחה</NavLink>
            <NavLink to= "/about" className="nav-link">מי אנחנו</NavLink>
        </div>
    );
}
