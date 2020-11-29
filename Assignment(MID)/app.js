//declaration
const express 			= require('express');	
const bodyParser 		= require('body-parser');
const exSession 		= require('express-session');
const cookieParser 		= require('cookie-parser');
const login				= require('./controllers/login');
const logout			= require('./controllers/logout');
const admin				= require('./controllers/admin');
const user				= require('./controllers/user');
const registration				= require('./controllers/registration');
const app				= express();
const port				= 3005;

//configuration
app.set('view engine', 'ejs');


//middleware
app.use('/inv', express.static('assets'))
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(exSession({secret: 'secret value', saveUninitialized: true, resave: false}));


app.use('/login', login);
app.use('/admin', admin);
app.use('/logout', logout);
app.use('/user', user);
app.use('/registration', registration);

//router
app.get('/', (req, res)=>{
	res.redirect('/login');
});

//server startup
app.listen(port, (error)=>{
	console.log('server started at '+port);
});