import React, { useEffect, useState } from 'react'
import Card from "./Components/Card/Card.js";
import api from './services/Services';
import Day from './Components/Day/Day';



const App = () => {
    const [weather, setWeather] = useState(null)
    useEffect(() => {
        api.getWeather().then((data) => {
            setWeather(data)
        })
            .catch((error) => console.log(error))
    }, []);
  
  return (
    <main>
      <Day/>
      {weather &&  <Card weather={weather}/>}
    </main>
  )
};

export default App;
