import React from 'react'
import Forecast from './Forecast'
import Info from './Info'
import Principal from './Principal'

function WeatherContainer({ data, forecast }) {

  return (
    <div className="container">
      <div className="top">
          <Principal data={data}/>
      </div>
      <div className="center">  
        { forecast.length === 40 && <Forecast forecast={forecast}/>}
      </div>
      <div className="bottom">
        <Info data={data}/>
      </div>
    </div>
  )
}

export default WeatherContainer