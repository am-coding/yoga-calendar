import React, { useState } from 'react';
import {Calendar, withMultipleDates } from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import "../App.css"
import data from '../data.json'
import Events from './events'

const MultipleDatesCalendar = withMultipleDates(Calendar);

const MainCalendar = () => {

  const [events, setEvents] = useState({time: "02:09:26", title: "Yoga party", price: "FREE"})

  const showEvent = selectedDate  => {
    data.forEach(data => {
      data.date.includes(selectedDate) ? setEvents({time: data.time, title: data.title, price: data.price}) : console.log('no events'); 
    })
    console.log(selectedDate);
  }
     
  return (
    <div className="App">
    <div className="calendar">
      <MultipleDatesCalendar
        onSelect={showEvent}
        width="100%"
        height={520}
        selected={data.map(data => data.date)}
      />
    </div>
    <Events 
      title={events.title}
      time={events.time}
      price={events.price}
    />
    </div>
  );
}

export default MainCalendar
