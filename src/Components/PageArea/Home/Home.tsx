import "./Home.css";
import {useTitle} from "../../../Utils/UseTitle.ts";

export function Home() {
    useTitle("Home")
    const date =new Date();
    const dayOfMonth=date.getDate()
    return (
        <div className="Home">
            {dayOfMonth === 1 && <h3>היום ה1 לחודש. קנה זוג נעלי ריצה נייק וקבל את השני ב50 אחוז</h3>}


        </div>
    );
}
