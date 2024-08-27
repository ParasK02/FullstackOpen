
import personService from '../services/persons'


const Persons = (props) => {
  const {filteredPersons, setPersons} = props
  
  const getPerson=(id)=>{
    const person= filteredPersons.find(person=>person.id===id)
    return person.name
  }
  const handleDelete = (id) => {
    
    window.confirm(`Do you want to delete ${getPerson(id)}`)? personService.deletePerson(id).then(response =>{
      
      setPersons(filteredPersons.filter(person => person.id !== response.id));


    }) : window.close
  }
    
  
  

  return (
    <div>
      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map((person) => 
          <li  key={person.name}>{person.name} {person.number} 
            <button onClick={() => handleDelete(person.id)}>delete</button>
          </li>
        )}
      </ul>
    </div>
  )

}
export default Persons