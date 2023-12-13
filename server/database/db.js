import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const username1 = process.env.USERNAME1
const password1 = process.env.PASSWORD1

const URL = `mongodb+srv://${username1}:${password1}@cluster0.nveak6d.mongodb.net/`
const Connection = async () => {

    
    try {
        await mongoose.connect(URL, {useUnifiedTopology: true})
        console.log('Database connected successfully')
    } catch (error) {
        console.log('Error while connecting with the database : ', error.message)
    }
}

export default Connection