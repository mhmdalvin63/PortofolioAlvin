// import digitalClock from '../../../assets/js/realTime.js';
import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
// React Bootstrap CONTAINER, ROW, COL 
import {Container} from 'react-bootstrap';
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

function Navigasi() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Format time to hh:mm:ss
  const formatTime = (time) => {
    return time.toLocaleTimeString([], { hour12: false });
  };


  return (
    <Navbar bg="transparent" fixed='top'>
      <Container>
        <Navbar.Brand href="#home" className='text-white'>
          <h2>Muhammad Alvin</h2>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='text-white d-flex align-items-center gap-2' >
            <FontAwesomeIcon icon={faClock} />
            <p className='mb-0'>{formatTime(currentTime)}</p>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigasi;