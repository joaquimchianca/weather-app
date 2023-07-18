import React, { useEffect, useState } from 'react'
import axios from 'axios'
import WeatherContainer from './components/WeatherContainer'

function App() {

	const [location, setLocation] = useState('')  //string de pesquisa passada como parametro para request da API
	const [data, setData] = useState({})          //objeto que guarda resposta da API
	const [forecast, setForecast] = useState({})
	// estado que controla exibição das informações
	const [showElements, setShowElements] = useState(false)
	// define imagem de background dinamica
	const [backgroundImage, setBackgroundImage] = useState('sunset')


	const url_weather = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=fa4c2c684f89015fca9e5370e5cf2547&units=metric&lang=pt_br`
	const url_forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=fa4c2c684f89015fca9e5370e5cf2547&units=metric&lang=pt_br`
	// chamada da api com axios para buscar previsao atual
	const searchLocation = (event) => {
		if (event.key === 'Enter') {
			axios
				.get(url_weather).then(response => {
					setData(response.data)
					setShowElements(true)
					//console.log(response.data)
				})
				.catch(error => {
					if (error.response && error.response.status === 404) {
						alert('Localização não encontrada')
					} else {
						alert('Erro na requisição de clima atual')
					}
				})
		}
	}
	
	// chamada da api de previsao de tempo
	const searchForecast = (event) => {
		if (event.key === "Enter") {
			axios.get(url_forecast).then(response => {
				setForecast(response.data.list)
				console.log(response.data.list)
			})
			.catch(error => {
				alert("Erro na requisição de previsão do tempo")
			})
		}
	}

	function search(event) {
		searchLocation(event);
		searchForecast(event);
	}

	// atualizacao da imagem de fundo
	useEffect(() => {
		if (data.weather) {
			setBackgroundImage(getBackgroundImage(data.weather[0].id))
		}
	}, [data])

	// define qual a imagem dependendo do clima
	const getBackgroundImage = (id) => {
		if (id >= 200 && id < 300) {
			return 'thunderstorm'
		} else if (id >= 300 && id < 400) {
			return 'drizzle'
		} else if (id >= 500 && id < 600) {
			return 'rain'
		} else if (id >= 600 && id < 700) {
			return 'snow'
		} else if (id >= 700 && id < 800) {
			return 'mist'
		} else if (id === 800) {
			return 'clear'
		} else if (id > 800) {
			return 'clouds'
		} else {
			return 'sunset'
		}
	}



	return (
		<div className={`app ${backgroundImage}`}>
			<div className="search">
				<input
					value={location}
					type="text"
					placeholder="Procure por uma cidade"
					onChange={event => setLocation(event.target.value)}
					onKeyDown={event => search(event)} />
			</div>

			{showElements && (<WeatherContainer data={data} forecast={forecast}/>)}
		</div>
	)
}

export default App