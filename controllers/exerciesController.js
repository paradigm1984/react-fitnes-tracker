// exerciseControllers.js

const Exercise = require('../models/exercise.model');

module.exports = {
// TO DISPLAY ALL EXERCISES 
 findAll: function (req, res) {
  Exercise.find()
   .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error:  ' + err));
 },
 findById: function (req, res) {
  Exercise.findById(req.params.id)
   .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error:  ' + err));
  },
 // TO CREATE A NEW EXERCISE 
 create: function (req, res) {
  // const username = req.body.username;
  // const description = req.body.description;
  // const duration = Number(req.body.duration);
  // const date = Date.parse(req.body.date);
  // const newExercise = new Exercise({
  //     username,
  //     description,
  //     duration,
  //     date,
  // });
  // newExercise.save()
  //  .then(() => res.json('Exercise created'))
  //   .catch(err => res.status(400).json('Error:  ' + err));
   
  // === HOW IT WAS === //
  Exercise.create(req.body);
  },
 // TO EDIT AN EXISTING EXERCISE 
  update: function (req, res) {
    // Exercise.findById(req.params.id)
    // .then(exercise => {
    //     exercise.username = req.body.username;
    //     exercise.description = req.body.description;
    //     exercise.duration = Number(req.body.duration);
    //     exercise.date = Date.parse(req.body.date);
    //     exercise.save()
    //     .then(() => res.json("exercise updated!"))
    //     .catch(err => res.status(400).json('error:  ', err))
    // })
    // .catch(err => res.status(400).json('error:  ', err));

  // === HOW IT WAS === //
  Exercise.findOneAndUpdate({ _id: req.params.id }, req.body)
   .then(exercise => res.json(exercise))
    .catch(err => res.status(422).json('Error:  ' + err));
  },
 // TO REMOVE AN EXISTING EXERCISE 
  remove: function (req, res) {
  // Exercise.findByIdAndDelete(req.params.id)
  //   .then(() => res.json("exercise deleted"))
  //   .catch(err => res.status(400).json('error:  ', err));

  // === HOW IT WAS === //
  Exercise.findById({ _id: req.params.id })
   .then(exercise => exercise.remove())
    .then(allExercises => res.json(allExercises))
    .catch(err => res.status(422).json('Error:  ' + err));
 }

};