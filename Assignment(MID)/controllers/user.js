const express 	= require('express');
const router 	= express.Router();
const {body, validationResult} 		= require('express-validator');
const userModel		= require.main.require('./models/userModel');

router.get('/', (req, res) => {
	if (req.session.email != null) {
		
		res.render('user/home', {name: req.session.name , id: req.session.id , user_type: req.session.user_type , phone_number: req.session.phone_number , address: req.session.address , email : req.session.email , blood_group: req.session.blood_group });

	} else {
		res.redirect('/login');
	}
});

router.get('/profile', (req, res) => {
	if (req.session.email != null) {
		
		res.render('user/profile', {name: req.session.name , id: req.session.id , user_type: req.session.user_type , phone_number: req.session.phone_number , address: req.session.address , email : req.session.email , blood_group: req.session.blood_group });

	} else {
		res.redirect('/login');
	}
});

router.get('/aboutus', (req, res) => {
	if (req.session.email != null) {
		
		res.render('user/aboutus', {name: req.session.name , id: req.session.id , user_type: req.session.user_type , phone_number: req.session.phone_number , address: req.session.address , email : req.session.email , blood_group: req.session.blood_group });

	} else {
		res.redirect('/login');
	}
});



router.get('/thread', (req, res) => {
	if (req.session.email != null) {
		
		res.render('user/thread', {name: req.session.name , id: req.session.id , user_type: req.session.user_type , phone_number: req.session.phone_number , address: req.session.address , email : req.session.email , blood_group: req.session.blood_group });

	} else {
		res.redirect('/login');
	}
}); 


		
module.exports = router;