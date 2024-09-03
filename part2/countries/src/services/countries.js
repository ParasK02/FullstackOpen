import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries'
const APIKEY = import.meta.env.VITE_SOME_KEY


const getAll = async () => {
    const request = axios.get(`${baseUrl}/api/all`)
    const response = await request
    return response.data
}
const getCountry = async (query) => {
    const request = axios.get(`${baseUrl}/api/name/${query}`);
    const response = await request;
    return response.data;
  };

const getWeather = async (lat,long) =>{
    const request = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIKEY}`)
    const response = await request
    return response.data
}
  
  

export default {getAll,getCountry,getWeather}