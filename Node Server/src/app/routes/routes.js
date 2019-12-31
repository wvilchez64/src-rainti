const projectRoutes = require(setup.paths.routes + 'project.js');
const baseRoutes = require(setup.paths.routes + 'base.js');

module.exports = (app) => {
     projectRoutes(app);
     baseRoutes(app);
};   


