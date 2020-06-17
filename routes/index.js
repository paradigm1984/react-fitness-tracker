// routes/index.js

const router = require('express').Router();

const exercisesRoutes = require('./exercisesRouter');
const usersRoutes = require('./usersRouter');


app.use('/exercises/', exercisesRoutes);
app.use('/users/', usersRoutes);

module.exports = router;