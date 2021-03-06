const express = require('express');
const app = express();
const mongoose = require('mongoose');
const keys = require('./config/keys');
const passportSetup = require('./config/passport-setup');
const bodyParser = require('body-parser');
const foodRoutes = require('./routes/food-routes');
const loginRoutes = require('./routes/login-routes');
const cookieSession = require('cookie-session');
const port = process.env.PORT || 3000;
const passport = require('passport');
const mysql = require('mysql');

var con = mysql.createConnection({
	host:'34.73.28.238',
	database:'uncommon',
	user:'testuser',
	password:'unHacks19.'
});

let photo = [];


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieSession({
	maxAge: 24 * 60 * 60 * 1000,
	keys: [keys.session.cookieKey]
}));
mongoose.connect(keys.mongodb.dbURL, { useNewUrlParser: true },()=>{
	console.log('connected to mongodb');
});
app.use(passport.initialize());
app.use(passport.session());
app.use('/food', foodRoutes);
app.use('/login',loginRoutes);


app.use('/logout',(req,res)=>{
	res.logout();
	res.redirect('/');
});

// create home route
app.get('/', (req, res) => {
    res.send('test');
});

app.post('/nearbyFood',(req,res)=>{
	var lat = req.latitude;
	var long = req.longitude;
	var radius = req.radius || 0.4;
	var query = `select photo_id from combined where postal_code = 53715 and abs(latitude-43.0756264) < 0.04 and abs(longitude+89.400817) < 0.04`;

	con.connect((err)=>{
		if (err); //WARNING: this one has problem
		console.log('connected to the MySQL');
		con.query(query, (err, result)=>{
			if (err); //WARNING: this one has problem
			result.forEach((image)=>{
				photo.push(image);
			});
			var answer = photo[0];
			if(answer){
				photo = photo.splice(1);
				res.send(answer);
			}else{
				res.send('no food available');
			}
		});
	});
});
app.get('/next',(req,res)=>{
	var answer = photo[0];
	if(answer){
		photo = photo.splice(1);
		res.send(answer);
	}else{
		res.send('no food available');
	}
});

	
app.listen(port, () => {
    console.log(`app now listening for requests on port ${port}`);
});