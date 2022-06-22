import React from 'react'
import axios from "axios";

// API_KEY="b7a1f25e1ebee3f154d0a3e002defecb"
// CITY_NAME=
// STATE_CODE =
// COUNTRY_CODE
// LIMIT=5

export async function getWeather() { 
    try {
        const res =
            await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=49.839684&lon=24.029716&appid=585e6165c7e070d605b488f25c937e4f`);
        return res;
    } catch (e) { 
        console.log(`Errr:${e}`)
    }

}
// console.log('111111111111111', await getWeather())
// export function getYourCoordinates() {
//     axios.get(`http://api.openweathermap.org/geo/1.0/direct?q${CITY_NAME},${STATE_CODE},${COUNTRY_CODE}&limit${LIMIT}&appid${API_KEY}`)
//         .then((response) => {
//             if (response) {
//                 return response.json();
//             }
//             return;
//         }
//     )
// }

const api = {
    getWeather,
    // getYourCoordinates,
}

export default api;
