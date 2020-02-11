const express =  require('express')
const queries = require('../../model/contract-register/queries')

const jwt = require('../common/jwt-validation')

const router = express.Router()

router.get('/contracts',  jwt.verifyToken, queries.getContract)
router.get('/contracts/:id',  jwt.verifyToken, queries.getContractById)
router.put('/update-contract/:id', jwt.verifyToken, queries.updateContractById)
router.post('/create-contract', jwt.verifyToken, queries.createContract)
router.delete('/delete-contract/:id', jwt.verifyToken, queries.deleteContractById)


router.get('/get-detrans',  jwt.verifyToken, queries.getDetrans)
router.get('/get-creditors',  jwt.verifyToken, queries.getCreditors)
router.get('/get-detrans/:id',  jwt.verifyToken, queries.getDetransById)
router.get('/get-creditors/:id',  jwt.verifyToken, queries.getCreditorsById)
router.get('/get-alien-types',  jwt.verifyToken, queries.getAlienTypes)
router.get('/get-alien-types/:id',  jwt.verifyToken, queries.getAlienTypesById)
router.get('/get-indexes',  jwt.verifyToken, queries.getIndexes)
router.get('/get-indexes/:id',  jwt.verifyToken, queries.getIndexesById)
router.get('/get-species',  jwt.verifyToken, queries.getSpecies)
router.get('/get-species/:id',  jwt.verifyToken, queries.getSpeciesById)
router.get('/get-years',  jwt.verifyToken, queries.getYears)
router.get('/get-brands',  jwt.verifyToken, queries.getBrands)
router.get('/get-models/:id',  jwt.verifyToken, queries.getModelsById)
router.get('/get-modelYears/:brandId/:modelId',  jwt.verifyToken, queries.getModelYearsByIds)



module.exports = router