import React from 'react';
import './App.css';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Navbar from './Components/navbar';
import Home from './Components/Pages1/Home'
import ScheduleAppointment from './Components/Pages1/ScheduleAppointment'
import Services from './Components/Pages1/Services'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' exact element= {<Home/>} />
            <Route path='/Schedule Appointment' exact element= {<ScheduleAppointment/>} />
            <Route path='/Services' exact element= {<Services/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
