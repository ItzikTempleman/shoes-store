import "./About.css";
import {useTitle} from "../../../Utils/UseTitle.ts";

export function About() {
    useTitle("About")
    return (
        <div className="About">
            <h2>מי אנחנו?</h2>
			<p>אנחנו חנות הנעליים המגניבה בארץ...<br/> ניתן למצוא אצלינו רק נעליים טיכותיות ומגניבות...<br/><br/> כתובת: רח סומסום 42 ת״א</p>
        </div>
    );
}
