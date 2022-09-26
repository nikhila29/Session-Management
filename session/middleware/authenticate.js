function authenticate(req, res, next) {
    if (!req.session || !req.session.clientId) {
        const err = new Error('You are not authenticated');
        err.statusCode = 401;
        next(err);
    }
    next();
}
// 4. plug in another middleware that will check if the user is authenticated or not
// all requests that are plugged in after this middleware will only be accessible if the user is logged in

module.exports = authenticate;