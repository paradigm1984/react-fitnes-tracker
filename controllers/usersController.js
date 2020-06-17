// usersControllers.js

const User = require('../models/user.model');

module.exports = {
// TO DISPLAY ALL USERS 
 findAll: function (req, res) {
 User.find()
  .then(users => res.json(users))
   .catch(err => res.status(400).json('error:  ', err));
  },
  // TO CREATE A NEW USER 
  create: function (req, res) {
   
  const username = req.body.username;
  const newUser = new User({username});

  newUser.save()
  .then(() => res.json('User Added!!'))
  .catch(err => res.status(400).json('Error:  ', err));

  // === HOW IT WAS === //
  // User.create(req.body)
  //  .then(newUser => res.json(newUser))
  //  .catch(err => res.status(422).json(err));
  },
  // NO PLACE TO EDIT THIS INFO ON THE FRONT END YET
//  update: function (req, res) {
//   User.findOneAndUpdate({ _id: req.params.id }, req.body)
//    .then(user => res.json(user))
//    .catch(err => res.status(422).json(err));
//  },
//  remove: function (req, res) {
//   User.findById({ _id: req.params.id })
//    .then(user => user.remove())
//    .then(allUsers => res.json(allUsers))
//    .catch(err => res.status(422).json(err));
//  }

};