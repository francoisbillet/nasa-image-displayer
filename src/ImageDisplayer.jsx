import Filters from "./Filters";
import "react-datepicker/dist/react-datepicker.css";
import React, {useEffect, useState} from "react";
import ImageOfTheDay from "./ImageOfTheDay";

const API_KEY = "DUjrCu16BgXXJpvdgdjvEOnJxLmi07qoP6NAVpha";

const formatDate = (date) => {
    let year = date.getFullYear();
    let month = String(date.getMonth() + 1);
    let day = String(date.getDate());

    if (month.length < 2) {
        month = `0${month}`;
    }
    if (day.length < 2) {
        day = `0${day}`;
    }
    return [year, month, day].join('-');
}

const ImageDisplayer = () => {
    const [date, setDate] = useState(new Date());
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${formatDate(date)}`;
        fetch(url)
            .then(result => result.json())
            .then(result => {
                setData(result);
                setIsLoading(false);
            })
            .catch(error => console.log("Error : ", error))
    }, [date]);

    return (
        <div className="main">
            <Filters date={date} setDate={setDate} setIsLoading={setIsLoading} />

            {isLoading
                ? <div>Loading...</div>
                : <ImageOfTheDay data={data} />
            }
        </div>
    )
}

export default ImageDisplayer;