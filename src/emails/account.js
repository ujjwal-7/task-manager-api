const mailgun = require("mailgun-js");
const DOMAIN = 'sandbox79e05309e2774455b05336535356962a.mailgun.org';

const mg = mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: DOMAIN});

const sendWelcomeEmail = (email, name) => {
    mg.messages().send({
        from: 'Excited User <me@samples.mailgun.org>',
	    to: email,
	    subject: 'Thanks for joining in!',
	    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
    })  
}

const sendCancellationEmail = (email, name) => {
    mg.messages().send({
        from: 'ujjwal92kumar@gmail.com',
        to: email,
        subject: 'Sorry to see you go!',
        text: `GoodBye, ${name}. I hope to see you back sometime soon.`
    })
}
module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}
