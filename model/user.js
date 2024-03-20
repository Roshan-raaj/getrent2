const { required } = require("joi");
const mongoose= require("mongoose");
const schema=mongoose.Schema;
const passportLocalMongoose= require("passport-local-mongoose");

const userSchema= new schema({
    email:{
        type:String ,
        required:true,
    }
});

userSchema.plugin(passportLocalMongoose);

const user= mongoose.model("user", userSchema);
module.exports = user;