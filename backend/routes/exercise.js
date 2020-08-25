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

router.route('/:id').get((req, res) => {
    exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err=> res.status(400).json('Error : '+err));
});

router.route('/:id').delete((req, res) => {
    exercise.findByIdAndDelete(req.params.id)
    .then(()=> res.json("Exercise deleted successfully!"))
    .catch(err=> res.status(400).json('Error: '+ err));
});

router.route('/update/:id').put((req, res) => {
    exercise.findByIdAndUpdate(req.params.id)
    .then(exercise => {
        exercise.userName = req.body.userName,
        exercise.description= req.body.description,
        exercise.duration= Number(req.body.duration),
        exercise.date= Date.parse(req.body.date)

        exercise.save()
        .then(() => res.json(exercise))
        .catch(err => res.status(400).json('Error : '+ err))
    })
    .catch(err => req.status(400).json('Error: '+ err))
});

module.exports = router;