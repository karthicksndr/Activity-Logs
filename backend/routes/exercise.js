const router= require('express').Router();
let exercise= require('../models/exercise.model');

router.route('/').get((req, res) => {
    exercise.find()
    .then( exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/add').post((req,res) => {
    const userName= req.body.userName;
    const description = req.body.description;
    const duration = req.body.duration;
    const date= req.body.date;

    const newExercise= new exercise({
        userName,
        description,
        duration,
        date
    });

    newExercise.save()
    .then( ()=> res.json("Exercise added succesfully"))
    .catch(err=> res.status(400).json('Error : '+ err));

});

module.exports = router;