import express from 'express'
import { addUser, getUsers } from '../controller/user-controller.js'
import { getConversation, newConversation } from '../controller/conversation-controller.js'
import { getMessage, newMessage } from '../controller/message-controller.js'
import { getImage, uploadFile } from '../controller/image-controller.js'
import upload from '../utils/upload.js'
import path from 'path'

const route  = express.Router()

route.post('/add',addUser)
route.get('/users',getUsers)
route.post('/conversation/add',newConversation)
route.post('/conversation/get', getConversation)
route.post('/messsage/add',newMessage)
route.get('/message/get/:id',getMessage)
route.post('/file/upload', upload.single("file"),uploadFile)
route.get('/file/:filename',getImage)

//---------------deployment--------------//

const __dirname1 = path.resolve()
if(process.env.NODE_ENV=== 'production'){
    route.use(express.static(path.join(__dirname1,'/client/build')))
    route.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname1, 'client', 'build', 'index.html'))
    })
}
else{
    route.get('/', (req,res)=> {
        res.send("running successfully")
    })
}

//---------------deployment--------------//

export default route  