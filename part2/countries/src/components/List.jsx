import countryService from '../services/countries'
import { useState,useEffect } from 'react'
const List = (props)  =>{
    const {filteredCountries} = props
    const [countryData, setCountryData] = useState(null);
    const [viewCountry,setViewCountry] = useState(false)
    const [weatherData, setWeatherData] = useState(null);
   
    

    const handleView = async (country)=>{
        setViewCountry(true)
        const data = await countryService.getCountry(country)
        setCountryData(data)
        const location = data.capitalInfo.latlng
        const weather = await countryService.getWeather(location[0],location[1]);
        setWeatherData(weather);
    }
    useEffect(() => {
        if (filteredCountries.length === 1) {
          const fetchData = async () => {
            try {
              const data = await countryService.getCountry(filteredCountries[0].name.common);
              setCountryData(data);
              const location = data.capitalInfo.latlng
              const weather = await countryService.getWeather(location[0],location[1]);
              setWeatherData(weather);
              
            } catch (error) {
              console.error('Error fetching country data:', error);
            }
          };
          fetchData();
        } else {
          setCountryData(null); 
          setWeatherData(null);
        }
      }, [filteredCountries,]);

    const CountryData = ()=>{
        if(filteredCountries.length===250){
            return
        }
        if (filteredCountries.length === 1 || viewCountry) {
            
            if(countryData){
                const languages = countryData.languages ? Object.values(countryData.languages): [];
               
                
            return (
              <div>
                <h1>{countryData.name.common}</h1>
                <p>capital {countryData.capital}</p>
                <p>area {countryData.area}</p>
                <h3>languages:</h3>
                
                <ul>
                  {languages.map((language) => (
                    <li key={language}>{language}</li>
                  ))}
                </ul>
                <img src={countryData.flags.png} alt="flag" width="100" />
                <h2>Weather in {countryData.capital}</h2>
                {weatherData ? 
                <>
                <p><b>temperature:</b> {Math.floor((weatherData.main.temp-273.15) * 100)/100} Celsius</p>
                <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="weather conditions" />
                <p><b>wind:</b> {weatherData.wind.speed} m/s</p>
                </>
                :
                <p>Loading weather data...</p>
                
            }
                


            </div>
            );
        }
        }
        if(filteredCountries.length<=10){
            return(
                filteredCountries.map((country) => (
                    <li key={country.name.common}>{country.name.common} 
                    <button onClick={()=>handleView(country.name.common)}>view</button></li>
                   
                  ))
            )
        }
        else {
            return <p>Too many matches, specify another filter</p>
        }
        
    }
    
    
    
    
    return (
        <div>
                {CountryData()}
        </div>
      );
      
}
export default List