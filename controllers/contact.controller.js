const nodemailer = require('nodemailer');

exports.submit = async (req, res, next) => {
  try {
    const { name, email, phone, message } = req.body;
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
    });
    await transporter.sendMail({
      from: email,
      to: 'areamanager@statelife.com.pk',
      subject: `Contact from ${name}`,
      text: `${message}\nPhone: ${phone}`
    });
    res.render('contact', { title: 'Contact', sent: true });
  } catch (err) {
    next(err);
  }
};