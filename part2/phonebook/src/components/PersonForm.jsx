import { useState } from 'react'
const PersonForm = (props) => {
    const {persons, setPersons} = props
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const addPerson = (event) => {
        event.preventDefault()
        const newPerson = {
          name: newName,
          number: newNumber
        }
          persons.find(person => person.name === newName && person.number === newNumber) ? alert(`${newName} is already added to phonebook`) : setPersons([...persons, newPerson])
          setNewName('')
          setNewNumber('')
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