// const express = require('express');
// const router = express.Router();
// const Contact = require('../module/Contact');

// router.post('/Contact', async (req, res) => {
//   try {
//     const newContact = new Contact(req.body);
//     await newContact.save();
//     res.status(201).json({ message: 'Message saved successfully' });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// module.exports = router;

// const express = require('express');
// const router = express.Router();
// const Contact = require('../module/Contact');
// const nodemailer = require('nodemailer');

// // Transporter setup
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// router.post('/Contact', async (req, res) => {
//   try {
//     const { name, email, message } = req.body;

//     // 1. Save to MongoDB
//     const newContact = new Contact(req.body);
//     await newContact.save();

//     // 2. Thank you mail to user
//     await transporter.sendMail({
//       from: `"AP Solutions" <${process.env.EMAIL_USER}>`,
//       to: email,
//       subject: 'Thank You for Contacting Us!',
//       html: `<h3>Hi ${name},</h3>
//              <p>Thank you for reaching out to us. We have received your message and will get back to you soon.</p>
//              <p><b>Your message:</b> ${message}</p>
//              <br/>
//              <p>Regards,<br/>AP Solutions Team</p>`,
//     });

//     // 3. Notification mail to admin (you)
//     await transporter.sendMail({
//       from: `"Website Contact Form" <${process.env.EMAIL_USER}>`,
//       to: process.env.EMAIL_USER, // aapka apna mail
//       subject: 'New Contact Form Submission',
//       html: `<h3>New message received</h3>
//              <p><b>Name:</b> ${name}</p>
//              <p><b>Email:</b> ${email}</p>
//              <p><b>Message:</b> ${message}</p>`,
//     });

//     res.status(201).json({ message: 'Message saved and emails sent successfully' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: err.message });
//   }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const Contact = require('../module/Contact');
const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

router.post('/Contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // 1. Save to MongoDB
    const newContact = new Contact(req.body);
    await newContact.save();

    // 2. Thank you mail to user
    await resend.emails.send({
      from: 'AP Solutions <onboarding@resend.dev>',
      to: email,
      subject: 'Thank You for Contacting Us!',
      html: `<h3>Hi ${name},</h3>
             <p>Thank you for reaching out to us. We have received your message and will get back to you soon.</p>
             <p><b>Your message:</b> ${message}</p>
             <br/>
             <p>Regards,<br/>AP Solutions Team</p>`,
    });

    // 3. Notification mail to admin (you)
    await resend.emails.send({
      from: 'Website Contact Form <onboarding@resend.dev>',
      to: process.env.EMAIL_USER, // aapka apna mail jahan notification chahiye
      subject: 'New Contact Form Submission',
      html: `<h3>New message received</h3>
             <p><b>Name:</b> ${name}</p>
             <p><b>Email:</b> ${email}</p>
             <p><b>Message:</b> ${message}</p>`,
    });

    res.status(201).json({ message: 'Message saved and emails sent successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;