import React from 'react'
import Forecast from './Forecast'

function WeatherContainer({ data, forecast }) {

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
        
        { forecast && <Forecast forecast={forecast}/>}
      
        
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