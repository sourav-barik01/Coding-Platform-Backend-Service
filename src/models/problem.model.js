const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title Cannot be Empty']
    }, 
    description: {
        type: String,
        required: [true, 'Description Cannot be Empty']
    },
    difficulty: {
        type: String,
        required: [true, 'Description Cannot be Empty'],
        enum: ['Easy', 'Medium', 'Hard'],
        default: 'Easy'
    },
    testCases: [                    /* Arr Of Obj = [{input: '5', output: '10'}, {input: '7', output: '12'}] */
        {
            input: {
                type: String,
                required: true
            },
            output: {
                type: String,
                required: true
            }
        }
    ],
    editorial: {
        type: String
    }
});

const Problem = mongoose.model('Problem', problemSchema);
module.exports = Problem;