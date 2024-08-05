import { useState } from 'react'
const Filter = (props) => {
    const {persons, setPersons} = props
    
    const [search,setSearch] = useState('')
    
    const handleSearch = (event) => {
        setSearch(event.target.value)
      }
    const results = (search) =>{
        return persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))
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



