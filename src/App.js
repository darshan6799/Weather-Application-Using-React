import React, {useState} from 'react';
import './App.css';
import Input  from '../src/components/Input';
import WeatherData from '../src/components/weatherData';


function App() {

  const [weather,setWeather] = useState([])
  const APIKEY = 'YOUR_API_KEY'

  async function fetchData(e) {
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
      e.preventDefault()
    const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APIKEY}`)
      .then( res => res.json())
      .then(data => data)
      if(city && country) {
      setWeather({
        data: apiData,
        city: apiData.city,
        country: apiData.sys.country,
        description: apiData.weather[0].description,
        temperature: (apiData.main.temp - 273.15).toFixed(2) ,
        error:""
      }
      )} else {
        setWeather({
          data: '',
          city: '',
          country: '',
          description: '',
          temperature: '',
          error:"Please enter City and Country"
      }
      )}
  }

  return (
    <div className="App">
      <h3>Weather Application</h3>
      <Input getWeather={fetchData} />
      <WeatherData
      city={weather.city}
      country={weather.country}
      description={weather.description}
      temperature={weather.temperature}
      error={weather.error}
      />
      {console.log(weather.data)}
    </div>
  
  );
}

export default App;
