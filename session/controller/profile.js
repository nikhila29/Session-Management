function profile(req, res){
    res.json(req.session);
};
module.exports = {
    profile
}

// 5. plug in all routes that the user can only access if logged in