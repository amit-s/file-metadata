'use strict';

let express = require('express');
let app = express();
let port = process.env.PORT || 3000;

app.set('port', port);
app.set('view engine', 'pug');
app.use('/public/styles', express.static(__dirname + '/public/styles'));

app.route('/')
	.get(function(req,res){
		res.render('index');
	});

app.listen(app.get('port'),function(){
	console.log(`Now listening on port ${app.get('port')}...`);
});