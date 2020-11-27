//declaration
const express 			= require('express');	
const bodyParser 		= require('body-parser');
const exSession 		= require('express-session');
const cookieParser 		= require('cookie-parser');
const {body, validationResult} 		= require('express-validator');
const login				= require('./controllers/login');
const user				= require('./controllers/user');
const admin				= require('./controllers/admin');
const logout			= require('./controllers/logout');
const { DH_UNABLE_TO_CHECK_GENERATOR } = require('constants');
const app				= express();
const port				= 3001;
//configuration
app.set('view engine', 'ejs');



//middleware
app.use('/color', express.static('assets'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(exSession({secret: 'secret value',
	saveUninitialized: true, 
	resave: false}));
app.use('/login', login);
app.use('/admin', admin);
app.use('/logout', logout);
app.use('/user', user);



app.get('/',(req,res)=>{
	res.render('login.ejs');
})



//server startup
app.listen(port, (error)=>{
	console.log('server strated at '+port);
});