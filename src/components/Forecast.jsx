import React from "react";

function Forecast({forecast}) {

    function format(dateInput) {
        const [datePart, timePart] = dateInput.split(' ')
        const [year, month, day] = datePart.split('-')
        return `${day}/${month}`
      }

    return (
        <>
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
        </>
    )
}

export default Forecast