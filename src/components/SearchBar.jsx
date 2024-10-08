import React from 'react';
import Search from '../assets/Search.svg';
import getWeatherData from '../API/weatherAPI';
import './css/SearchBar.css';

const SearchBar = ({onDataChange, setLoading}) => {
  const [inputValue, setInputValue] = React.useState('')

  function handleChange({target}){
    setInputValue(target.value)
  }

  function handleKeyDown({key}){
    if (key === 'Enter'){
      handleClick()
    }
  }

  async function handleClick(){
    const data = await getWeatherData(inputValue, setLoading);
    onDataChange(data);
  };

  return (
    <div className='inputWid'>
      <input type="text" placeholder='Busque por uma cidade' onChange={handleChange} onKeyDown={handleKeyDown}/>
      <button onClick={handleClick}><img src={Search}/></button>
    </div>
  )
}

export default SearchBar
