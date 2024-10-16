import React from 'react';
import './css/ForecastData.css';
import ProgressBar from './ProgressBar';

const ForecastData = ({data}) => {
    const [todayForecast, setTodayForecast] = React.useState([])

    const todayDay = new Date().getDate()
    const todayMonth = new Date().getMonth() + 1

    React.useEffect(() => {
        setTodayForecast([])

        data.list.forEach((obj) => {
            if (obj.dt_txt.includes(`${String(todayMonth).padStart(2, '0')}-${String(todayDay).padStart(2, '0')}`)){
    
                const forecastHour = new Date(obj.dt_txt).getHours();
    
                const rainChance = obj.pop * 100;
                const forecast = {
                    hour: forecastHour,
                    rain: rainChance,
                };
        
                setTodayForecast((prevForecast) => [...prevForecast, forecast]);
            }
        });
    }, [data])
    
  return (
    <div className='forecastData'>
        {todayForecast.length === 0 && <h3 className='noForecast'>Sem previsões para hoje.</h3>}

        {todayForecast.length !== 0 && todayForecast.map(({hour, rain}) => {
            let stateLevel

            if (rain <= 33){
                stateLevel = 'low'

            } else if (rain > 33 && rain <= 66){
                stateLevel = 'medium'

            } else {
                stateLevel = 'high'
            }
            
            return (<ProgressBar key={hour} hour={hour} rainChance={rain} state={stateLevel} data={data}/>)
        })}
    </div>
  )
}

export default ForecastData
