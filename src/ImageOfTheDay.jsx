import React from "react";
import "./ImageOfTheDay.css";

const ImageOfTheDay = ({data}) => {
    return (
        <div className="container">
            <figure>
                {data.media_type === "image" ?
                    <img src={data.url} alt={data.title}/>
                    :
                    <iframe src={data.url}></iframe>
                }
                <figcaption>{data.title}</figcaption>
            </figure>
            <p>{data.explanation}</p>
        </div>
    )
}

export default ImageOfTheDay;