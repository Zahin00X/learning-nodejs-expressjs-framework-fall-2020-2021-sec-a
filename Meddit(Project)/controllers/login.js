const express 	= require('express');
const router 	= express.Router();
const userModel = require.main.require('./models/userModel');



router.get('/', (req, res)=>{
	res.render('login');	
});
router.post('/', (req, res)=>{
	
	var user = {
		email: req.body.email,
		password: req.body.password

	};
	userModel.validate(user, function(status){
		if(status == true){
			req.session.email = user.email;	
			 userModel.getByEmail(user.email, function(result){
			 	req.session.id = result[0].user_id;
				req.session.name = result[0].name;	
			 	req.session.user_type = result[0].user_type;
			 	req.session.phone_number = result[0].phone_number;
			 	req.session.address = result[0].address;
			 	req.session.blood_group = result[0].blood_group;
			 	res.cookie('blood_grp', req.session.blood_group);

				if(result[0].user_type =="admin"){
			 		res.redirect('/admin');
			 	}
			 	else if(result[0].user_type=="user" || result[0].user_type=="doctor" || result[0].user_type=="patient" ){
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