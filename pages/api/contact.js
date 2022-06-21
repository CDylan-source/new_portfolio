
const PASSWORD = process.env.password;


export default function Form(req, res){
    let nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransport({
        port: 587,
        host: "smtp-mail.outlook.com",
        auth: {
            user: 'chapuis.dylan@hotmail.fr',
            pass: PASSWORD
        },
    });
    const error = [];
    const validationData = (req) => {
        const mailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
        if(!mailRegex.test(req.body.email)){
            error.push('email')
        }
        if(req.body.message === '' || req.body.name === ''){
            error.push('empty')
        }
        const nameRegex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
        if(!nameRegex.test(req.body.name)){
            error.push('name')
        }
    };
    validationData(req);
    if(error.length !== 0){
        console.log(error);
        return res.status(500).send({errors: error});
    }

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
        if(err){
            console.log(err);
            res.status(500);
            res.send({errors: ['connexion']});
        }
        else{
            console.log(info);
            res.status(200);
            res.send();
        }
    })
    
}