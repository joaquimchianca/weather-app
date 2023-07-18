import React from 'react'
import Forecast from './Forecast'
import Info from './Info'

function WeatherContainer({ data, forecast }) {

  return (
    <div className="container">
      <div className="top">
          <div className="location">
            <p>{data.name}{data.sys ? `, ${data.sys.country}` : null}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp} °C</h1> : null}
          </div>
          <div className="description">
            <p>{data.weather ? data.weather[0].description : null}</p>
          </div>
      </div>
      <div className="center">  
        { forecast && <Forecast forecast={forecast}/>}
      </div>
      <div className="bottom">
        <Info data={data}/>
      </div>
    </div>
  )
}

export default WeatherContainer