// usersRouter.js

const router = require('express').Router();
const usersController = require('controllers/usersController');

router
    .route('/')
    .get(usersController.findAll)
    .post(usersController.create);

router
    .route('/:id')
    .get(usersController.findById)
    .put(usersController.update)
    .delete(usersController.remove);

module.exports = router;






























// const router = require("express").Router();
// let User = require("../models/user.model");

// router.route('/').get((req, res) =>{
//     User.find()
//     .then(users => res.json(users))
//     .catch(err => res.status(400).json('error:  ', err));
// });

// router.route('/add').post((req, res) =>{
//     const username = req.body.username;

//     const newUser = new User({username});

//     newUser.save()
//     .then(() => res.json('User Added!!'))
//     .catch(err => res.status(400).json('Error:  ', err));
// });

// module.exports = router;