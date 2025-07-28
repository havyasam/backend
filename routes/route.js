const express = require("express")
const router = express.Router()
const {getAllUsers, getSingleUser, newUser, deleteUser, updateUser} = require('../controller/controller')

router.use(express.json())


router.get('/',getAllUsers);


router.get('/:id', getSingleUser)

//delete user by ID
router.delete('/:id', deleteUser)

//add a new user
router.post('/', newUser)

//edit user
router.put('/:id', updateUser)

module.exports = router