const express = require('express');
const authenticate = require('../middleware/authenticate');
const authController = require('../controller/auth');
const profileController = require('../controller/profile');

const router = express.Router();

// 3. create an unprotected login endpoint
router.post('/login',authController.login);

//All routes that come after this middleware are protected
//and can only be accessed if the user is logged in

router.use(authenticate)

// 5. plug in all routes that the user can only access if logged in
router.get('/profile', [profileController.profile] )

module.exports = router;