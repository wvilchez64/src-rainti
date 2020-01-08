const Data_CodeDao = require(setup.paths.infra + 'Data_CodeDao.js');
const Entity_TypeDao = require(setup.paths.infra + 'Entity_TypeDao.js');
const EntitiesDao = require(setup.paths.infra + 'EntitiesDao.js');
const Data_DetranDao = require(setup.paths.infra + 'Data_DetranDao.js');

const client = require(setup.paths.config + 'database.js');

class ProjectController {

    authenticated() {
            return function(req, resp, next) {
            if (req.isAuthenticated()) {
                next();
            } else {
                //console.log('not authenticated');
                return resp.status(511).send({value : 'not authenticated'});
            }

        }
    }

/**** data_code ****/

    data_codeInsert() {
        return function(req, resp) { 
            const description = req.body.description; 
            const data_codeDao = new Data_CodeDao(client);
            data_codeDao.data_codeInsert(description)
            .then(result => {
                return resp.status(200).send({message: result});
            })
            .catch(error => {
                console.log('data_codeInsert-error', error);
            })
        }
    }

    data_codeSelectId() {
        return function(req, resp) { 
            const id = req.params.id; 
            const data_codeDao = new Data_CodeDao(client);
            data_codeDao.data_codeSelectId(id)
            .then(result => {
                return resp.status(200).send(result);
            })
            .catch(error => {
                console.log('data_codeSelectId-error', error);
            })
        }
    }

    data_codeSelectDescription() {
        return function(req, resp) { 
            const description = req.params.description; 
            const data_codeDao = new Data_CodeDao(client);
            data_codeDao.data_codeSelectDescription(description)
            .then(result => {
                return resp.status(200).send(result);
            })
            .catch(error => {
                console.log('data_codeSelectDescription-error', error);
            })
        }
    }

    data_codeUpdate() {
        return function(req, resp) { 
            const id = req.body.id; 
            const description = req.body.description; 
            const data_codeDao = new Data_CodeDao(client);
            data_codeDao.data_codeUpdate(id, description)
            .then(result => {
                return resp.status(200).send({message: result});
            })
            .catch(error => {
                console.log('data_codeUpdate-error', error);
            })
        }
    }

    data_codeSelectAll() {
        return function(req, resp) { 
            const data_codeDao = new Data_CodeDao(client);
            data_codeDao.data_codeSelectAll()
            .then(result => {
                return resp.status(200).send(result);
            })
            .catch(error => {
                console.log('data_codeSelectAll-error', error);
            })
        }
    }

/**** entity_type ****/

    entity_typeInsert() {
        return function(req, resp) { 
            const description = req.body.description; 
            const entity_typeDao = new Entity_TypeDao(client);
            entity_typeDao.entity_typeInsert(description)
            .then(result => {
                return resp.status(200).send({message: result});
            })
            .catch(error => {
                console.log('entity_typeInsert-error', error);
            })
        }
    }

    entity_typeSelectId() {
        return function(req, resp) { 
            const id = req.params.id; 
            const entity_typeDao = new Entity_TypeDao(client);
            entity_typeDao.entity_typeSelectId(id)
            .then(result => {
                return resp.status(200).send(result);
            })
            .catch(error => {
                console.log('entity_typeSelectId-error', error);
            })
        }
    }

    entity_typeSelectDescription() {
        return function(req, resp) { 
            const description = req.params.description; 
            const entity_typeDao = new Entity_TypeDao(client);
            entity_typeDao.entity_typeSelectDescription(description)
            .then(result => {
                return resp.status(200).send(result);
            })
            .catch(error => {
                console.log('entity_typeSelectDescription-error', error);
            })
        }
    }

    entity_typeUpdate() {
        return function(req, resp) { 
            const id = req.body.id; 
            const description = req.body.description; 
            const entity_typeDao = new Entity_TypeDao(client);
            entity_typeDao.entity_typeUpdate(id, description)
            .then(result => {
                return resp.status(200).send({message: result});
            })
            .catch(error => {
                console.log('entity_typeUpdate-error', error);
            })
        }
    }

    entity_typeSelectAll() {
        return function(req, resp) { 
            const entity_typeDao = new Entity_TypeDao(client);
            entity_typeDao.entity_typeSelectAll()
            .then(result => {
                return resp.status(200).send(result);
            })
            .catch(error => {
                console.log('entity_typeSelectAll-error', error);
            })
        }
    }

/**** entities ****/

