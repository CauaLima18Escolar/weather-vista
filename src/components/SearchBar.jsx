import React from 'react';
import Search from '../assets/Search.svg';
import getWeatherData from '../API/weatherAPI';
import './css/SearchBar.css';

const SearchBar = ({onDataChange, setLoading}) => {
  const [inputValue, setInputValue] = React.useState('')

  async function handleClick(){
    const data = await getWeatherData(inputValue, setLoading);
    onDataChange(data);
  };

  return (
    <div className='inputWid'>
      <input 
        type="text" 
        value={inputValue}
        placeholder='Busque por uma cidade'
        className='searchBar'
        onChange={({target}) => setInputValue(target.value)} 
        onKeyDown={({key}) => key === 'Enter' ? handleClick() : null}
      />
      <button className='searchBTN' onClick={handleClick}><img src={Search}/></button>
    </div>
  )
}

export default SearchBar
