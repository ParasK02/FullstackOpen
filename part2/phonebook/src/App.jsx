import { useState,useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

import personService from './services/persons'
import './index.css'
import ConfirmMessage from './components/ConfirmMessage'


const App = () => {
  const [persons, setPersons] = useState([])//original copy
  const [filteredList, setFilteredList] = useState([]) 
  const [message, setMessage] = useState('')
  
  useEffect(() => {
   
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
        setFilteredList(initialPersons)
      })
  
  }
  , [])

  console.log(persons)
  
  return (
    <div>

      <h2>Phonebook</h2>
      <ConfirmMessage message={message}/>
      <Filter persons={persons} setFilteredList={setFilteredList} />
      <PersonForm persons={filteredList} setPersons={setFilteredList} setMessage={setMessage} />
      <Persons filteredPersons={filteredList} setPersons={setFilteredList}/>
    </div>
    
  )
}

export default App