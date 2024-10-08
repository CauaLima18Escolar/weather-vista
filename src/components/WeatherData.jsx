import React from 'react';
import './css/WeatherData.css'
import Temp_min from '../assets/Temp_min.svg';
import Temp_max from '../assets/Temp_max.svg';
import Cloud from '../assets/Cloud.svg';
import Air from '../assets/Air.svg';
import Humidity from '../assets/Humidity.svg';
import Rainy from '../assets/Rainy.svg';

const WeatherData = ({data}) => {
  return (
    <div className='gridLayout'>
      <span>
        <img src={Temp_min} />
        <h3>Temp. Min: {data.list[0].main.temp_min}°C</h3>
      </span>

      <span>
        <img src={Temp_max} />
        <h3>Temp. Max: {data.list[0].main.temp_max}°C</h3>
      </span>

      <span>
        <img src={Air} />
        <h3>Vel. Vento: {data.list[0].wind.speed} km/h</h3>
      </span>

      <span>
        <img src={Cloud} />
        <h3>Tempo: {data.list[0].weather[0].description.charAt(0).toUpperCase() + data.list[0].weather[0].description.slice(1)}</h3>
      </span>

      <span>
        <img src={Humidity} />
        <h3>Humidade: {data.list[0].main.humidity}%</h3>
      </span>

      <span>
        <img src={Rainy} />
        <h3>Chuva: {data.list[0].pop * 100}%</h3>
      </span>
    </div>
  )
}

export default WeatherData
