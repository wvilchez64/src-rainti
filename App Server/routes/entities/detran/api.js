const express =  require('express')
const queries = require('../../../model/entities/detran/queries')
const jwt = require('../../common/jwt-validation')

const router = express.Router()

router.get('/detrans',  jwt.verifyToken, queries.getDetrans)
router.get('/detrans/:id',  jwt.verifyToken, queries.getDetranById)
router.get('/detran-contacts/:id',  jwt.verifyToken, queries.getDetranContacts)
router.get('/detran-contacts/contact/:id',  jwt.verifyToken, queries.getDetranContactById)
router.get('/states-detran-add',  jwt.verifyToken, queries.getStatesForDetranAdd)

router.put('/update-detran/:id', jwt.verifyToken, queries.updateDetranById)
router.put('/detran-contacts/update-contact/:id',  jwt.verifyToken, queries.updateDetranContactById)

router.delete('/delete-detran/:id', jwt.verifyToken, queries.deleteDetranById)
router.delete('/detran-contacts/delete-contact/:id',  jwt.verifyToken, queries.deleteDetranContactById)

router.post('/create-detran', jwt.verifyToken, queries.createDetran)
router.post('/add-detran-contact/:id', jwt.verifyToken, queries.addDetranContact)

module.exports = router