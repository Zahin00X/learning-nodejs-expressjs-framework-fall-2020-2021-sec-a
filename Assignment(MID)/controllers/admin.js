const express 	= require('express');
const router 	= express.Router();
const {body, validationResult} 		= require('express-validator');
const userModel		= require.main.require('./models/userModel');
const bookModel		= require.main.require('./models/bookModel');

router.get('/', (req, res) => {
	if (req.session.email != null) {
		
		res.render('admin/home', {name: req.session.name , id: req.session.id , user_type: req.session.user_type , address: req.session.address , email : req.session.email });

	} else {
		res.redirect('/login');
	}
});

router.get('/insertBook', (req, res) => {
	if (req.session.email != null) {
		
		res.render('admin/insertBook', {name: req.session.name , id: req.session.id , user_type: req.session.user_type , address: req.session.address , email : req.session.email });

	} else {
		res.redirect('/login');
	}
});

router.get('/aboutUs', (req, res) => {
	if (req.session.email != null) {
		
		res.render('admin/aboutUs', {name: req.session.name , id: req.session.id , user_type: req.session.user_type , address: req.session.address , email : req.session.email });

	} else {
		res.redirect('/login');
	}
});



router.get('/viewUsers', (req, res) => {
	if (req.session.email != null) {
		userModel.getAllUser(function (result) {
			res.render('admin/viewUsers', {
				users: result , name: req.session.name , user_type: req.session.user_type
			});
		})
	} else {
		res.redirect('/login');
	}
});

router.get('/deleteUser/:user_id', (req, res)=>{
	userModel.delete(req.params.user_id,(status)=>{
		if(status){
			res.redirect('/admin/viewUsers');
			
		}else{
			res.send('Deletion failed');
		}
  });
});

router.get('/updateUsers/:user_id', (req, res)=>{

	userModel.getById(req.params.user_id, (result) => {
		var user = {
			name: result[0].userName,
			user_type:result[0].userType,
			address: result[0].userAddress,
			email:result[0].userEmail
		};
		res.render('admin/updateUsers', user);
	});
});

router.post('/updateUsers/:user_id', (req, res)=>{
	var user = {
		user_id: req.params.user_id,
		name: req.body.name,
		user_type:req.body.user_type,
		address: req.body.address,
		email:req.body.email
	}
	

	userModel.update(user, (result) => {
		console.log(result);
	});
	res.redirect('/admin/viewUsers');
	

});

router.post('/insertBook', (req, res)=>{
	var book = {
		name: req.body.name,
		book_type:req.body.bookType,
		author: req.body.author,
		price:req.body.price
	}
	

	bookModel.insert(book, (result) => {
		console.log(result);
	});
	res.redirect('/admin');
	

});



		
module.exports = router;