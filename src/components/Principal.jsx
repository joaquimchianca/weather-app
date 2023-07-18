import React from "react"

function Principal({ data }) {
    return (
        <>
            <div className="location">
                <p>{data.name}{data.sys ? `, ${data.sys.country}` : null}</p>
            </div>
            <div className="temp">
                {data.main ? <h1>{data.main.temp} °C</h1> : null}
            </div>
            <div className="description">
                <p>{data.weather ? data.weather[0].description : null}</p>
            </div>
        </>
    )
}

export default Principal