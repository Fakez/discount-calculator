import axios from 'axios'

//const baseUrl = 'https://jvtoolbox.herokuapp.com/api/calculator/vipclients/'
const baseUrl = 'http://127.0.0.1:8000/api/calculator/vipclients'


const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

export default {
    getAll
}