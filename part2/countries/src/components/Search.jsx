
import { useState } from 'react'
const Search = (props) => {
    const {countryList, setFilteredList} = props
    const [search,setSearch] = useState('')

    
    
    const handleSearch = (event) => {
      setSearch(event.target.value)
      event.target.value ? setFilteredList(results(event.target.value)) : setFilteredList(countryList)
      
      
      
      }
    const results = (query) =>{
        return countryList.filter(country => country.name.common.toLowerCase().includes(query.toLowerCase()))
    }


  return (
        
    <form >
        <div>
            filter shown with <input value={search} onChange={handleSearch}/>
        </div>
    </form>  
    
  )
}
export default Search;



