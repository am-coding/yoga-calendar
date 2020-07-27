import React, { useState } from 'react';
import MainCalendar from './components/calendar'
import Events from './components/events'

function App() {
 

  return (
    <div className="App">
      <MainCalendar />
      <Events />
    </div>
  );
}

export default App;
