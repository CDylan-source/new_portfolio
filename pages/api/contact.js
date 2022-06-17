require('dotenv').config();
const PASSWORD = process.env.password;

export default function(req, res){
    let nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransport({
        port: 587,
        host: "smtp-mail.outlook.com",
        auth: {
            user: 'chapuis.dylan@hotmail.fr',
            pass: PASSWORD
        },
    });
    const mailData = {
        from: 'chapuis.dylan@hotmail.fr',
        to: 'chapuis.dylan18@gmail.com',
        subject: `Message From ${req.body.name}`,
        text: req.body.message,
        html: `<div>
            <h2>${req.body.email}</h2>
            <p>${req.body.message}</p>
            </div>`
       }
    transporter.sendMail(mailData, function(err, info){
        if(err)
            console.log(err);
        else
            console.log(info);
    })
    res.status(200);
}