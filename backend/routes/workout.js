const express = require('express');
const { 
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout 
} = require('../controllers/workoutController');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

router.use(requireAuth);

//GET all work out
router.get('/', getWorkouts)

//get single workout
router.get('/:id', getWorkout)

//post a new workout
router.post('/', createWorkout)

//delete a new workout
router.delete('/:id', deleteWorkout)

//update a new workout
router.patch('/:id', updateWorkout)

module.exports = router