    entitiesInsert() {
        return function(req, resp) { 
            const description = req.body.description; 
            const status = req.body.status; 
            const datacodeid = req.body.datacodeid; 
            const entitytypeid = req.body.entitytypeid; 
            const entitiesDao = new EntitiesDao(client);
            entitiesDao.entitiesInsert(description, status, datacodeid, entitytypeid)
            .then(result => {
                return resp.status(200).send({message: result});
            })
            .catch(error => {
                console.log('entitiesInsert-error', error);
            })
        }
    }

    entitiesSelectId() {
        return function(req, resp) { 
            const id = req.params.id; 
            const entitiesDao = new EntitiesDao(client);
            entitiesDao.entitiesSelectId(id)
            .then(result => {
                return resp.status(200).send(result);
            })
            .catch(error => {
                console.log('entitiesSelectId-error', error);
            })
        }
    }

    entitiesSelectDescription() {
        return function(req, resp) { 
            const description = req.params.description; 
            const entitiesDao = new EntitiesDao(client);
            entitiesDao.entitiesSelectDescription(description)
            .then(result => {
                return resp.status(200).send(result);
            })
            .catch(error => {
                console.log('entitiesSelectDescription-error', error);
            })
        }
    }

    entitiesUpdate() {
        return function(req, resp) { 
            const id = req.body.id; 
            const description = req.body.description; 
            const status = req.body.status; 
            const datacodeid = req.body.datacodeid; 
            const entitytypeid = req.body.entitytypeid; 
            const entitiesDao = new EntitiesDao(client);
            entitiesDao.entitiesUpdate(id, description, status, datacodeid, entitytypeid)
            .then(result => {
                return resp.status(200).send({message: result});
            })
            .catch(error => {
                console.log('entitiesUpdate-error', error);
            })
        }
    }

    entitiesSelectAll() {
        return function(req, resp) { 
            const entitiesDao = new EntitiesDao(client);
            entitiesDao.entitiesSelectAll()
            .then(result => {
                return resp.status(200).send(result);
            })
            .catch(error => {
                console.log('entitiesSelectAll-error', error);
            })
        }
    }    

    /**** data_detran ****/
    
    data_detranInsert() {
        return function(req, resp) { 
            const description = req.body.description; 
            const identity = req.body.identity; 
            const datacodeid = req.body.datacodeid; 
            data_detranDao.data_detranInsert(description, identity, datacodeid)
            .then(result => {
                return resp.status(200).send({message: result});
            })
            .catch(error => {
                console.log('data_detranInsert-error', error);
            })
        }
    }

    data_detranSelectId() {
        return function(req, resp) { 
            const id = req.params.id; 
            const data_detranDao = new Data_DetranDao(client);
            data_detranDao.data_detranSelectId(id)
            .then(result => {
                return resp.status(200).send(result);
            })
            .catch(error => {
                console.log('data_detranSelectId-error', error);
            })
        }
    }

    data_detranSelectDescription() {
        return function(req, resp) { 
            const description = req.params.description; 
            const data_detranDao = new Data_DetranDao(client);
            data_detranDao.data_detranSelectDescription(description)
            .then(result => {
                return resp.status(200).send(result);
            })
            .catch(error => {
                console.log('data_detranSelectDescription-error', error);
            })
        }
    }

    data_detranUpdate() {
        return function(req, resp) { 
            const id = req.body.id; 
            const description = req.body.description; 
            const identity = req.body.identity; 
            const datacodeid = req.body.datacodeid; 
            const data_detranDao = new Data_DetranDao(client);
            data_detranDao.data_detranUpdate(id, description, identity, datacodeid)
            .then(result => {
                return resp.status(200).send({message: result});
            })
            .catch(error => {
                console.log('data_detranUpdate-error', error);
            })
        }
    }

    data_detranSelectAll() {
        return function(req, resp) { 
            const data_detranDao = new Data_DetranDao(client);
            data_detranDao.data_detranSelectAll()
            .then(result => {
                return resp.status(200).send(result);
            })
            .catch(error => {
                console.log('data_detranSelectAll-error', error);
            })
        }
    }
}    
module.exports = ProjectController;

