
import React, { useState } from 'react';

function App() {

  const [inputValue,setInputValue] = useState("")

  const getInputValue=(e)=>{
    setInputValue(e.target.value)
  }

  const getWeatherInfo=()=>{
    console.log(inputValue)
    fetch()

  }
  return (
    <div className="App">
      <h1>Weather App</h1>
      <div>
        <input type="text" onChange={getInputValue} />
        <button onClick={getWeatherInfo}>get weather data</button>
      </div>
    <div className="weather-container">
      <div className="left">
          <h2>feels like 23°C</h2>
          <h3>Frankfurt</h3>
          <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="" />
      </div>
      <div className="right">
          <h1>24°C</h1>
          <img src="https://is4-ssl.mzstatic.com/image/thumb/Purple112/v4/d3/b9/76/d3b97619-f61d-1d6d-7bea-81fbe12fc8ea/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x600wa.png" width="150" alt="" />
          <h2>55%</h2>
          <h1>Pressure: 1002</h1>
          <h2>Min Temp: 21°C</h2>
          <h2>Max Temp: 27°C</h2>
      </div>
    </div>



    </div>
  );
}

export default App;