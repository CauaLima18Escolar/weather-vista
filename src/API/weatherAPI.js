const API_Key_Weather = '1e8248f9953b3d21cada01e26c164bb1';
const API_Key_Photos = '8xljr6wWiLKnI5IEJh8Z2JPl5lq2Lq3hsLiz3k42nYQ';
const URL_Base = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_Key_Weather}&units=metric&lang=pt_br`;
const URL_Base_Photos = `https://api.unsplash.com/search/photos?client_id=${API_Key_Photos}&page=1&orientation=landscape`

const getWeatherData = async (city, setLoading) => {
    try {
        setLoading(true)
        const photosResp = await fetch(`${URL_Base_Photos}&query=${city} cidade`)
        if (!photosResp.ok){
            return false
        }

        const photosJson = await photosResp.json()

        const weatherResp = await fetch(`${URL_Base}&q=${city}`);
        if (!weatherResp.ok){
            return false
        }

        const weatherJson = await weatherResp.json();

        return [weatherJson, photosJson];
    } catch (error) {
        console.error(error);
    }
    
};

export default getWeatherData;
