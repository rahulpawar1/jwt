const mongoose = require('mongoose')
//const jwt = require("jsonwebtoken")
const studentSchema = new mongoose.Schema({

    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    mobile:{
        type:Number
    },
    // tokens:[{
    //     token:{
    //         type:String,
    //         require:true
    //     }
    // }]

});


// studentSchema.methods.generateAuthToken = async function(){

//     try{
//         const token = jwt.sign({_id:this._id.toString()}, "rahulpawar7767832885vaibhav7028694956")
//         this.tokens = this.tokens.concat({token:token}) //set generated token to this user ducument
//         await this.save() // save this token into db
//         console.log(token);
//         return token;
//     }catch(error){
//         res.send("the error part"+ error)
//         console.log("the error part"+ error);
//     }
// }
const Student = mongoose.model('Student',studentSchema)

module.exports = Student