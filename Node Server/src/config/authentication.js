const uuid = require('uuid/v4');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const UserDao = require(setup.paths.infra + 'UserDao.js');
const client = require(setup.paths.config + 'database.js');
const crypto = require('crypto');

module.exports = (app) => {

    passport.use(new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password'
        },
        (email, password, done) => {
            const userDao = new UserDao(client);
            const pw = crypto.createHash('md5').update(password).digest("hex")
            userDao.userLogin(email)
                .then(user => {
                    if (!user || pw != user[0].passwordmd5)
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
            name: user.fullName,
            email: user.email
        };
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
    }));

    app.use(passport.initialize());
    app.use(passport.session());

    app.use(function (req, resp, next) {
        req.passport = passport;
        next();
    });
};
