const UsersDao = require(setup.paths.infra + 'UsersDao.js');
const Data_CodeDao = require(setup.paths.infra + 'Data_CodeDao.js');
const Entity_TypeDao = require(setup.paths.infra + 'Entity_TypeDao.js');
const EntitiesDao = require(setup.paths.infra + 'EntitiesDao.js');
const Data_DetranDao = require(setup.paths.infra + 'Data_DetranDao.js');
const Data_CreditorDao = require(setup.paths.infra + 'Data_CreditorDao.js');
const StatesDao = require(setup.paths.infra + 'StatesDao.js');
const Data_ContractDao = require(setup.paths.infra + 'data_contractDao.js');
const Data_ContactDao = require(setup.paths.infra + 'data_contactDao.js');
const client = require(setup.paths.config + 'database.js');

class ProjectController {
    
    authenticated() {
        return function(req, resp, next) {
            if (req.isAuthenticated()) {
                const email = req.user.email;
                const usersDao = new UsersDao(client);
                usersDao.usersoutCheck(email)
                .then(out => {
                    if (out.email){
                        return resp.redirect('/logout');
                    }
                        next();
                })    
                .catch(() => next())
            } else {
                console.log('not authenticated');
                return resp.status(511).send({value : 'not authenticated'});
            };
        }
    }

/**** data_code ****/

    data_codeInsert() {
        return function(req, resp) { 
            const description = req.body.description;; 
            const data_codeDao = new Data_CodeDao(client);
            data_codeDao.data_codeInsert(description)
            .then(result => {
                return resp.status(200).send({message: result});
            })
            .catch(error => {
                console.log('data_codeInsert-error', error);
                return resp.status(500).send({message: error});
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
                return resp.status(500).send({message: error});
            })
        }
    }

    data_codeSelectDescp() {
        return function(req, resp) { 
            const description = req.params.description; 
            const data_codeDao = new Data_CodeDao(client);
            data_codeDao.data_codeSelectDescp(description)
            .then(result => {
                return resp.status(200).send(result);
            })
            .catch(error => {
                console.log('data_codeSelectDescp-error', error);
                return resp.status(500).send({message: error});
            })
        }
    }

    data_codeUpdate() {
        return function(req, resp) { 
            const id = req.body.id; 
            const description = req.body.description;; 
            const data_codeDao = new Data_CodeDao(client);
            data_codeDao.data_codeUpdate(id, description)
            .then(result => {
                return resp.status(200).send({message: result});
            })
            .catch(error => {
                console.log('data_codeUpdate-error', error);
                return resp.status(500).send({message: error});
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
                return resp.status(500).send({message: error});
            })
        }
    }

/**** entity_type ****/

    entity_typeInsert() {
         return function (req, resp) { 
            const description = req.body.description;; 
            const entity_typeDao = new Entity_TypeDao(client);
            entity_typeDao.entity_typeInsert(description)
            .then(result => {
                return resp.status(200).send({message: result});
            })
            .catch(error => {
                console.log('entity_typeInsert-error', error);
                return resp.status(500).send({message: error});
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
                return resp.status(500).send({message: error});
            })
        }
    }

    entity_typeSelectDescp() {
        return function(req, resp) { 
            const description = req.params.description; 
            const entity_typeDao = new Entity_TypeDao(client);
            entity_typeDao.entity_typeSelectDescp(description)
            .then(result => {
                return resp.status(200).send(result);
            })
            .catch(error => {
                console.log('entity_typeSelectDescp-error', error);
                return resp.status(500).send({message: error});
            })
        }
    }

    entity_typeUpdate() {
        return function(req, resp) { 
            const id = req.body.id; 
            const description = req.body.description;; 
            const entity_typeDao = new Entity_TypeDao(client);
            entity_typeDao.entity_typeUpdate(id, description)
            .then(result => {
                return resp.status(200).send({message: result});
            })
            .catch(error => {
                console.log('entity_typeUpdate-error', error);
                return resp.status(500).send({message: error});
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
                return resp.status(500).send({message: error});
            })
        }
    }

/**** entities ****/

