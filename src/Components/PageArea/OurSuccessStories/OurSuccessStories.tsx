import "./OurSuccessStories.css";
import {useEffect, useState} from "react";
import {useTitle} from "../../../Utils/UseTitle.ts";

export function OurSuccessStories() {
    useTitle("Stories")
    const [color, setColor] = useState(``);

    useEffect(() => {
            const intervalId = setInterval(() => {
            const colorArr=[`blue`,`red`, `yellow`, `green`,`orange`,`purple`,`grey`,`pink`];
            const index=Math.floor(Math.random()*colorArr.length)
            const randomColor=colorArr[index]
            setColor(randomColor)
        }, 1000);
            return ()=> clearInterval(intervalId)
    }, []);

    return (
        <div className="OurSuccessStories" style={{backgroundColor:color}}>

        </div>
    );
}
