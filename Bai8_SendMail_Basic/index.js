// Thư viện : npm install nodemailer
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'nguyenminhhieu28092001k3@gmail.com',
        pass: 'zxaoicpctwjbncnx'
    }
});

var mailOptions = {
  from: 'nguyenminhhieu28092001k3@gmail.com',
  to: 'nguyenminhhieuk3@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
