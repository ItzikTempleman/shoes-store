import "./Header.css";

import {UserMenu} from "../../UserArea/UserMenu/UserMenu.tsx";

export function Header() {
    return (
        <div className="Header">
            <h3>החנות של איציק</h3>
            <div>
                <UserMenu/>
            </div>


        </div>

    );
}
