const ProjectController = require(setup.paths.controllers + 'project.js');
const projectController = new ProjectController();

module.exports = (app) => { 
    const routes = require(setup.paths.routes + 'routesMap.js');
    const projectRoutes = routes.project;

/**** authenticated ****/    
    app.use(projectRoutes.authenticated, projectController.authenticated());
/**** data_code ****/    
    app.post(projectRoutes.data_codeInsert, projectController.data_codeInsert());
    app.get(projectRoutes.data_codeSelectId, projectController.data_codeSelectId());
    app.get(projectRoutes.data_codeSelectDescription, projectController.data_codeSelectDescription());
    app.post(projectRoutes.data_codeUpdate, projectController.data_codeUpdate());
    app.get(projectRoutes.data_codeSelectAll, projectController.data_codeSelectAll());
/**** entity_type ****/
    app.post(projectRoutes.entity_typeInsert, projectController.entity_typeInsert());
    app.get(projectRoutes.entity_typeSelectId, projectController.entity_typeSelectId());
    app.get(projectRoutes.entity_typeSelectDescription, projectController.entity_typeSelectDescription());
    app.post(projectRoutes.entity_typeUpdate, projectController.entity_typeUpdate());
    app.get(projectRoutes.entity_typeSelectAll, projectController.entity_typeSelectAll());   
/**** entities ****/
    app.post(projectRoutes.entitiesInsert, projectController.entitiesInsert());
    app.get(projectRoutes.entitiesSelectId, projectController.entitiesSelectId());
    app.get(projectRoutes.entitiesSelectDescription, projectController.entitiesSelectDescription());
    app.post(projectRoutes.entitiesUpdate, projectController.entitiesUpdate());
    app.get(projectRoutes.entitiesSelectAll, projectController.entitiesSelectAll()); 
/**** data_detran ****/    
    app.post(projectRoutes.data_detranInsert, projectController.data_detranInsert());
    app.get(projectRoutes.data_detranSelectId, projectController.data_detranSelectId());
    app.get(projectRoutes.data_detranSelectDescription, projectController.data_detranSelectDescription());
    app.post(projectRoutes.data_detranUpdate, projectController.data_detranUpdate());
    app.get(projectRoutes.data_detranSelectAll, projectController.data_detranSelectAll());
};

