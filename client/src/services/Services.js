import React from "react";
import axios from "axios";

// API_KEY="b7a1f25e1ebee3f154d0a3e002defecb"
// CITY_NAME=
// STATE_CODE =
// COUNTRY_CODE
// LIMIT=5

export async function getWeather() {
try {
    const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?lat=49.5558900&lon=25.6055600&appid=585e6165c7e070d605b488f25c937e4f`
    );
    return res;
} catch (e) {
    console.log(`Errr:${e}`);
}
}
const api = {
    getWeather,
};

export default api;
