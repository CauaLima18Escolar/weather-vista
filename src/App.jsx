import React from 'react';
import Title from './components/Title';
import Header from './components/Header';
import './components/css/App.css';
import WeatherCard from './components/WeatherCard';
import ForecastCard from './components/ForecastCard';
import Loading from './components/Loading';

const App = () => {
  const [weatherData, setWeatherData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [pageBG, setPageBG] = React.useState('')

  function onDataChange(data){
    setWeatherData(data)
    setPageBG(data[1].results[0].urls.full)
    setLoading(false)
  };

  return (
    <div className='body' style={{backgroundImage: `url(${pageBG})`}}>
      <div>
        <Header onDataChange={onDataChange} setLoading={setLoading} />

        {!weatherData && <Title />}

        {loading && <Loading/>}

        {weatherData && 
          <>
            <div className='pageContent'>
              <WeatherCard data={weatherData} />
              <ForecastCard data={weatherData} />
            </div>
          </>
        }
      </div>
    </div>
  )
}

export default App
