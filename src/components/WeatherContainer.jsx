import React from 'react'
// import axios from 'axios'
import './forecast.css'
// import Forecast from './Forecast'

function WeatherContainer({ data, forecast }) {

  function format(dateInput) {
    const [datePart, timePart] = dateInput.split(' ')
    const [year, month, day] = datePart.split('-')
    return `${day}/${month}`
  }

  return (
    <div className="container">
      <div className="top">
        {/* <div className="current"> */}
          <div className="location">
            <p>{data.name}{data.sys ? `, ${data.sys.country}` : null}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp} °C</h1> : null}
          </div>
          <div className="description">
            <p>{data.weather ? data.weather[0].description : null}</p>
          </div>
          {/* <Forecast data={data}/> */}
        {/* </div> */}
      </div>
      <div className="center">
        {/* <div className="forecast"> */}
          <div className="forecast-item">
            <p className='bold'>{format(forecast[8].dt_txt)}</p>
            <p>{forecast ? `${forecast[8].main.temp} °C` : null}</p>
          </div>
          <div className="forecast-item">
            <p className='bold'>{format(forecast[16].dt_txt)}</p>
            <p>{forecast ? `${forecast[16].main.temp} °C` : null}</p>
          </div>
          <div className="forecast-item">
            <p className='bold'>{format(forecast[24].dt_txt)}</p>
            <p>{forecast ? `${forecast[24].main.temp} °C` : null}</p>
          </div>
          <div className="forecast-item">
            <p className='bold'>{format(forecast[32].dt_txt)}</p>
            <p>{forecast ? `${forecast[32].main.temp} °C` : null}</p>
          </div>
        {/* </div> */}
      </div>
      <div className="bottom">
        {/* <div className="temperature">
          <div className="max">
            <p>Máx: </p>
            <p>{data.main ? `${data.main.temp_max} °C` : null}</p>
          </div>
          <div className="min">
            <p>Mín:</p>
            <p>{data.main ? `${data.main.temp_min} °C` : null}</p>
          </div>
        </div> */}
        <div className="other-info">
          <div className="feels">
            <p className='bold'>{data.main ? `${data.main.feels_like} °C` : null}</p>
            <p className='caption'>Sensação térmica</p>
          </div>
          <div className="humidity">
            <p className='bold'>{data.main ? `${data.main.humidity}%` : null}</p>
            <p className='caption'>Umidade</p>
          </div>
          <div className="wind">
            <p className='bold'>{data.wind ? `${data.wind.speed} m/s` : null}</p>
            <p className='caption'>Velocidade do vento</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherContainer