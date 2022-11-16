const router = require('express').Router()
import userCtrl from "../controllers/UserCtrl";
import auth from "../middleware/Auth";
import authAdmin from "../middleware/AuthAdmin";

router.post('/register', userCtrl.register);

router.post('/activation', userCtrl.activateEmail);

router.post('/login', userCtrl.login);

router.post('/refresh_token', userCtrl.getAccessToken);

router.post('/forgot', userCtrl.forgotPassword);

router.post('/reset', auth, userCtrl.resetPassword);

router.get('/infor', auth, userCtrl.getUserInfor);

router.get('/all_infor', auth,authAdmin, userCtrl.getUsersAllInfor);

router.get('/logout', userCtrl.logout);

router.patch('/update', auth, userCtrl.updateUser);

router.patch('/update_role/:id', auth, authAdmin, userCtrl.updateUsersRole);

router.delete('/delete/:id', auth, authAdmin, userCtrl.deleteUser);

//Social Login
router.post('/google_login', userCtrl.googleLogin);

module.exports = router