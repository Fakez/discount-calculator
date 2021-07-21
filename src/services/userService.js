import axios from 'axios'

//const baseUrl = 'https://jvtoolbox.herokuapp.com/api/users/current'
const baseUrl = 'http://127.0.0.1:8000/api/users/current'


const getCurrentUser = async () => {
    const response = await axios.get(baseUrl)

    // for local testing
    return JSON.parse('{"username": "testuser", "groups": ["Admin"]}');

    return response.data
}

export default {
    getCurrentUser
}