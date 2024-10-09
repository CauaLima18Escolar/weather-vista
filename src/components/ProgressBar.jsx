import React from 'react'
import './css/ProgressBar.css'

const ProgressBar = ({hour, rainChance, state}) => {
  return (
    <div className='progressBar'>
      <h3>{hour}H - {rainChance}%</h3>
      <progress className={state} value={rainChance} max='100'></progress>
    </div>
  )
}

export default ProgressBar
