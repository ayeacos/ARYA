const registerValidator = require('../middlewares/validations/registerValidator');
const loginValidator = require('../middlewares/validations/loginValidator');
const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');

const authMiddleware = require('../middlewares/authMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./public/images/users');
    },
    filename: function(req,file,cb){
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });

router.get('/login',
    guestMiddleware,
    usersController.login
);

router.post('/login',
    loginValidator,
    usersController.processLogin
);

router.get('/register',
    guestMiddleware,
    usersController.register
);

router.post('/register',
    upload.single('image'),
    registerValidator,
    usersController.processRegister
);

router.get('/profile',
    authMiddleware,
    usersController.profile
);

router.get('/profile/edit',
    authMiddleware,
    usersController.editProfile
);

router.post('/profile/edit',
    usersController.updateProfile
);

router.get('/logout',
    usersController.logout
);

module.exports = router;