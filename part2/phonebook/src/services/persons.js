import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = async () => {
    const request = axios.get(baseUrl)
    const response = await request
    return response.data
}
const deletePerson = (id)=>{
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response=>response.data)
}
const updateNumber = async (id, phoneNumber) => {
    const existingPerson = await axios.get(`${baseUrl}/${id}`).then(response => response.data);
    const updatedPerson = { ...existingPerson, number: phoneNumber };
    const request = axios.put(`${baseUrl}/${id}`, updatedPerson);
    return request.then(response => response.data);
};

const createPerson = (newPerson) =>{
    const request = axios.post(baseUrl,newPerson)
    return request.then(response=>response.data)
}



export default {getAll,deletePerson,updateNumber,createPerson}