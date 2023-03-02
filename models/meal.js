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
    }
    },
    {
        timestamps: true
});

// const mealSchema = new Schema({
//     name: {
//       type: String,
//       required: true,
//       unique: true
//     },
//   }, {
//     timestamps: true
//   });

module.exports = mongoose.model('Meal', mealSchema);