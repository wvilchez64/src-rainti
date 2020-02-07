const express = require('express')
const detranController = require('../controller/apiDetran')
const router = express.Router()


router.post('/enviarContrato',detranController.enviarContrato)

module.exports = router