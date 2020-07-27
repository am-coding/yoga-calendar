import React, { useState } from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import "../App.css"

const MainCalendar = () => {

const today = new Date();
const lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
     
  return (
    <>
    <div className="calendar">
      <InfiniteCalendar
        width="100%"
        height={500}
        selected={today}
      />
    </div>
    </>
  );
}

export default MainCalendar
