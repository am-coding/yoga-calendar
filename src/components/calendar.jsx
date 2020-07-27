import React, { useState } from 'react';
import {Calendar, withMultipleDates } from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import "../App.css"
import data from '../data.json'
const MultipleDatesCalendar = withMultipleDates(Calendar);

const MainCalendar = () => {

  const [dates, setDates] = useState(data)
     
  return (
    <>
    <div className="calendar">
      <MultipleDatesCalendar
        width="100%"
        height={500}
        selected={dates.map(data => data.date)}
      />
      <h1>{dates.map(data => data.title)}</h1>
    </div>
    </>
  );
}

export default MainCalendar
