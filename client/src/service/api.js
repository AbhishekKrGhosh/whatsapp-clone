import axios from 'axios'

const url = "https://chattingwebapp.onrender.com/"

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
        return response.data
    } catch (error) {
        console.log('error while calling getUser api: ', error.message)
    }
}

export const setConversation = async (data) => {
    try {
        await axios.post(`${url}/conversation/add`,data)
    } catch (error) {
        console.log('error while calling setConversation api: ', error.message)
    }
}
export const getConversation = async (data) => {
    try {
        let response = await axios.post(`${url}/conversation/get`,data)
        return response.data
    } catch (error) {
        console.log('error while calling getConversation api: ', error.message)
    }
}

export const newMessage = async (data) =>{
    try {
        await axios.post(`${url}/messsage/add`,data)
    } catch (error) {
        console.log('error while calling newMessage api: ', error.message)
    }
}

export const getMessages = async (id) => {
    try {
        let response = await axios.get(`${url}/message/get/${id}`)
        return response.data
    } catch (error) {
        console.log('error while calling getMessages api: ', error.message)
    }
}

export const uploadFile = async (data) => {
    try {
        return await axios.post(`${url}/file/upload`, data)
    } catch (error) {
        console.log('error while calling uploadFile api: ', error.message)
    }
}