import React from 'react';
import './css/Title.css';

const Title = ({txtContent}) => {
  return (
    <div className='inicialTitle'>
      <h1>{txtContent}</h1>
    </div>
  )
}



export default Title
