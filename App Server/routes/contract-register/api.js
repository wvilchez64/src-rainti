const express =  require('express')
const queries = require('../../model/contract-register/queries')

const jwt = require('jsonwebtoken')

const router = express.Router()

router.get('/contracts',  verifyToken, queries.getContract)
router.get('/contracts/:id',  verifyToken, queries.getContractById)
router.put('/update-contract/:id', verifyToken, queries.updateContractById)
router.post('/create-contract', verifyToken, queries.createContract)
router.delete('/delete-contract/:id', verifyToken, queries.deleteContractById)


router.get('/get-detrans',  verifyToken, queries.getDetrans)
router.get('/get-creditors',  verifyToken, queries.getCreditors)
router.get('/get-detrans/:id',  verifyToken, queries.getDetransById)
router.get('/get-creditors/:id',  verifyToken, queries.getCreditorsById)
router.get('/get-alien-types',  verifyToken, queries.getAlienTypes)
router.get('/get-alien-types/:id',  verifyToken, queries.getAlienTypesById)
router.get('/get-indexes',  verifyToken, queries.getIndexes)
router.get('/get-indexes/:id',  verifyToken, queries.getIndexesById)
router.get('/get-species',  verifyToken, queries.getSpecies)
router.get('/get-species/:id',  verifyToken, queries.getSpeciesById)
router.get('/get-years',  verifyToken, queries.getYears)
router.get('/get-brands',  verifyToken, queries.getBrands)
router.get('/get-models/:id',  verifyToken, queries.getModelsById)
router.get('/get-modelYears/:brandId/:modelId',  verifyToken, queries.getModelYearsByIds)

function verifyToken(req, res, next){
    if(!req.headers.authorization){
        return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null'){
        return res.status(401).send('Unauthorized request')
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload){
        return res.status(401).send('Unauthorized request')
    }
    req.userId = payload.subject
    next()
}

module.exports = router