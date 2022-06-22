import React, { useEffect, useState } from 'react'
import Card from "./Components/Card/Card.js";
import api from './services/Services';



const App = () => {

    const [weather, setWeather] = useState({})

    useEffect(() => {
        api.getWeather().then((data) => {
            setWeather(data)
        })
            .catch((error) => console.log(error))
    }, []);

  return (
    <main>
      <Card weather={ weather}/>
        <div>HELO WORLD</div>
    </main>
  )
};

export default App;
