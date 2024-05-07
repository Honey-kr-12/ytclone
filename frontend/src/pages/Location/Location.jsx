import React, { useState, useEffect } from 'react'
import './wheather.css'


const Location = () => {
  const api = {
    key: "691d68333b92d3a59b1ca936a9de95ed",
    base: "https://api.openweathermap.org/data/2.5/",
  };
  
    const [search, setSearch] = useState("");
    const [weather, setWeather] = useState({});
  
    /*
      Search button is pressed. Make a fetch call to the Open Weather Map API.
    */
    const searchPressed = () => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=28.6654&lon=77.4391&appid=691d68333b92d3a59b1ca936a9de95ed`)
        .then((res) => res.json()).then((ip) => console.log(ip))
        .then((result) => {
          setWeather(result);
        });
    };
  
  

  return (
    <div className="App">
      
      <header className="App-header">
        {/* HEADER  */}
        <h1>Weather App</h1>

        {/* Search Box - Input + Button  */}
        <div>
          <input
            type="text"
            placeholder="Enter city/town..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed}>Search</button>
        </div>

        {/* If weather is not undefined display results from API */}
        {typeof weather.main !== "undefined" ? (
          <div>
            {/* Location  */}
            <p>{weather.name}</p>

            {/* Temperature Celsius  */}
            <p>{weather.main.temp}°C</p>

            {/* Condition (Sunny ) */}
            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
          </div>
        ) : (
          ""
        )}
      </header>
      <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
         
    </div>
  )
}

export default Location
