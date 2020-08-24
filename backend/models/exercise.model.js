const mongoose = require('mongoose');
const Schema= mongoose.Schema;

const exerciseSchema= new Schema({
    userName: {
        type: String,
        require: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        require: true
    },
    date: {
        type: Date,
        required: true
    }
},
{
    timestamps: true
}
);

module.exports= mongoose.model('Exercise', exerciseSchema);