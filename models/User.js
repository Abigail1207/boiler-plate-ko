const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, /* removing the space in email */ 
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type:String,
        maxlength:50
    },
    role: {
        type:Number, /*1이 관리자 */
        default: 0
    },
    image: String,
    Token: {
        type: String
    },
    toketExp:{
        type: Number
    }

})

const User = mongoose.model('User', userSchema)

module.exports = {User} 