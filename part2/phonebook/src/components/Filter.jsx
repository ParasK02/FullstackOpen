import { useState } from 'react'
const Filter = (props) => {
    const {persons, setFilteredList} = props
    

    
    
    const [search,setSearch] = useState('')
    
    
    const handleSearch = (event) => {
      setSearch(event.target.value)
      event.target.value ? setFilteredList(results(event.target.value)) : setFilteredList(persons)
      
      
      

      }
    const results = (query) =>{
        return persons.filter(person => person.name.toLowerCase().includes(query.toLowerCase()))
    }
    
   
    
    

   


  return (
        
    <form >
        <div>
            filter shown with <input value={search} onChange={handleSearch}/>
        </div>
    </form>  
    
  )
}
export default Filter;



