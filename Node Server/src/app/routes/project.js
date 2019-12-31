const ProjectController = require(setup.paths.controllers + 'project.js');
const projectController = new ProjectController();

module.exports = (app) => { 
    const routes = require(setup.paths.routes + 'routesMap.js');
    const projectRoutes = routes.project;
    app.use(projectRoutes.authenticated, projectController.authenticated());
    app.get(projectRoutes.data_codeInsert, projectController.data_codeInsert());
    app.get(projectRoutes.data_codeSelectId, projectController.data_codeSelectId());
    app.get(projectRoutes.data_codeUpdate, projectController.data_codeUpdate());
    app.get(projectRoutes.data_codeSelectAll, projectController.data_codeSelectAll());
};

