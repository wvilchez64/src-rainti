const Data_CodeDao = require(setup.paths.infra + 'Data_CodeDao.js');
const client = require(setup.paths.config + 'database.js');

class ProjectController {

    authenticated() {
            return function(req, resp, next) {
            if (req.isAuthenticated()) {
                next();
            } else {
                console.log('not authenticated');
                return resp.status(511).send({value : false});
            }

        }
    }

    data_codeInsert() {
        return function(req, resp) { 
            const description = req.params.de; 
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

    data_codeUpdate() {
        return function(req, resp) { 
            const id = req.params.id; 
            const description = req.params.de; 
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
    
}    
module.exports = ProjectController;

