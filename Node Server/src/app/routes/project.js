const ProjectController = require(setup.paths.controllers + 'project.js');
const projectController = new ProjectController();
const routes = require(setup.paths.routes + 'routesMap.js');
const projectRoutes = routes.project;

module.exports = (app) => { 

/**** authenticated ****/    
    app.use(projectRoutes.authenticated, projectController.authenticated());
/**** states ****/    
    app.get(projectRoutes.statesSelectId, projectController.statesSelectId());
    app.get(projectRoutes.statesSelectDescp, projectController.statesSelectDescp());
    app.get(projectRoutes.statesSelectAll, projectController.statesSelectAll());  
/**** data_code ****/    
    app.post(projectRoutes.data_codeInsert, projectController.data_codeInsert());
    app.get(projectRoutes.data_codeSelectId, projectController.data_codeSelectId());
    app.get(projectRoutes.data_codeSelectDescp, projectController.data_codeSelectDescp());
    app.post(projectRoutes.data_codeUpdate, projectController.data_codeUpdate());
    app.get(projectRoutes.data_codeSelectAll, projectController.data_codeSelectAll());
/**** entity_type ****/
    app.post(projectRoutes.entity_typeInsert, projectController.entity_typeInsert());
    app.get(projectRoutes.entity_typeSelectId, projectController.entity_typeSelectId());
    app.get(projectRoutes.entity_typeSelectDescp, projectController.entity_typeSelectDescp());
    app.post(projectRoutes.entity_typeUpdate, projectController.entity_typeUpdate());
    app.get(projectRoutes.entity_typeSelectAll, projectController.entity_typeSelectAll());   
/**** entities ****/
    app.post(projectRoutes.entitiesInsert, projectController.entitiesInsert());
    app.get(projectRoutes.entitiesSelectId, projectController.entitiesSelectId());
    app.get(projectRoutes.entitiesSelectDescp, projectController.entitiesSelectDescp());
    app.post(projectRoutes.entitiesUpdate, projectController.entitiesUpdate());
    app.get(projectRoutes.entitiesSelectAll, projectController.entitiesSelectAll()); 
/**** data_detran ****/    
    app.post(projectRoutes.data_detranInsert, projectController.data_detranInsert());
    app.get(projectRoutes.data_detranSelectId, projectController.data_detranSelectId());
    app.get(projectRoutes.data_detranSelectDescp, projectController.data_detranSelectDescp());
    app.post(projectRoutes.data_detranUpdate, projectController.data_detranUpdate());
    app.get(projectRoutes.data_detranSelectAll, projectController.data_detranSelectAll());
/**** data_creditor ****/    
    app.post(projectRoutes.data_creditorInsert, projectController.data_creditorInsert());
    app.get(projectRoutes.data_creditorSelectId, projectController.data_creditorSelectId());
    app.get(projectRoutes.data_creditorSelectDescp, projectController.data_creditorSelectDescp());
    app.post(projectRoutes.data_creditorUpdate, projectController.data_creditorUpdate());
    app.get(projectRoutes.data_creditorSelectAll, projectController.data_creditorSelectAll());  
/**** data_contract ****/    
    app.post(projectRoutes.data_contractInsert, projectController.data_contractInsert());
    app.get(projectRoutes.data_contractSelectId, projectController.data_contractSelectId());
    app.get(projectRoutes.data_contractSelectDescp, projectController.data_contractSelectDescp());
    app.post(projectRoutes.data_contractUpdate, projectController.data_contractUpdate());
    app.get(projectRoutes.data_contractSelectAll, projectController.data_contractSelectAll()); 
/**** data_contact ****/    
    app.post(projectRoutes.data_contactInsert, projectController.data_contactInsert());
    app.get(projectRoutes.data_contactSelectId, projectController.data_contactSelectId());
    app.get(projectRoutes.data_contactSelectDescp, projectController.data_contactSelectDescp());
    app.post(projectRoutes.data_contactUpdate, projectController.data_contactUpdate());
    app.get(projectRoutes.data_contactSelectAll, projectController.data_contactSelectAll());  
/**** usersout ****/
    app.post(projectRoutes.usersoutInsert, projectController.usersoutInsert()); 
    app.get(projectRoutes.usersoutSelectId, projectController.usersoutSelectId()); 
    app.get(projectRoutes.usersoutSelectEmail, projectController.usersoutSelectEmail()); 
    app.get(projectRoutes.usersoutSelectAll, projectController.usersoutSelectAll());              
    app.post(projectRoutes.usersoutDelete, projectController.usersoutDelete()); 
/**** users ****/
    app.post(projectRoutes.usersInsert, projectController.usersInsert()); 
    app.get(projectRoutes.usersSelectId, projectController.usersSelectId()); 
    app.get(projectRoutes.usersSelectFullname, projectController.usersSelectFullname()); 
    app.get(projectRoutes.usersSelectUsername, projectController.usersSelectUsername()); 
    app.get(projectRoutes.usersSelectEmail, projectController.usersSelectEmail()); 
    app.post(projectRoutes.usersUpdate, projectController.usersUpdate()); 
    app.get(projectRoutes.usersSelectAll, projectController.usersSelectAll());          
};

