const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/Student',{useNewUrlParser:true, useUnifiedTopology:true})
const db = mongoose.connection

db.on('error',(err) => {
	console.log(err)
})

db.once('open',() => {
	console.log('Database Connection Established')
})