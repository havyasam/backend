const users = require('../model/model')


// get all the users
const getAllUsers = async (req, res) => {
    try {
        const data = await users.find({});
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// get user by ID
const getSingleUser = async(req, res) => {
    try {
        const {id:taskID} = req.params
        const task = await users.findOne({_id:taskID})
        console.log(task)
        if(!task){
            return res.status(400).json({msg: `there is no id name ${taskID}`})
        }
       res.json(task);
     
    } catch (error) {
        return res.status(500).json({error})
    }
  
}


const newUser = async(req, res) => {
    try {
        const task = await users.create(req.body)
        res.status(201).json(task);
        
    } catch (error) {
        res.status(500).json({error: error.message})
    } 

}
const updateUser = async(req,res)=>{
    try {
        const {id:taskID} = req.params
        const task = await users.findOneAndUpdate({_id:taskID},req.body, { new: true })
        console.log(task)
        if(!task){
            return res.status(400).json({msg: `no id defined`})
        }
        res.status(201).json(task)
    } catch (error) {
        
        return res.status(500).json({error})
    }

   
}

const deleteUser = async(req,res)=>{
    
    try {
        const {id:taskID} = req.params
        const task = await users.findOneAndDelete({_id:taskID})
        console.log(task)
        if(!task){
            return res.status(400).json({msg:`there is no id named ${taskID}`})
        }
        res.json({msg: `deleted the id ${taskID}`})
        
    } catch (error) {
        return res.status(500).json({error})
    }
}

module.exports = {getAllUsers, getSingleUser, newUser, deleteUser, updateUser}