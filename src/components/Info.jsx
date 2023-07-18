import React from "react";

function Info({ data }) {
    return (
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
    )
}

export default Info