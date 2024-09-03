import { useState,useEffect } from 'react'
import countries from './services/countries'

import Search from './components/Search'
import List from './components/List'



function App() {
  
  const [countryList, setCountryList] = useState([])//original copy
  const [filteredList, setFilteredList] = useState([]) 
 
  
  useEffect(() => {
   
    countries
      .getAll()
      .then(initialPersons => {
        setCountryList(initialPersons)
        setFilteredList(initialPersons)
      })
  }
  , [])
    



  return (
    <div>
      <Search countryList={countryList} setFilteredList={setFilteredList}/>
      <List filteredCountries={filteredList} />  
    </div>
    
  );
 
}

export default App