    entitiesInsert() {
        return function(req, resp) { 
            const description = req.body.description;; 
            const status = req.body.status; 
            const datacodeid = req.body.datacodeid; 
            const entitytypeid = req.body.entitytypeid; 
            const idstate = req.body.idstate; 
            const entitiesDao = new EntitiesDao(client);
            entitiesDao.entitiesInsert(description, status, datacodeid, entitytypeid, idstate)
            .then(result => {
                return resp.status(200).send({message: result});
            })
            .catch(error => {
                console.log('entitiesInsert-error', error);
                return resp.status(500).send({message: error});
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
                return resp.status(500).send({message: error});
            })
        }
    }

    entitiesSelectDescp() {
        return function(req, resp) { 
            const description = req.params.description; 
            const entitiesDao = new EntitiesDao(client);
            entitiesDao.entitiesSelectDescp(description)
            .then(result => {
                return resp.status(200).send(result);
            })
            .catch(error => {
                console.log('entitiesSelectDescp-error', error);
                return resp.status(500).send({message: error});
            })
        }
    }

    entitiesUpdate() {
        return function(req, resp) { 
            const id = req.body.id; 
            const description = req.body.description;; 
            const status = req.body.status; 
            const datacodeid = req.body.datacodeid; 
            const entitytypeid = req.body.entitytypeid; 
            const idstate = req.body.idstate;             
            const entitiesDao = new EntitiesDao(client);
            entitiesDao.entitiesUpdate(id, description, status, datacodeid, entitytypeid, idstate)
            .then(result => {
                return resp.status(200).send({message: result});
            })
            .catch(error => {
                console.log('entitiesUpdate-error', error);
                return resp.status(500).send({message: error});
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
                return resp.status(500).send({message: error});
            })
        }
    }    

/**** data_detran ****/
    
    data_detranInsert() {
        return function(req, resp) { 
            const description = req.body.description;; 
            const identity = req.body.identity; 
            const datacodeid = req.body.datacodeid; 
            const data_detranDao = new Data_DetranDao(client);
            data_detranDao.data_detranInsert(description, identity, datacodeid)
            .then(result => {
                return resp.status(200).send({message: result});
            })
            .catch(error => {
                console.log('data_detranInsert-error', error);
                return resp.status(500).send({message: error});
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
                return resp.status(500).send({message: error});
            })
        }
    }

    data_detranSelectDescp() {
        return function(req, resp) { 
            const description = req.params.description; 
            const data_detranDao = new Data_DetranDao(client);
            data_detranDao.data_detranSelectDescp(description)
            .then(result => {
                return resp.status(200).send(result);
            })
            .catch(error => {
                console.log('data_detranSelectDescp-error', error);
                return resp.status(500).send({message: error});
            })
        }
    }

    data_detranUpdate() {
        return function(req, resp) { 
            const id = req.body.id; 
            const description = req.body.description;; 
            const identity = req.body.identity; 
            const datacodeid = req.body.datacodeid; 
            const data_detranDao = new Data_DetranDao(client);
            data_detranDao.data_detranUpdate(id, description, identity, datacodeid)
            .then(result => {
                return resp.status(200).send({message: result});
            })
            .catch(error => {
                console.log('data_detranUpdate-error', error);
                return resp.status(500).send({message: error});
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
                return resp.status(500).send({message: error});
            })
        }
    }

/**** data_creditor ****/
    
    data_creditorInsert() {
        return function(req, resp) { 
            const description = req.body.description;; 
            const identity = req.body.identity; 
            const datacodeid = req.body.datacodeid; 
            const data_creditorDao = new Data_CreditorDao(client);
            data_creditorDao.data_creditorInsert(description, identity, datacodeid)
            .then(result => {
                return resp.status(200).send({message: result});
            })
            .catch(error => {
                console.log('data_creditorInsert-error', error);
                return resp.status(500).send({message: error});
            })
        }
    }

