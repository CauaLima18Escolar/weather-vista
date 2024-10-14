import React from 'react';
import './css/ForecastCard.css';
import ForecastData from './ForecastData';
import ForecastDays from './ForecastDays';

const ForecastCard = ({data, day}) => {
  let date = new Date()
  let todayDate
  todayDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`

  const [previousDay, setDay] = React.useState('')
  const [currentDate, setCurrentDate] = React.useState(todayDate)
  
  function getForecast(data) {}

  React.useEffect(() => {
    data.list.forEach((weatherOb) => {
      if (weatherOb.dt_txt.split(' ')[0] !== currentDate) {
        console.log(weatherOb.dt_txt)
        setCurrentDate(weatherOb.dt_txt.split(' ')[0])
      }
    })
    
  }, [data])

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
