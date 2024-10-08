import React from 'react'
import './css/ProgressBar.css'

const ProgressBar = ({hour, rainChance, state, data}) => {
    const [progressValue, setProgressValue] = React.useState(0)

    React.useEffect(() => {
        setProgressValue(0)
    }, [data[0].city.name])

    React.useEffect(() => {
        const interval = setInterval(() => {
            if (progressValue >= rainChance){
                clearInterval(interval)
            } else {
                setProgressValue((prevValue) => prevValue + 0.5)
            }
        }, 10);

        return () => clearInterval(interval);
    }, [progressValue, rainChance]);

  return (
    <div className='progressBar'>
      <h3>{hour}H - {progressValue.toFixed(0)}%</h3>
      <progress className={state} value={progressValue} max='100'></progress>
    </div>
  )
}

export default ProgressBar
