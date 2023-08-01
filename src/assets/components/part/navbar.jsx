import '../../../assets/css/navbar.css';

import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../assets/images/logo-remover.png';

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

  // State to track whether the user is scrolling
  const [isScrolling, setIsScrolling] = useState(false);

  // Function to handle scrolling and set the isScrolling state accordingly
  const handleScroll = () => {
    if (window.scrollY > 600) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  // Add a scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar fixed='top' className={isScrolling ? 'navbar scrolled' : 'navbar'}>
      <Container>
        <Navbar.Brand href="#home" className='text-white parImg'>
          <img className='logo' src={logo} alt="logo" />
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