import "./OurSuccessStories.css";
import {useEffect, useState} from "react";

export function OurSuccessStories() {

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
