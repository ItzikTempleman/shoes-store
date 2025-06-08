import "./Copyrights.css";

export function Copyrights() {
    const date = new Date();
    const year = date.getFullYear()

    return (
        <div className="Copyrights">
            <p> &copy; {year} Itzik Templeman <sup>&reg;</sup> חנות הנעליים של איציק</p>
        </div>
    );
}
