const mongoose = require('mongoose');



const connectDb =(url)=>{
    return mongoose
    .connect(url)
    .then(()=>console.log('db is connectd'))
    .catch((err)=>console.log("db is not connected"))
}

module.exports = connectDb

