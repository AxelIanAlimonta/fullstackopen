import axios from 'axios'

let baseUrl = "http://localhost:3001/persons"

function getAll() {
    return axios.get(baseUrl).then((res) => res.data)
}

function addPerson(data) {
    return axios.post(baseUrl, data).then(res => res.data)
}

function deletePerson(id) {
    return axios.delete(baseUrl + "/" + id)
}

function updatePerson(id, data) {
    return axios.put(baseUrl + "/" + id, data).then(res=>console.log(res))
}

export { getAll, addPerson, deletePerson , updatePerson}