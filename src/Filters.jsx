import DatePicker from "react-datepicker";
import React from "react";
import './Filters.css';

const Filters = ({date, setDate, setIsLoading}) => {
    const changeDate = (newDate) => {
        if (newDate > Date.now()) return;
        setDate(newDate);
        setIsLoading(true);
    }

    return (
        <div className="filters">
            <label>Date:</label>
            <DatePicker className="datePicker" selected={date} onChange={changeDate}/>
        </div>
    )
}

export default Filters;