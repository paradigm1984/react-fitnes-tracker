// usersRouter.js

const router = require("express").Router();
let User = require("../models/user.model");

// returns all users
router.route('/').get((req, es) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('error:  ', err));
});

//add a new user to db
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const newUser = new User({
        username,
        password
    });
    newUser.save()
        .then(() => res.json('User Added!!'))
        .catch(err => res.status(400).json('Error:  ', err));
});

// delete user based on ID
router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json("user deleted"))
        .catch(err => res.status(400).json('error:  ', err));
});

// update user based on ID
router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
        .then(user => {
            user.username = req.body.username;
            user.password = req.body.password;
            user.save()
                .then(() => res.json("user updated!"))
                .catch(err => res.status(400).json('error:  ', err))
        })
        .catch(err => res.status(400).json('error:  ', err));
});

module.exports = router;