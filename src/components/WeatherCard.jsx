import React from 'react';
import './css/WeatherCard.css';
import WeatherData from './WeatherData';
import sunny from '../assets/WeatherStates/sunny.svg';
import cloud from '../assets/WeatherStates/cloud.svg';
import snow from '../assets/WeatherStates/snow.svg';
import rainy from '../assets/WeatherStates/rainy.svg';
import thunderstorm from '../assets/WeatherStates/thunderstorm.svg';

const WeatherCard = ({data}) => {
  const [day, setDay] = React.useState('')
  const [hour, setHour] = React.useState('')
  const [weatherState, setWeatherState] = React.useState(null)
  const randomImage = parseInt(Math.random() * data[1].results.length)

  function formatDate(date){
    let formated = new Date(date)
    let options = {weekday: 'short'}
    let TodayDay = formated.toLocaleDateString('pt-BR', options);
    TodayDay = (TodayDay.charAt(0).toUpperCase() + TodayDay.slice(1)).replace('.','')

    setHour(formated.getHours())
    setDay(TodayDay)
  }

  function getWeatherState(localWeather){
    const weatherStates = [
      sunny,
      cloud,
      snow,
      rainy,
      thunderstorm
    ]

    if (localWeather === 'céu limpo') {
      setWeatherState(weatherStates[0]);

    } else if (localWeather.includes('nuvens')) {
      setWeatherState(weatherStates[1]);

    } else if (localWeather === 'neve') {
      setWeatherState(weatherStates[2]);

    } else if (localWeather.includes('chuva')) {
      setWeatherState(weatherStates[3]);

    } else if (localWeather === 'tempestade') {
      setWeatherState(weatherStates[4]);

    } else {
      setWeatherState(weatherStates[1]);
    }  
  }

  React.useEffect(() => {
    if (data[0]){
      formatDate(data[0].list[0].dt_txt);
      getWeatherState(data[0].list[0].weather[0].description);
    };

  }, [data[0]])

  return (
    <div className='weatherCard'>
      <div className='cityContainer'>
        <span className='cityDetails'>
          <span className='cityTemp'>
            <img src={weatherState} />
            <h2>{data[0].list[0].main.temp} <span className='deg'>°C</span></h2>
          </span>

          <span className='city'>
            <img src={`https://flagsapi.com/${data[0].city.country}/flat/64.png`} alt="" />
            <span className='cityName'>
              <h2>{data[0].city.name}</h2>
              <p>{day}, {hour}:00h</p>
            </span>
          </span>
        </span>

        <picture className='cityImage'>
          <img src={data[1].results[randomImage].urls.full} alt="Cidade" />
        </picture>

      </div>

      <div className='statistics'>
        <h1>Estatísticas</h1>
        <WeatherData data={data[0]}/>
      </div>
    </div>
  )
}

export default WeatherCard
