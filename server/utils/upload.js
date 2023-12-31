import multer from 'multer'
import { GridFsStorage } from 'multer-gridfs-storage'
import dotenv from 'dotenv'
dotenv.config()

const username1 = process.env.USERNAME1
const password1 = process.env.PASSWORD1

const storage = new GridFsStorage({
    url: `mongodb+srv://${username1}:${password1}@cluster0.nveak6d.mongodb.net/`,
    options: {useUnifiedTopology: true, useNewUrlParser: true},
    file: (request, file)=>{
        const match = ["image/png", "image/jpg"]
        if(match.indexOf(file.mimeType) === -1){
            return `${Date.now()}-file-${file.originalname}`
        }
        return{
            bucketName: "photos",
            filename: `${Date.now()}-file-${file.originalname}`
        }
    }
})

export default multer({storage})