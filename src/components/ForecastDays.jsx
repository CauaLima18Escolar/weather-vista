import React from 'react';
import './css/ForecastDays.css'
import Alta from '../assets/Alta.svg';
import Baixa from '../assets/Baixa.svg';
import Sunny from '../assets/Sunny.svg';

const ForecastDays = ({min, max, day}) => {
  return (
    <div className='forecastDays'>
        <div className='dayTemp'>
            <span>
                <img src={Baixa} />
                <h2>{min}°</h2>
            </span>
            <span>
                <img src={Alta} />
                <h2>{max}°</h2>
            </span>
        </div>

        <img className='weatherIcon' src={Sunny} />

        <div className='dayName'>
            <h2>{day}</h2>
            <p>Ensolarado</p>
        </div>
    </div>
  )
}

export default ForecastDays
