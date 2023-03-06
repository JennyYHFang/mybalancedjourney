const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mealSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    food: {
        type: String,
        required: true
    },
    water: {
        type: Number,
        default:0,
    },
    dailylogid: {
        type: String,
    }
    },
    {
        timestamps: true
});

module.exports = mongoose.model('Meal', mealSchema);