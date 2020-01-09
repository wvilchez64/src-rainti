const uuid = require('uuid/v4');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const UsersDao = require(setup.paths.infra + 'UsersDao.js');
const client = require(setup.paths.config + 'database.js');
const crypto = require('crypto');

module.exports = (app) => {

    passport.use(new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password'
        },
        (email, password, done) => {
            const usersDao = new UsersDao(client);
            const pw = crypto.createHash('md5').update(password).digest("hex")
            usersDao.usersLogin(email)
                .then(user => {
                    if (!user || pw != user.passwordmd5)
                    {
                        return done(null, false, {
                            error: 'User name not found or incorrect password!'
                        });
                    }
                    return done(null, user);
                })
                .catch(error => {
                        return done(error, false, {
                        error: 'Internal error!'
                    });
                });
        }
    ));

    passport.serializeUser((user, done) => {
        const userSession = {
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            username: user.username,
            token: user.resetcode
        };
        done(null, userSession);
    });

    passport.deserializeUser((userSession, done) => {
        done(null, userSession);        
    });

    passport.deserializeUser((userSession, done) => {
        done(null, userSession);        
    });

    app.use(session({   
        secret: 'node rainti',
        genid: function(req) {
            return uuid();
        },
        resave: false,
        saveUninitialized: false
        //cookie: { secure: true } // this line
    }));

    app.use(passport.initialize());
    app.use(passport.session());

    app.use(function (req, resp, next) {
        req.passport = passport;
        next();
    });
};
