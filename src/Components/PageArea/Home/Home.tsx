import "./Home.css";

export function Home() {
    const date =new Date();
    const dayOfMonth=date.getDate()
    return (
        <div className="Home">
            {dayOfMonth === 1 && <h3>היום ה1 לחודש. קנה זוג נעלי ריצה נייק וקבל את השני ב50 אחוז</h3>}

            <iframe width="470" height="280" src="https://www.youtube.com/embed/dHpOAJXL6Pc?si=nnRaFkQwByugEQKS"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen></iframe>
        </div>
    );
}
