import "./Page404.css";
import {NavLink} from "react-router-dom";
import {useTitle} from "../../../Utils/UseTitle.ts";

export function Page404() {
    useTitle("Page not found")
    return (
        <div className="Page404">
            <NavLink to={"/home"}>חזור לדף הבית</NavLink>
			<h1>404</h1>
            <h4>העמוד המבוקש אינו נמצא</h4>
        </div>
    );
}
