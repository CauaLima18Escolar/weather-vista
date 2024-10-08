import React from 'react';
import './css/Header.css';
import Logo from '../assets/Logo.svg';
import SearchBar from './SearchBar';

const Header = ({onDataChange, setLoading}) => {
  return (
    <header className='header'>
        <img src={Logo}alt="WeatherVista - Logo" />
        <SearchBar onDataChange={onDataChange} setLoading={setLoading}/>
    </header>
  )
}

export default Header