    data_creditorSelectId() {
        return function(req, resp) { 
            const id = req.params.id; 
            const data_creditorDao = new Data_CreditorDao(client);
            data_creditorDao.data_creditorSelectId(id)
            .then(result => {
                return resp.status(200).send(result);
            })
            .catch(error => {
                console.log('data_creditorSelectId-error', error);
                return resp.status(500).send({message: error});
            })
        }
    }

    data_creditorSelectDescp() {
        return function(req, resp) { 
            const description = req.params.description; 
            const data_creditorDao = new Data_CreditorDao(client);
            data_creditorDao.data_creditorSelectDescp(description)
            .then(result => {
                return resp.status(200).send(result);
            })
            .catch(error => {
                console.log('data_creditorSelectDescp-error', error);
                return resp.status(500).send({message: error});
            })
        }
    }

    data_creditorUpdate() {
        return function(req, resp) { 
            const id = req.body.id; 
            const description = req.body.description;; 
            const identity = req.body.identity; 
            const datacodeid = req.body.datacodeid; 
            const data_creditorDao = new Data_CreditorDao(client);
            data_creditorDao.data_creditorUpdate(id, description, identity, datacodeid)
            .then(result => {
                return resp.status(200).send({message: result});
            })
            .catch(error => {
                console.log('data_creditorUpdate-error', error);
                return resp.status(500).send({message: error});
            })
        }
    }

    data_creditorSelectAll() {
        return function(req, resp) { 
            const data_creditorDao = new Data_CreditorDao(client);
            data_creditorDao.data_creditorSelectAll()
            .then(result => {
                return resp.status(200).send(result);
            })
            .catch(error => {
                console.log('data_creditorSelectAll-error', error);
                return resp.status(500).send({message: error});
            })
        }
    }   

/**** states ****/
    
    statesSelectId() {
        return function(req, resp) { 
            const id = req.params.id; 
            const statesDao = new StatesDao(client);
            statesDao.statesSelectId(id)
            .then(result => {
                return resp.status(200).send(result);
            })
            .catch(error => {
                console.log('statesSelectId-error', error);
                return resp.status(500).send({message: error});
            })
        }
    }

    statesSelectDescp() {
        return function(req, resp) { 
            const description = req.params.description; 
            const statesDao = new StatesDao(client);
            statesDao.statesSelectDescp(description)
            .then(result => {
                return resp.status(200).send(result);
            })
            .catch(error => {
                console.log('statesSelectDescp-error', error);
                return resp.status(500).send({message: error});
            })
        }
    }

    statesSelectAll() {
        return function(req, resp) { 
            const statesDao = new StatesDao(client);
            statesDao.statesSelectAll()
            .then(result => {
                return resp.status(200).send(result);
            })
            .catch(error => {
                console.log('statesSelectAll-error', error);
                return resp.status(500).send({message: error});
            })
        }
    }

/**** data_contract ****/
    
    data_contractInsert() {
        return function(req, resp) { 
            const description = req.body.description;; 
            const identity = req.body.identity; 
            const datacodeid = req.body.datacodeid; 
            const data_contractDao = new Data_ContractDao(client);
            data_contractDao.data_contractInsert(description, identity, datacodeid)
            .then(result => {
                return resp.status(200).send({message: result});
            })
            .catch(error => {
                console.log('data_contractInsert-error', error);
                return resp.status(500).send({message: error});
            })
        }
    }

    data_contractSelectId() {
        return function(req, resp) { 
            const id = req.params.id; 
            const data_contractDao = new Data_ContractDao(client);
            data_contractDao.data_contractSelectId(id)
            .then(result => {
                return resp.status(200).send(result);
            })
            .catch(error => {
                console.log('data_contractSelectId-error', error);
                return resp.status(500).send({message: error});
            })
        }
    }

    data_contractSelectDescp() {
        return function(req, resp) { 
            const description = req.params.description; 
            const data_contractDao = new Data_ContractDao(client);
            data_contractDao.data_contractSelectDescp(description)
            .then(result => {
                return resp.status(200).send(result);
            })
            .catch(error => {
                console.log('data_contractSelectDescp-error', error);
                return resp.status(500).send({message: error});
            })
        }
    }

