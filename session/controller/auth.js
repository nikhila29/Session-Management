function login(req, res) {
    const {email,password} = req;
    // if(!email || !password){
    //    return res.status(422).json({error:"please add email or password"})
    // }

    //perform payload validation
    //In prod, always use a validation  library like joi
    //for this , we only use a basic validation
    
    // check if the credentials are correct
    // ...

    // assume that credentials are correct
    req.session.clientId = 'abcsecure123';
    req.session.myNum = 53453454;

    res.json('you are now logged in');
}

module.exports = {
    login
};