const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'ghimrebikash@gmail.com',
        pass: 'qpnvyuocglgcqdhs',
    },
});

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take our messages');
    }
});

module.exports = {
    transporter,
    sendSignupEmail: async () => {
        try {
            const messageOptions = {
                from: 'ghimrebikash@gmail.com',
                to: 'bikashghimire930@gmail.com',
                subject: 'Bikash Store ',
                text: 'Thank you for signing up !! ',
                html: '<b>You are welcomed to Bikash Store</b>',
            };

            const info = await transporter.sendMail(messageOptions);
            console.log('Message sent: %s', info.messageId);
            return 'Email sent successfully.';
        } catch (error) {
            console.error('Error sending email:', error);
            throw new Error('Error sending email.');
        }
    },
};
