const express 	= require('express');
const router 	= express.Router();
const userModel = require.main.require('./models/userModel');



router.get('/', (req, res)=>{
	res.render('login');	
});

router.post('/', (req, res)=>{
	
	var user = {
		email: req.body.loginEmail,
		password: req.body.loginPassword

	};
	
	userModel.validate(user, function(status){
		if(status == true){
			req.session.email = user.email;	
			 userModel.getByEmail( user.email , function(result){
			 	console.log(result);
			 	req.session.id = result[0].userId;
				req.session.name = result[0].userName;	
			 	req.session.user_type = result[0].userType;
			 	req.session.address = result[0].userAddress;
			 	req.session.email = result[0].userEmail;
	
			 	res.cookie('Name', req.session.name);

				if(result[0].userType =="admin"){
			 		res.redirect('/admin');
			 	}
			 	else if(result[0].userType =="user" ){
					res.redirect('/user');
			 	}
			 }	);
        } else {
			console.log("Invalid Password/Email");
			res.send("Failed Login");
        }
			})	
	});
module.exports = router;