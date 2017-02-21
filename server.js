'use strict';
let multer = require('multer');
let upload = multer({dest: 'uploads/'});
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

app.route('/fileupload')
	.post(upload.single('user-file'), function(req,res){
		//console.log(req.body);
		console.log(req.file);
		res.send('POST!!!!')
	});

app.listen(app.get('port'),function(){
	console.log(`Now listening on port ${app.get('port')}...`);
});