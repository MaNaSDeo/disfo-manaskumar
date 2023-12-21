const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    fullName: {
        type: String, 
        default: '', 
        maxLength: 50
    },
    username: {
        type: String, 
        unique: true, 
        required: true, 
        maxLength: 25
    },
    email: {
        type: String, 
        unique: true, 
        required: true
        // validate: {
        //     validator: function(v) {
        //         return /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:a-z0-9?\.)+a-z0-9?$/.test(v);
        //     },
        //     message: props => `${props.value} is not a valid email!`
        // }
    }
})

module.exports = userSchema;