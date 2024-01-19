import React, { useState } from "react";
import axios from "axios";
import './App.css';
import weathericon from "./weather.svg";

function Weather() {
  const [city, setCity] = useState("");
  const [headline, setHeadline] = useState("");

  function searchCity(event) {
    event.preventDefault();
    const apiKey = "e6c2364656962bdcb16bc352fc42569a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios
      .get(apiUrl)
      .then((response) => {
        
        setHeadline(`${Math.round(response.data.main.temp)} ℃ in ${city}, ${response.data.sys.country}`);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        // Handle the error, for example, by setting an error message state variable
      });
  }

  return (
    <div className="container">
      <h1>Weather Search Engine</h1>
      <br />
      <form id="form" onSubmit={searchCity}>
        <input
          type="text"
          id="city-input"
          placeholder="search city"
          value={city}
          onChange={(event) => {
            const capitalizedValue =
              event.target.value.charAt(0).toUpperCase() +
              event.target.value.slice(1);
            setCity(capitalizedValue);
          }}
        />
        <input type="submit" id="submitbtn" value="Search" />
      </form>
      <br />
      <br />
      <h2>{headline}</h2>
      <img src={weathericon} alt="seasonal change" />
      <p>
        <a href="">Open-sourced</a> code by <a href="">Edom M.</a>
      </p>
    </div>
  );
}

export default Weather;
