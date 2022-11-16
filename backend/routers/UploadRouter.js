const router = require('express').Router()
import uploadImage from "../middleware/UploadImage";
import uploadCtrl from "../controllers/UploadCtrl";
import auth from "../middleware/Auth";

router.post('/upload_avatar', uploadImage, auth, uploadCtrl.uploadAvatar);

module.exports = router;