import React, { useState, useEffect } from "react";

function App() {
  const [inputValue, setInputValue] = useState("frankfurt");
  const [weather, setWeather] = useState({
    feels_like: 23,
    icon: "10d",
    temp: 24,
    pressure: 1002,
    min_temp: 21,
    max_temp: 27,
    city: "berlin",
    humidity: 55,
  });
  const getWeatherInfo = () => {
    console.log(inputValue);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.cod !== 200) {
          alert(result.message);
        } else {
          setWeather( {
            feels_like: result.main.feels_like,
            icon: result.weather[0].icon,
            temp: result.main.temp,
            pressure: result.main.pressure,
            min_temp: result.main.temp_min,
            max_temp: result.main.temp_max,
            city: result.name,
            humidity: result.main.humidity,
          } );
        }
      });
  };
// useEffect(()=>{} , [])
useEffect(getWeatherInfo, [])

console.log("render.....")


  const getInputValue = (e) => {
    setInputValue(e.target.value);
  };

  
  return (
    <div className="App">
      <h1>Weather App</h1>
      <div>
        <input type="text" onChange={getInputValue} />
        <button onClick={getWeatherInfo}>get weather data</button>
      </div>
      <div className="weather-container">
        <div className="left">
          <h2>feels like {weather.feels_like}°C</h2>
          <h3>{weather.city}</h3>
          <img
            src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            alt=""
  
          />
        </div>
        <div className="right">
          <h1>{weather.temp}°C</h1>
          <img
            src="https://is4-ssl.mzstatic.com/image/thumb/Purple112/v4/d3/b9/76/d3b97619-f61d-1d6d-7bea-81fbe12fc8ea/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x600wa.png"
            width="150"
            alt=""
          />
          <h2>{weather.humidity}%</h2>
          <h1>Pressure: {weather.pressure}</h1>
          <h2>Min Temp: {weather.min_temp}°C</h2>
          <h2>Max Temp: {weather.max_temp}°C</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
