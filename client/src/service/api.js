import axios from 'axios'

const url = "http://localhost:8000"

export const addUser = async (data) => {
    try {
        await axios.post(`${url}/add`, data)
    } catch (error) {
        console.log("Error in addUser : ", error.message)
    }
}

export const getUsers = async () => {
    try {
        const response = await axios.get(`${url}/users`)
        console.log(response)
        return response.data
    } catch (error) {
        console.log('error while calling getUser api: ', error.message)
    }
}