    data_contractUpdate() {
        return function(req, resp) { 
            const id = req.body.id; 
            const description = req.body.description;
            const data_contractDao = new Data_ContractDao(client);
            data_contractDao.data_contractUpdate(id, description)
            .then(result => {
                return resp.status(200).send({message: result});
            })
            .catch(error => {
                console.log('data_contractUpdate-error', error);
                return resp.status(500).send({message: error});
            })
        }
    }

    data_contractSelectAll() {
        return function(req, resp) { 
            const data_contractDao = new Data_ContractDao(client);
            data_contractDao.data_contractSelectAll()
            .then(result => {
                return resp.status(200).send(result);
            })
            .catch(error => {
                console.log('data_contractSelectAll-error', error);
                return resp.status(500).send({message: error});
            })
        }
    }   
    
/**** data_contact ****/
    
    data_contactInsert() {
        return function(req, resp) { 
            const description = req.body.description;; 
            const identity = req.body.identity; 
            const datacodeid = req.body.datacodeid; 
            const data_contactDao = new Data_ContactDao(client);
            data_contactDao.data_contactInsert(description, identity, datacodeid)
            .then(result => {
                return resp.status(200).send({message: result});
            })
            .catch(error => {
                console.log('data_contactInsert-error', error);
                return resp.status(500).send({message: error});
            })
        }
    }

    data_contactSelectId() {
        return function(req, resp) { 
            const id = req.params.id; 
            const data_contactDao = new Data_ContactDao(client);
            data_contactDao.data_contactSelectId(id)
            .then(result => {
                return resp.status(200).send(result);
            })
            .catch(error => {
                console.log('data_contactSelectId-error', error);
                return resp.status(500).send({message: error});
            })
        }
    }

    data_contactSelectDescp() {
        return function(req, resp) { 
            const description = req.params.description; 
            const data_contactDao = new Data_ContactDao(client);
            data_contactDao.data_contactSelectDescp(description)
            .then(result => {
                return resp.status(200).send(result);
            })
            .catch(error => {
                console.log('data_contactSelectDescp-error', error);
                return resp.status(500).send({message: error});
            })
        }
    }

    data_contactUpdate() {
        return function(req, resp) { 
            const id = req.body.id; 
            const description = req.body.description;; 
            const identity = req.body.idcontract; 
            const datacodeid = req.body.datacodeid; 
            const data_contactDao = new Data_ContactDao(client);
            data_contactDao.data_contactUpdate(id, description, identity, datacodeid)
            .then(result => {
                return resp.status(200).send({message: result});
            })
            .catch(error => {
                console.log('data_contactUpdate-error', error);
                return resp.status(500).send({message: error});
            })
        }
    }

    data_contactSelectAll() {
        return function(req, resp) { 
            const data_contactDao = new Data_ContactDao(client);
            data_contactDao.data_contactSelectAll()
            .then(result => {
                return resp.status(200).send(result);
            })
            .catch(error => {
                console.log('data_contactSelectAll-error', error);
                return resp.status(500).send({message: error});
            })
        }
    }   

/**** usersout ****/
    
    usersoutInsert() {
        return function(req, resp) { 
            const email = req.body.email;
            const usersDao = new UsersDao(client);
            usersDao.usersoutInsert(email)
            .then(result => {
                return resp.status(200).send({message: result});
            })
            .catch(error => {
                console.log('usersoutInsert-error', error);
                return resp.status(500).send({message: error});
            })
        }
    }

    usersoutSelectId() {
        return function(req, resp) { 
            const id = req.params.id; 
            const usersDao = new UsersDao(client);
            usersDao.usersoutSelectId(id)
            .then(result => {
                return resp.status(200).send(result);
            })
            .catch(error => {
                console.log('usersoutSelectId-error', error);
                return resp.status(500).send({message: error});
            })
        }
    }

    usersoutSelectEmail() {
        return function(req, resp) { 
            const email = req.params.email;
            const usersDao = new UsersDao(client);
            usersDao.usersoutSelectEmail(email)
            .then(result => {
                return resp.status(200).send({message: result});
            })
            .catch(error => {
                console.log('usersoutSelectEmail', error);
                return resp.status(500).send({message: error});
            })
        }
    }

