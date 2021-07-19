import axios from 'axios'

const baseUrl = 'https://jvtoolbox.herokuapp.com'

const getCurrentUser = async () => {
    const response = await axios.get(`${baseUrl}/accounts/current`)

    // for local testing
    return JSON.parse('{"username": "testuser", "groups": ["Admin"]}');

    return response.data
}

export default {
    getCurrentUser
}