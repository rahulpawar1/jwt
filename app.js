
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const studentRoute = require('../jwt/routes/studentRoute')
require('./db/dbconfig')


const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


const jwt = require("jsonwebtoken");

// //token creation
// const createToken = async() =>{
//     const token = await jwt.sign({_id:"60646448d21689194a2e2d51"},"rahulpawar7767832885vaibhav7028694956");
//     console.log(token);

// //user verify
// const userVer = await jwt.verify(token, "rahulpawar7767832885vaibhav7028694956");
// console.log(userVer)   

// }

//createToken();

app.use('/api/student',studentRoute)
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})