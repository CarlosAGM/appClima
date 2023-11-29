
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [search, setSearch] = useState('')
  const [values, setValues] = useState('')
  const [icons, setIcon] = useState('')

  const URL =  `https://api.openweathermap.org/data/2.5/weather?q=valdivia&lang=es&units=metric&appid=74250c658f566ee0d95b9ffa048866c9`

  const getData = async () => {
    await fetch(URL)
    .then(response => {return response.json()})
    .then( data => {
      console.log(data)
    })
    .catch(error => {
      console.log(error)
    })
  }

  useEffect(()=>{
    getData()
  },[])


  return (
    <div className="App">
      <h2>Aplicación de Clima en React</h2>
    </div>
  );
}

export default App;
