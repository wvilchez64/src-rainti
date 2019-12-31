const BaseController = require(setup.paths.controllers + 'base.js');
const baseController = new BaseController();

module.exports = (app) => {
    const routes = require(setup.paths.routes + 'routesMap.js');
    const baseRoutes = routes.base;
    app.get(baseRoutes.logout, baseController.logout());
    app.post(baseRoutes.login, baseController.login());
};