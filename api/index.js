const express = require("express")
const cors = require('cors')
const app = express()
const router = require('../routes/route')
const connectDb = require('../connect/connect')
require('dotenv').config()
const port = process.env.PORT

app.use(cors())
app.use('/api/tasks/', router)



const start = async()=>{
    try {
        await connectDb(process.env.MONGO_URI)
        app.listen(port,
            console.log(`listening at port ${port}`)
        )
 
    } catch (error) {
        console.log("db is not connected")
        
    }

}
start()