const express = require('express');
const UserController = require('../../controller/user/UserController');
const router = express.Router();

router.post('/LoginOrSignup', UserController.LoginOrSignupFun);
router.post('/ValidateOTP', UserController.VerifyOTP);
router.patch('/UpdateProfile',UserController.UpdateProfile);
router.get('/profilebyid',UserController.GetProfileByID)

module.exports = router;
