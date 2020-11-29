const express 	= require('express');
const router 	= express.Router();
const {body, validationResult} 		= require('express-validator');
const userModel		= require.main.require('./models/userModel');



router.get('/', (req, res)=>{
	res.render('registration');	
});

router.post('/', [

    body('name')
    .notEmpty()
    .withMessage('User name is required'),
    
    body('userType')
    .notEmpty()
	.withMessage('User Type is required'),
	
	body('address')
    .notEmpty()
	.withMessage('Address is required'),
	
    body('email')
    .isEmail()
    .withMessage('Email is required'),

	body('password')
    .notEmpty()
    .withMessage('Password is required')

  ], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.send(errors.array());
    }else{
        user={
            name: req.body.name,
			userType: req.body.userType,
			address: req.body.address,
			email: req.body.email,
			password:req.body.password 
		
        };

        userModel.insert(user,(status)=>{
			console.log(user);
            if(status){
				console.log('Insertion Succesful');
				res.redirect('/login');                              
            }else{
                res.send("Insertion Failed!");                
            } 
        });
    }
  });

module.exports = router;