    usersoutSelectAll() {
        return function(req, resp) { 
            const usersDao = new UsersDao(client);
            usersDao.usersoutSelectAll()
            .then(result => {
                return resp.status(200).send(result);
            })
            .catch(error => {
                console.log('usersoutSelectAll-error', error);
                return resp.status(500).send({message: error});
            })
        }
    }   

    usersoutDelete() {
        return function(req, resp) { 
            const email = req.body.email;
            const usersDao = new UsersDao(client);
            usersDao.usersoutDelete(email)
            .then(result => {
                return resp.status(200).send({message: result});
            })
            .catch(error => {
                console.log('usersoutDeleteEmail', error);
                return resp.status(500).send({message: error});
            })
        }
    }

/**** users ****/
    
    usersInsert() {
        return function(req, resp) { 
            const firstname = req.body.firstname;
            const lastname = req.body.lastname;
            const email = req.body.email;
            const username = req.body.username;
            const passwordmd5 = req.body.passwordmd5;
            const resetcode = req.body.resetcode;
            const usersDao = new UsersDao(client);
            usersDao.usersInsert(firstname, lastname, email, username, passwordmd5, resetcode)
            .then(result => {
                return resp.status(200).send({message: result});
            })
            .catch(error => {
                console.log('usersInsert-error', error);
                return resp.status(500).send({message: error});
            })
        }
    }

    usersSelectId() {
        return function(req, resp) { 
            const id = req.params.id; 
            const usersDao = new UsersDao(client);
            usersDao.usersSelectId(id)
            .then(result => {
                return resp.status(200).send(result);
            })
            .catch(error => {
                console.log('usersSelectId-error', error);
                return resp.status(500).send({message: error});
            })
        }
    }
	
	usersSelectFullname() {
        return function(req, resp) { 
            const firstname = req.params.firstname;
            const lastname = req.params.lastname;
            const usersDao = new UsersDao(client);
            usersDao.usersSelectFullname(firstname, lastname)
            .then(result => {
                return resp.status(200).send({message: result});
            })
            .catch(error => {
                console.log('usersSelectFullname', error);
                return resp.status(500).send({message: error});
            })
        }
    }

	usersSelectUsername() {
        return function(req, resp) { 
            const username = req.params.username;
            const usersDao = new UsersDao(client);
            usersDao.usersSelectUsername(username)
            .then(result => {
                return resp.status(200).send({message: result});
            })
            .catch(error => {
                console.log('usersSelectUsername', error);
                return resp.status(500).send({message: error});
            })
        }
    }
	
	usersSelectEmail() {
        return function(req, resp) { 
            const email = req.params.email;
            const usersDao = new UsersDao(client);
            usersDao.usersSelectEmail(email)
            .then(result => {
                return resp.status(200).send({message: result});
            })
            .catch(error => {
                console.log('usersSelectEmail', error);
                return resp.status(500).send({message: error});
            })
        }
    }
	
    usersUpdate() {
        return function(req, resp) { 
            const id = req.body.id; 
            const firstname = req.body.firstname;
            const lastname = req.body.lastname;
            const email = req.body.email;
            const username = req.body.username;
            const passwordmd5 = req.body.passwordmd5;
            const resetcode = req.body.resetcode;
            const usersDao = new UsersDao(client);
            usersDao.usersUpdate(id, firstname, lastname, email, username, passwordmd5, resetcode)
            .then(result => {
                return resp.status(200).send({message: result});
            })
            .catch(error => {
                console.log('usersUpdate-error', error);
                return resp.status(500).send({message: error});
            })
        }
    }

    usersSelectAll() {
        return function(req, resp) { 
            const usersDao = new UsersDao(client);
            usersDao.usersSelectAll()
            .then(result => {
                return resp.status(200).send(result);
            })
            .catch(error => {
                console.log('usersSelectAll-error', error);
                return resp.status(500).send({message: error});
            })
        }
    }   
    
}    
module.exports = ProjectController;

