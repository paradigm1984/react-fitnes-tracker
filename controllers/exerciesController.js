// exerciseControllers.js

const Exercise = require('../models/exercise.model');

// Defining all methods and business logic for routes

module.exports = {

 findAll: function (req, res) {
  Exercise.find(req.query)
   .then(exercises => res.json(exercises))
   .catch(err => res.status(422).json(err));
 },
 findById: function (req, res) {
  Exercise.findById(req.params.id)
   .then(exercise => res.json(exercise))
   .catch(err => res.status(422).json(err));
 },
 create: function (req, res) {
  Exercise.create(req.body)
   .then(newExercise => res.json(newExercise))
   .catch(err => res.status(422).json(err));
 },
 update: function (req, res) {
  Exercise.findOneAndUpdate({ _id: req.params.id }, req.body)
   .then(exercise => res.json(exercise))
   .catch(err => res.status(422).json(err));
 },
 remove: function (req, res) {
  Exercise.findById({ _id: req.params.id })
   .then(exercise => exercise.remove())
   .then(allExercises => res.json(allExercises))
   .catch(err => res.status(422).json(err));
 }

};