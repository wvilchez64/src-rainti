const express =  require('express')
const queries = require('../model/queries')

const router = express.Router()

router.get('/', (req, res)=>{
    res.send('From API route')
})

router.get('/entities', queries.getDetrans)
router.post('/register', queries.createUser)
router.post('/login', queries.loginUser)

module.exports = router