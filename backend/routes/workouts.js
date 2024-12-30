const express = require('express')
const {
    getWorkouts,
    getWorkout,
    createWorkout, 
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')
const requireAth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all workout routes
router.use(requireAth)

// GET all workouts
router.get('/', getWorkouts)

// GET a single workout
router.get('/:id', getWorkout)

// POST a new workout
router.post('/', createWorkout)

// DELETE a workout
router.delete('/:id', deleteWorkout)

// Update a workout
router.patch('/:id', updateWorkout)

module.exports = router