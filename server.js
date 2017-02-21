'use strict';
let multer = require('multer');
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
	.post(multer().single('user-file'), function(req,res){
		if(req.file !== undefined){
			res.json({
				name: req.file.originalname,
				size: req.file.size
			});
		}else{
			res.json({error: "No file uploaded"});
		}

	});

app.listen(app.get('port'),function(){
	console.log(`Now listening on port ${app.get('port')}...`);
});
