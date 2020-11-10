const express = require('express');
const registration   = require('./controllers/registration');
const app = express();

app.set('view engine','ejs');

app.use('/registration',registration);

app.get('/',(request,response)=>{

	response.send('This is an default page');



})

app.listen(3000,(error)=>{


	console.log('express server started at 3000 port');
});