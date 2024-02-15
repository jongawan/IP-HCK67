const express = require('express');
const router = express.Router();
const Controller = require("../controllers");
// const AuthController = require('../controllers/AuthController');
//const {verifyToken} = require('../helpers/jwt')
//const {User} = require('../models/');
// const authentication = require('../middlewares/authentication');
// const authorizationAdminOnly = require('../middlewares/authorization');
// const errHandler = require('../middlewares/errHandler');



router.get('/', Controller.getHello)
// router.post('/add-user', AuthController.addUser)
// router.post('/login', AuthController.login)

//router.use(authentication) //use this or add manually

// router.get('/articles',Controller.getAllArticles)
// router.get('/articles/:id', authentication, Controller.getArticleById)
// router.post('/articles/', authentication, Controller.createArticle)
// router.delete('/articles/:id', authentication, authorizationAdminOnly, Controller.deleteArticleById)
// router.put('/articles/:id', authentication, Controller.updateArticleById)




//router.use(errHandler)
//console.log(process.env)

module.exports = router