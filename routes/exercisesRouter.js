// exercisesRouter.js

const router = require("express").Router();
let Exercise = require("../models/exercise.model");

// returns all exercises
router.route('/').get((req, res) => {
    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('error:  ', err));
});

// add a new exercise to db
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);
    const newExercise = new Exercise({
        username,
        description,
        duration,
        date,
    });
    newExercise.save()
        .then(() => res.json('Exercise Added!!'))
        .catch(err => res.status(400).json('Error:  ' + err));
});

// get exercise based on the ID 
router.route('/:id').get((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json('error:  ', err));
});

// delete exercise based on ID
router.route('/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
        .then(() => res.json("exercise deleted"))
        .catch(err => res.status(400).json('error:  ', err));
});

// update exercise based on ID
router.route('/update/:id').post((req, res) => {
    Exercise.findById(req.params.id)
        .then(Exercise => {
            Exercise.username = req.body.username;
            Exercise.description = req.body.description;
            Exercise.duration = Number(req.body.duration);
            Exercise.date = Date.parse(req.body.date);

            Exercise.save()
                .then(() => res.json("exercise updated!"))
                .catch(err => res.status(400).json('error:  ', err))
        })
        .catch(err => res.status(400).json('error:  ', err));
});

module.exports = router;