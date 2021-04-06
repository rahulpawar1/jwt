var jwt = require('jsonwebtoken');
const jwtPrivateKey = "rahulpawar7767832885vaibhav7028694956";

module.exports = (req,res,next) => {
	
try{
	
	const token = req.headers.authorization.split(" ")[1];
	console.log(token);
	const decode = jwt.verify(token, jwtPrivateKey);
    //console.log(decode);
	req.userData = decode; //req.userData contains userDetails in this token
    //var decodedValue = JSON.parse(window.atob(base64Url));
	next();

}catch(error){
	
	res.status(401).json({
		error:"Invalid Token"
	});
 }

}