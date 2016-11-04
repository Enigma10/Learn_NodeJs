var express = require('express');
var nodemailer=require('nodemailer');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/send',function(req, res, next){
	var transporter = nodemailer.createTransport(
	{ 
		service: 'Gmail',
		auth:{
			user:'vikashsaini678@gmail.com',
			pass:'something'	
		}

	});
	var mainOptions = {
		from: 'vikash saini <vikashsaini678@gmail>',
		to: 'vkrsaini678@gmail.com',
		subject: 'Website Submission',
		text : 'You have a new Submission with the following deatils .....name '+req.body.myname+'Email:'+req.body.email+'Message'+req.body.message,
		html: '<p>You have a new Submission with the following deatils .....<p><ul><li>name '+req.body.myname+'</li><li>Email:'+req.body.email+'</li><li>Message'+req.body.message+'</li></ul>',
	
	};
	transporter.sendMail(mainOptions,function(error,info){
		if(error){
			console.log('vikiash sainasi cvikashasn vikash sainsi');
			res.redirect('/');
		}else {
			console.log('Message Sent'+ info.response);
			res.redirect('/');

		}

	});

});


module.exports = router;
