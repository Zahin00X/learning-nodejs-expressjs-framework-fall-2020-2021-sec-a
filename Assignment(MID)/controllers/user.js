const express 	= require('express');
const router 	= express.Router();
const {body, validationResult} 		= require('express-validator');
const userModel		= require.main.require('./models/userModel');
const transactionModel		= require.main.require('./models/transactionModel');
const bookModel		= require.main.require('./models/bookModel');

router.get('/', (req, res) => {
	if (req.session.email != null) {
		
		res.render('user/home', {name: req.session.name , id: req.session.id , user_type: req.session.user_type , address: req.session.address , email : req.session.email });

	} else {
		res.redirect('/login');
	}
}); 

router.get('/purchaseBook', (req, res) => {
	if (req.session.email != null) {
		bookModel.getAllBook(function (result) {
			res.render('user/purchaseBook', {
				books: result , name: req.session.name , user_type: req.session.user_type
			});
		})
	} else {
		res.redirect('/login');
	}
});


router.get('/confirmPurchasebook/:book_id', (req, res)=>{
		
		
	
	

	res.render('user/confirmPurchasebook' , {name: req.session.name , id: req.session.id , user_type: req.session.user_type , address: req.session.address , email : req.session.email });
	

});

router.post('/confirmPurchasebook/:book_id', (req, res)=>{
		bookModel.getById(req.params.book_id, (result) => {
		var transaction = {
			user_id: req.session.id ,
			book_id: result[0].bookId,
			quantity: req.body.qty,
			amount  : result[0].price*quantity,
			type : 'cash'

		};
		
	});
	

	transactionModel.update(transaction, (result) => {
		console.log(result);
	});
	res.redirect('/user/purchaseBook');
	

});
	

		
module.exports = router;