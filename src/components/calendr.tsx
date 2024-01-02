import React, { useState } from 'react';
import { render } from "react-dom";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



const Calendr = () => {
const [date,setDate] = useState(new Date());

const onChange = () => {
    setDate(date);
};

    return (
        <div style={{ backgroundColor: "#B9983B" }}
        className='col-12 col-lg-11 text-center mt-0 p-4'>
        <Calendar 
        onChange= {onChange}
        value= {date} 
        />
        </div>
        
    )
}

export default Calendr;