const router= require('express').Router();
let user= require('../models/user.model');

router.route('/').get((req,res) => {
    user.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json({
        error: "Cannot get user list"
    }));
});

router.route('/add').post((req, res) => {
    const userName= req.body.userName;
    const newUser= new user({userName})
    newUser.save()
    .then(() => res.json("User added"))
    .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;