import express from 'express'
import Users from '../models/Users.js'

const router = new express.Router();

router.get('/', async(req, res) =>{
    res.send('get all users')
})

//create a new user
router.post('/', async(req,res)=>{
    try {
        const user = await Users.create(req.body)
        res.send(user)
        
    } catch(e){
        console.log(error);    
    }
})


export default router