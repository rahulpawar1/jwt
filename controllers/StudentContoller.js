const Student = require('../models/Student'); //User is collection name
const jwt = require("jsonwebtoken");
const jwtPrivateKey = "rahulpawar7767832885vaibhav7028694956";


//save new Student and generate token
const reg = async (req, res) =>{
 
    let registerStudent = new Student({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            mobile: req.body.mobile,
    })

    //const token = await registerStudent.generateAuthToken();
   // console.log("the token part" + token);
    registerStudent.save()
    .then(result => {
        const token = jwt.sign({result},jwtPrivateKey)

            res.status(201).json({
               token
            })
        }
    )
    .catch(err => {
        res.json({
            message:'An error Occured!'
        })
    })
}

// update student info

const updateinfo = (req, res, next) => { //here middleware get token verify get data at request time

    const studentData = req.userData;
    const studenId = studentData.result._id; // got data in that select id of that user for updating purpose


    Student.findOne({_id : studenId}, function(err, foundObject){
        if(err){
            console.log(err);
            res.status(500).send();
        }else{
            if(!foundObject){
              res.status(404).send();
             }else{
                 //update each fields
                if(req.body.firstname){
                    foundObject.firstname = req.body.firstname;
                }

                if(req.body.lastname){
                    foundObject.lastname = req.body.lastname;
                }

                if(req.body.mobile){
                    foundObject.mobile = req.body.mobile;
                }
                
                //save updated object or data
                foundObject.save(function(err, updatedObject){
                    if(err){
                        console.log(err);
                        res.status(500).send();
                    }else{
                        res.send(updatedObject);
                    }
                });
             }
        }
    });
}

const studentlist = (req, res, next) => {

    const studentData = req.userData;
    const studenId = studentData.result._id;

    Student.find()
    .select("firstname lastname mobile")
    .exec()
    .then(data =>{
        res.status(200).json({
            message:"OK",
            results:data
        });
    })
    .catch(err =>{
        res.json(err);
    })

}

module.exports = {
    reg, updateinfo, studentlist
}