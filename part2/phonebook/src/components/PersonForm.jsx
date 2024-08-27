import { useState } from 'react'
import personService from '../services/persons'
const PersonForm = (props) => {
    const {persons, setPersons,setMessage} = props
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    
    const lastID = ()=>{
        const ids = persons.map(person=>person.id)
        return Math.max(...ids)
    }
    
    const addPerson = (event) => {
        event.preventDefault()
        const newPerson = {
          name: newName,
          number: newNumber,
          id: `${lastID()+1}`
        }
          persons.find(person => person.name === newName) ? updatePhoneNumber(newPerson,newNumber) : 
          personService.createPerson(newPerson).then(returnedPerson => {
            setMessage(`Added ${returnedPerson.name}`)
            setPersons(persons.concat(returnedPerson))
            setNewName('')
            setNewNumber('')
            setTimeout(() => {
              setMessage('');
            }, 3000); // 3 seconds popup
          })
      }
      const findPerson = (name)=>{
        const id = persons.find(person=>person.name===name).id
        
        return id
      }
      

        
        const updatePhoneNumber = (person, newNumber) => {
          window.confirm(`${person.name} is already added in the phonebook, replace the old number with a new one?`) ?
            personService.updateNumber(findPerson(person.name), newNumber).then(response => {
              setPersons(persons.map(person => person.id !== response.id ? person : response))
              setNewName('')
              setNewNumber('')
              setMessage(`Updated ${response.name}`)
              setTimeout(() => {
                setMessage('');
              }, 3000); 
            }).catch(error => {
              console.log('fail'+error)
              setMessage(`information of ${person.name} has already been removed from the server`)
              setTimeout(() => {
                setMessage('');
              }, 3000); 
            })


             :
            window.close
            
        }
       
        
        
      
      const handleNameChange =  (event) => {
        setNewName(event.target.value)
      }
      const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
      }

    
    return(
        <div>
            <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
        </div>
    )
}
export default PersonForm;