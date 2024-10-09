import React from 'react';
import Title from './components/Title';
import Header from './components/Header';
import WeatherCard from './components/WeatherCard';
import ForecastCard from './components/ForecastCard';
import Loading from './components/Loading';
import './components/css/App.css';

const App = () => {
  const [loading, setLoading] = React.useState(false);
  const [dataError, setDataError] = React.useState(false)
  const [weatherData, setWeatherData] = React.useState(null);
  const [day, setDay] = React.useState('');
  const [hour, setHour] = React.useState('');
  const [cityImg, setCityImg] = React.useState('');

  function getDay_getHour(date){
    let todayDate = new Date(date)
    let options = {weekday: 'short'}
    let TodayDay = todayDate.toLocaleDateString('pt-BR', options);
    TodayDay = (TodayDay.charAt(0).toUpperCase() + TodayDay.slice(1)).replace('.','')

    setHour(todayDate.getHours())
    setDay(TodayDay)
  };

  function onDataChange(data){

    if (!data){
      setDataError(true)
      setLoading(false)
      return 
    }

    setWeatherData(data)
    setCityImg(data[1].results[0].urls.full)
    setDataError(false)
    setLoading(false)
  };

  React.useEffect(() => {
    if (weatherData){
      getDay_getHour(weatherData[0].list[0].dt_txt);
    }
  }, [weatherData])

  return (
    <div className='body' style={{backgroundImage: `url(${cityImg})`}}>
      <div>
        <Header onDataChange={onDataChange} setLoading={setLoading} />

        {(!weatherData || dataError) && <Title txtContent={dataError ? 'Erro ao buscar, tente novamente.' : 'Bem vindo ao WeatherVista!'} />}

        {loading && <Loading/>}

        {(weatherData && !dataError) && 
          <>
            <div className='pageContent'>
              <WeatherCard data={weatherData} cityImg={cityImg} day={day} hour={hour}/>
              <ForecastCard data={weatherData} day={day}/>
            </div>
          </>
        }
      </div>
    </div>
  );
};

export default App
