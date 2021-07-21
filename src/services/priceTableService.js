import axios from 'axios'

//const baseUrl = 'https://jvtoolbox.herokuapp.com/api/calculator/tables/'
const baseUrl = 'http://127.0.0.1:8000/api/calculator/tables'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const getTable = async tableName => {
    console.log('gettable')
    const response = await axios.get(`${baseUrl}/${tableName}`)
    return response.data
}

const exports = {
    getAll,
    getTable,
}

export default exports;