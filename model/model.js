const mongoose = require('mongoose')

const Tasksschema =new mongoose.Schema({
    task:{
        type: String,
        required: true,
        versionKey: false
    }

})

module.exports = mongoose.model('tasks',Tasksschema)