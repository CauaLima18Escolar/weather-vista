import React from 'react';
import './css/ForecastCard.css';
import ForecastData from './ForecastData';
import ForecastDays from './ForecastDays';

const ForecastCard = ({data, day}) => {
  return (
    <div className='weatherForecast'>
        <div className='today'>
            <h1>Previsão de Chuva ({day.charAt(0).toUpperCase() + day.slice(1).replace('.','')})</h1>
            <ForecastData data={data}/>
        </div>

        <div className='nextDays'>
            <ForecastDays min={24} max={31} day={'TER'} />
            <ForecastDays min={21} max={30} day={'QUA'} />
            <ForecastDays min={23} max={30} day={'QUI'} />
            <ForecastDays min={23} max={30} day={'SEX'} />
        </div>
    </div>
  )
}

export default ForecastCard
