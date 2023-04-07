/* eslint-disable no-undef */
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const UserModel = require('./models/user');

const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;


passport.use(
    new JWTstrategy(
        {
            secretOrKey: process.env.JWT_SECRET,
            jwtFromRequest:ExtractJWT.fromAuthHeaderAsBearerToken() 
        },
        async (token, done) => {
            try {
            const id = token.user._id
            const user = await UserModel.findById(id);

            if (!user) {
                return done(null, false, { message: 'User not found' });
            }

            return done(null, user, { message: 'Success' });

            } catch (error) {
                done(error);
            }
        }   
    )
);


passport.use(
    'signup',
    new localStrategy(
        {
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true
        },
        async (req,username, password, done) => {
            let info = req.body
            try {
                const user = await UserModel.create({first_name: info.first_name, last_name: info.last_name, username, password });

                return done(null, user, { message: 'User created successfully'});
            } catch (error) {
                console.log(error)
                done(error);
            }
        }
    )
);

passport.use(
    'login',
    new localStrategy(
        {
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true
        },
        async (req, username, password, done) => {
           
            try {
                const user = await UserModel.findOne({ username });
               

                if (!user) {
                    return done(null, false, { message: 'User not found' });
                }
                
                const validate = await user.isValidPassword(password);
               
                if (!validate) {
                    return done(null, false, { message: 'Wrong Password' });
                }

                return done(null, user, { message: 'Logged in Successfully' });
            } catch (error) {
                return done(error);
            }
        }
    )
);