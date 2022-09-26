const session = require('express-session');
const connectRedis = require('connect-redis');
const redisClient = require('../db/redis');

//where we have to store sessions---redis
//  I want to connect to redis client ,connect to my localhost

// we need to plug some session middlewares into our server
// 2. configure session middleware

const RedisStore = connectRedis(session);

module.exports = session({
    store: new RedisStore({client: redisClient}),
    secret: 'mySecret',  // secret is secret , someone cant guess this
    saveUninitialized: false,   //we are not adding anything to the session means session should be anyway empty
    resave: false,
    name: 'SessionID',
    cookie: {
        secure: false, // if true: only transmit cookie over https
        httpOnly: true, // if true: prevents client side JS from reading the cookie
        maxAge: 1000 * 60 * 30, // session max age in milliseconds
        sameSite: 'lax' // make sure sameSite is not none
    }
})