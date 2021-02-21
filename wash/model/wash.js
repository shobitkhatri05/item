const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
let user = new Schema({
    name:{
        type: String
    },

    last: {
        type: String
    },
    addresst:{
        type: String
    },
    
    mobile: {
        type: String
    },
    email: {
        type: String
    },
    city:{
        type: String
    }
});
module.exports = mongoose.model('User', user);