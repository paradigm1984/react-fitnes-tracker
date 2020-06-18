// usersRouter.js

const router = require("express").Router();
let User = require("../models/user.model");

//get request that returns all users
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400));
});

// add new user to db
router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({ username });

    newUser.save()
        .then(() => res.json('User added'))
        .catch(err => res.status(400));
});

module.exports = router;