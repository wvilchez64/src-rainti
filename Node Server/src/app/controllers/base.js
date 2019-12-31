class BaseController {
  
    logout() {
        return function(req, resp) {
            req.logout();
            resp.clearCookie('connect.sid');  
            req.user = null;
            req.session.destroy();   
            return resp.status(200).send({message : "logout"});
         
        };
    }

    login() {
        return function(req, resp, next) {
            const passport = req.passport;
            passport.authenticate('local', (error, user, info) => {
                if (info) {
                    resp.clearCookie('connect.sid');
                    return resp.status(400).send({error : info.error});
                }
                if (error) {
                    resp.clearCookie('connect.sid');
                    return resp.status(400).send({error});
                }
                req.login(user, (error) => {
                    if (error) {
                        resp.clearCookie('connect.sid');
                        return resp.status(400).send({error});
                    }
                    return resp.status(200).send({msg: 'Ok'});
                });
            })(req, resp, next);
        };
    }
}

module.exports = BaseController;