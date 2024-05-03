

const mongoose = require ('mongoose')


const UserSchema = new mongoose.Schema({
   name:{
    type: String,
    required: true,
   },

   age:{
    type: Number,
    required: true,
   },

   gender:{
    type: String,
    required: true,
   },

   phonenumber:{
    type: String,
    required: true,
   },

   email:{
    type: String,
    required: true,
   },

   location:{
    type: String,
    required: true,
   },

   doctor:{
    type: String,
    required: true,
   },

    details:{
     type: String,
     required: true,
   },


})


const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel;
