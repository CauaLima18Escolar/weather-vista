import React from 'react';
import './css/ForecastCard.css';
import ForecastData from './ForecastData';
import ForecastDays from './ForecastDays';

const ForecastCard = ({data}) => {

  let todayDate = new Date(data[0].list[0].dt_txt)
  let option = {weekday: 'short'}
  let todayDay = todayDate.toLocaleDateString('pt-BR', option)

  return (
    <div className='weatherForecast'>
        <div className='today'>
            <h1>Previsão de Chuva ({todayDay.charAt(0).toUpperCase() + todayDay.slice(1).replace('.','')})</h1>
            <ForecastData data={data}/>
        </div>

        <div className='nextDays'>
            <ForecastDays min={24} max={31} day={'TER'} />
            <ForecastDays min={21} max={30} day={'QUA'} />
            <ForecastDays min={23} max={30} day={'QUI'} />
        </div>
    </div>
  )
}

export default ForecastCard
