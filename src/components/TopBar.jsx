import React from 'react';
import DeloitteLogo from '../assets/Logo_of_Deloitte.svg';
import { Link } from 'react-router-dom';
import './TopBar.css';

const TopBar = () => {
  return (
    <header className='topbar'>
        <img src={DeloitteLogo} className="logo" />
        <nav className="nav">
            <Link to="/"><a>Home </a></Link>
            <Link to="/services"><a>Services </a></Link>
            <Link to="#"><a>About us</a></Link>
        </nav>
    </header>
  )
}

export default TopBar