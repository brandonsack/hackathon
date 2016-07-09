var express = require('express');
var router = express.Router();
var User = require('../models/User')

/* GET users listing. */
module.exports = function(passport) {
	router.get('/register', function(req, res, next) {
		res.render('register')
	})

	router.post('/register', function(req, res, next) {
		var error = {}
		if (!req.body.username) {
			error.username = "Bad username"
		}
		if (!req.body.password) {
			error.password = "Bad password"
		}
		if (req.body.password !== req.body.passwordRepeat) {
			error.passwordr = "Passwords don't match"
		}
		for (var key in error) {
	        if (error.hasOwnProperty(key)) {
	            res.render('register', {error: error});
	            return;
	        }
	    }
	    var u = new User({
	    	username: req.body.username,
	    	password: req.body.password,
	    })
	    u.save(function(err) {
	    	if (err) {
	    		console.log(err)
	    		res.status(500).redirect('/register')
	    		return;
	    	}
	    	res.redirect('login')
	    })
	})

	router.get('/login', function(req, res, next) {
		res.render('login');
	});

	router.post('/login', passport.authenticate('local', { 
		successRedirect: '/',
	    failureRedirect: '/login'})
	);

	router.use('/login/facebook', passport.authenticate('facebook')
	);

	router.use('/auth/facebook/callback', passport.authenticate('facebook', { 
		successRedirect: '/',
	    failureRedirect: '/login'})
	);

	router.get('/logout', function(req, res, next) {
		req.logout()
		res.redirect('/login')
	})
	return router;
}