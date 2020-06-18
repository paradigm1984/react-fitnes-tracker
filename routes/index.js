// routes/index.js

const router = require('express').Router();

const exercisesRoutes = require('./exercisesRouter');
const usersRoutes = require('./usersRouter');


router.use('/exercises', exercisesRoutes);
router.use('/users', usersRoutes);

module.exports = router;