import React from 'react';
import './css/WeatherCard.css';
import WeatherData from './WeatherData';
import sunny from '../assets/WeatherStates/sunny.svg';
import cloud from '../assets/WeatherStates/cloud.svg';
import snow from '../assets/WeatherStates/snow.svg';
import rainy from '../assets/WeatherStates/rainy.svg';
import thunderstorm from '../assets/WeatherStates/thunderstorm.svg';

const WeatherCard = ({data, cityImg, day, hour}) => {
  const [weatherState, setWeatherState] = React.useState(null);
  const [cityTemp, setCityTemp] = React.useState('');
  const [cityFlag, setCityFlag] = React.useState('');
  const [cityName, setCityName] = React.useState('');
  
  function getCityDetails(){
    setCityTemp(data.list[0].main.temp)
    setCityFlag(data.city.country)
    setCityName(data.city.name)
  }

  function getWeatherState(localWeather){
    const weatherStates = [sunny, cloud, snow, rainy, thunderstorm]

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
    if (data){
      getCityDetails()
      getWeatherState(data.list[0].weather[0].description);
    };
  }, [data])

  return (
    <div className='weatherCard'>
      <div className='cityContainer'>
        <span className='cityDetails'>
          <span className='cityTemp'>
            <img src={weatherState} />
            <h2>{cityTemp} <span className='deg'>°C</span></h2>
          </span>

          <span className='city'>
            <img src={`https://flagsapi.com/${cityFlag}/flat/64.png`} alt="" />
            <span className='cityName'>
              <h2>{cityName}</h2>
              <p>{day}, {hour}:00h</p>
            </span>
          </span>
        </span>

        <picture className='cityImage'>
          <img src={cityImg} alt="Cidade" />
        </picture>

      </div>

      <div className='statistics'>
        <h1>Estatísticas</h1>
        <WeatherData data={data}/>
      </div>
    </div>
  )
}

export default WeatherCard
