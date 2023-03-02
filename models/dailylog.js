const mongoose = require('mongoose');
// Shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

// const mealsSchema = new Schema ({
//     name: {
//         type: String,
//         required: true
//     },
//     food: {
//         type: String,
//         required: true
//     },
//     water: {
//         type: Number,
//         required: true,
//     }
//     },
//     {
//         timestamps: true
// });
const diarySchema = new Schema ({

    weight: {
        type: Number,
        required: true,
        min: 0,
        max: 999
    },
    date: {
        type: String,
        default: function() {
            const a = new Date().getFullYear().toString();
            let b = new Date().getMonth()+1;
            let c = new Date().getDate();
            if (b < 10) {
                b = '0'+b.toString();
            }
            if (c < 10) {
                c = '0'+c.toString();
            }
            return a+'-'+b+'-'+c;

        },
        required: true
    },
    exercise: {
        type: String,
        required: true
    },
    food: [{
        type: Schema.Types.ObjectId,
        ref:'Meal'
    }] 
});



 module.exports = mongoose.model('Dailylog', diarySchema);


