
import { useEffect, useState } from 'react';
import './App.css';
import icons from './components/icons.js';

function App() {
  const [search, setSearch] = useState('Viña del Mar')
  const [values, setValues] = useState('')
  const [icon, setIcon] = useState('')

  const URL =  `https://api.openweathermap.org/data/2.5/weather?q=${search}&lang=es&units=metric&appid=${process.env.REACT_APP_API_KEY}`

  const getData = async () => {
    await fetch(URL)
    .then(response => {return response.json()})
    .then( data => {
      if(data.cod >= 400) {
        setValues(false)
      } else {
        console.log(data)
        console.log(data.weather[0].main)
        setIcon(data.weather[0].main)
        setValues(data)
      }
      //console.log(data)
    })
    .catch(error => {
      console.log(error)
    })
  }

  const handleSearch = (e) => {
    if(e.key === 'Enter') {
      //console.log(e.target.value)
      setSearch(e.target.value)
    }
  }

  useEffect(()=>{
    getData()
  },[search]) 


  return (
    <>
    <div className="contenedor">
      <h2>Aplicación de Clima en React</h2>
      <div className='fila'>

      <input
        onKeyDown={handleSearch}
        type='text'
        autoFocus
      />

      </div>
    </div>
    <div className='card'>
      {(values) ? (
        <div className='card-contenedor'>
          <h1 className='nombre-ciudad'>
            {values.name}
          </h1>
          <p className='temperatura'>
            {values.main.temp.toFixed(0)}&deg;
          </p>
          <img className='icon' src={icons(icon)} alt="icon-weather" />
          <div className='card-pie'>
            <p className='temp-max-min'>
            {values.main.temp_min.toFixed(0)}&deg;  |  {values.main.temp_max.toFixed(0)}&deg;
            </p>
          </div>

        </div>
      ) : (
        <h1>{"Ciudad no encontrada"}</h1>
      )}

    </div>


    </>
  );
}

export default App;
