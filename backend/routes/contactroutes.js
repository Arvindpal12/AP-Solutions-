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

// ++++++++++++++++using resend for sending emails .

// const express = require('express');
// const router = express.Router();
// const Contact = require('../module/Contact');
// const { Resend } = require('resend');

// const resend = new Resend(process.env.RESEND_API_KEY);

// router.post('/Contact', async (req, res) => {
//   try {
//     const { name, email, message } = req.body;

//     // 1. Save to MongoDB
//     const newContact = new Contact(req.body);
//     await newContact.save();

//     // 2. Thank you mail to user
//     await resend.emails.send({
//       from: 'AP Solutions <onboarding@resend.dev>',
//       to: email,
//       subject: 'Thank You for Contacting Us!',
//       html: `<h3>Hi ${name},</h3>
//              <p>Thank you for reaching out to us. We have received your message and will get back to you soon.</p>
//              <p><b>Your message:</b> ${message}</p>
//              <br/>
//              <p>Regards,<br/>AP Solutions Team</p>`,
//     });

//     // 3. Notification mail to admin (you)
//     await resend.emails.send({
//       from: 'Website Contact Form <onboarding@resend.dev>',
//       to: process.env.EMAIL_USER, // aapka apna mail jahan notification chahiye
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

// const express = require('express');
// const router = express.Router();
// const Contact = require('../module/Contact');
// const { Resend } = require('resend');

// const resend = new Resend(process.env.RESEND_API_KEY);

// router.post('/Contact', async (req, res) => {
//   try {
//     const { name, email, message } = req.body;

//     // 1. Save to MongoDB
//     const newContact = new Contact(req.body);
//     await newContact.save();
//     console.log('✅ Saved to DB:', newContact._id);

//     // 2. Thank you mail to user
//     const userEmailResult = await resend.emails.send({
//       from: 'AP Solutions <onboarding@resend.dev>',
//       to: email,
//       subject: 'Thank You for Contacting Us!',
//       html: `<h3>Hi ${name},</h3>
//              <p>Thank you for reaching out to us. We have received your message and will get back to you soon.</p>
//              <p><b>Your message:</b> ${message}</p>
//              <br/>
//              <p>Regards,<br/>AP Solutions Team</p>`,
//     });

//     if (userEmailResult.error) {
//       console.error('❌ User email failed:', userEmailResult.error);
//     } else {
//       console.log('✅ User email sent:', userEmailResult.data);
//     }

//     // 3. Notification mail to admin (you)
//     const adminEmailResult = await resend.emails.send({
//       from: 'Website Contact Form <onboarding@resend.dev>',
//       to: process.env.EMAIL_USER,
//       subject: 'New Contact Form Submission',
//       html: `<h3>New message received</h3>
//              <p><b>Name:</b> ${name}</p>
//              <p><b>Email:</b> ${email}</p>
//              <p><b>Message:</b> ${message}</p>`,
//     });

//     if (adminEmailResult.error) {
//       console.error('❌ Admin email failed:', adminEmailResult.error);
//     } else {
//       console.log('✅ Admin email sent:', adminEmailResult.data);
//     }

//     // Agar dono email fail ho gaye to bhi user ko batao
//     if (userEmailResult.error && adminEmailResult.error) {
//       return res.status(500).json({
//         message: 'Saved but emails failed to send',
//         userError: userEmailResult.error,
//         adminError: adminEmailResult.error,
//       });
//     }

//     res.status(201).json({ message: 'Message saved and emails sent successfully' });
//   } catch (err) {
//     console.error('❌ Server error:', err);
//     res.status(500).json({ error: err.message });
//   }
// });

// module.exports = router;

// +++++++++++using nodemailer instead of resend for sending emails

const express = require('express');
const router = express.Router();
const Contact = require('../module/Contact');
const nodemailer = require('nodemailer');

// Nodemailer transporter setup (Gmail)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

router.post('/Contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // 1. Save to MongoDB
    const newContact = new Contact(req.body);
    await newContact.save();
    console.log('✅ Saved to DB:', newContact._id);

    let userEmailSent = false;
    let adminEmailSent = false;

    // 2. Thank you mail to user
    try {
      await transporter.sendMail({
        from: `"AP Solutions" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: 'Thank You for Contacting Us!',
        html: `<h3>Hi ${name},</h3>
               <p>Thank you for reaching out to us. We have received your message and will get back to you soon.</p>
               <p><b>Your message:</b> ${message}</p>
               <br/>
               <p>Regards,<br/>AP Solutions Team</p>`,
      });
      userEmailSent = true;
      console.log('✅ User email sent to:', email);
    } catch (err) {
      console.error('❌ User email failed:', err.message);
    }

    // 3. Notification mail to admin (you)
    try {
      await transporter.sendMail({
        from: `"Website Contact Form" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        subject: 'New Contact Form Submission',
        html: `<h3>New message received</h3>
               <p><b>Name:</b> ${name}</p>
               <p><b>Email:</b> ${email}</p>
               <p><b>Message:</b> ${message}</p>`,
      });
      adminEmailSent = true;
      console.log('✅ Admin email sent');
    } catch (err) {
      console.error('❌ Admin email failed:', err.message);
    }

    // Agar dono email fail ho gaye to bhi batao
    if (!userEmailSent && !adminEmailSent) {
      return res.status(500).json({
        message: 'Saved but emails failed to send',
      });
    }

    res.status(201).json({ message: 'Message saved and emails sent successfully' });
  } catch (err) {
    console.error('❌ Server error:', err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;