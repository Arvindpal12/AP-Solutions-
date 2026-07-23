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

// const express = require('express');
// const router = express.Router();
// const Contact = require('../module/Contact');
// const nodemailer = require('nodemailer');

// // Nodemailer transporter setup (Gmail)
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
//     console.log('✅ Saved to DB:', newContact._id);

//     let userEmailSent = false;
//     let adminEmailSent = false;

//     // 2. Thank you mail to user
//     try {
//       await transporter.sendMail({
//         from: `"AP Solutions" <${process.env.EMAIL_USER}>`,
//         to: email,
//         subject: 'Thank You for Contacting Us!',
//         html: `<h3>Hi ${name},</h3>
//                <p>Thank you for reaching out to us. We have received your message and will get back to you soon.</p>
//                <p><b>Your message:</b> ${message}</p>
//                <br/>
//                <p>Regards,<br/>AP Solutions Team</p>`,
//       });
//       userEmailSent = true;
//       console.log('✅ User email sent to:', email);
//     } catch (err) {
//       console.error('❌ User email failed:', err.message);
//     }

//     // 3. Notification mail to admin (you)
//     try {
//       await transporter.sendMail({
//         from: `"Website Contact Form" <${process.env.EMAIL_USER}>`,
//         to: process.env.EMAIL_USER,
//         subject: 'New Contact Form Submission',
//         html: `<h3>New message received</h3>
//                <p><b>Name:</b> ${name}</p>
//                <p><b>Email:</b> ${email}</p>
//                <p><b>Message:</b> ${message}</p>`,
//       });
//       adminEmailSent = true;
//       console.log('✅ Admin email sent');
//     } catch (err) {
//       console.error('❌ Admin email failed:', err.message);
//     }

//     // Agar dono email fail ho gaye to bhi batao
//     if (!userEmailSent && !adminEmailSent) {
//       return res.status(500).json({
//         message: 'Saved but emails failed to send',
//       });
//     }

//     res.status(201).json({ message: 'Message saved and emails sent successfully' });
//   } catch (err) {
//     console.error('❌ Server error:', err);
//     res.status(500).json({ error: err.message });
//   }
// });

// module.exports = router;


// const express = require("express");
// const router = express.Router();
// const Contact = require("../module/Contact");
// const nodemailer = require("nodemailer");

// // Nodemailer Transporter
// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
//   tls: { rejectUnauthorized: false }
// });

// // Verify SMTP
// transporter.verify((error) => {
//   if (error) console.error("❌ SMTP Error:", error);
//   else console.log("✅ Nodemailer Ready");
// });

// // POST Route
// router.post("/Contact", async (req, res) => {
//   try {
//     const { name, email, message } = req.body;

//     if (!name || !email || !message) {
//       return res.status(400).json({ success: false, message: "All fields are required" });
//     }

//     // Save to DB
//     const newContact = new Contact({ name, email, message });
//     await newContact.save();

//     // Send Thank You Email to User
//     await transporter.sendMail({
//       from: `"AP Solutions" <${process.env.EMAIL_USER}>`,
//       to: email,
//       subject: "Thank You for Contacting AP Solutions!",
//       html: `
//         <h2>Hello ${name},</h2>
//         <p>Thank you for reaching out. We have received your message.</p>
//         <p>Our team will contact you soon.</p>
//         <hr>
//         <p><strong>Your Message:</strong> ${message}</p>
//         <p>Best Regards,<br><strong>AP Solutions Team</strong></p>
//       `
//     });

//     // Send Notification to Admin
//     await transporter.sendMail({
//       from: `"Website Form" <${process.env.EMAIL_USER}>`,
//       to: process.env.EMAIL_USER,
//       subject: `📩 New Contact from ${name}`,
//       html: `
//         <h2>New Contact Form</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Message:</strong></p>
//         <p>${message}</p>
//       `
//     });

//     return res.status(201).json({
//       success: true,
//       message: "Form submitted successfully. Thank you!"
//     });

//   } catch (err) {
//     console.error("❌ Contact Route Error:", err);
//     return res.status(500).json({
//       success: false,
//       message: "Server error. Please try again."
//     });
//   }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const Contact = require("../module/Contact");
const nodemailer = require("nodemailer");

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: { rejectUnauthorized: false }
});

// Verify SMTP
transporter.verify((error) => {
  if (error) console.error("❌ SMTP Error:", error);
  else console.log("✅ Nodemailer Ready");
});

// Simple validators (backend-side safety net, even if frontend validates too)
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const isValidPhone = (phone) => /^[0-9]{10}$/.test(phone);

// POST Route
router.post("/Contact", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Field presence check
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    // Format validation
    if (!isValidEmail(email)) {
      return res.status(400).json({ success: false, message: "Please enter a valid email address" });
    }

    if (!isValidPhone(phone)) {
      return res.status(400).json({ success: false, message: "Please enter a valid 10-digit phone number" });
    }

    // Save to DB
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();

    // Send Thank You Email to User (tracked separately so we know if it fails)
    let userEmailSent = true;
    try {
      await transporter.sendMail({
        from: `"AP Solutions" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Thank You for Contacting AP Solutions!",
        html: `
          <h2>Hello ${name},</h2>
          <p>Thank you for reaching out. We have received your message.</p>
          <p>Our team will contact you soon.</p>
          <hr>
          <p><strong>Your Phone:</strong> ${phone}</p>
          <p><strong>Your Message:</strong> ${message}</p>
          <p>Best Regards,<br><strong>AP Solutions Team</strong></p>
        `
      });
      console.log(`✅ Thank you email sent to user: ${email}`);
    } catch (userMailErr) {
      userEmailSent = false;
      console.error("❌ Failed to send Thank You email to user:", userMailErr);
    }

    // Send Notification to Admin (tracked separately too)
    let adminEmailSent = true;
    try {
      await transporter.sendMail({
        from: `"Website Form" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        subject: `📩 New Contact from ${name}`,
        html: `
          <h2>New Contact Form</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `
      });
      console.log(`✅ Admin notification email sent`);
    } catch (adminMailErr) {
      adminEmailSent = false;
      console.error("❌ Failed to send Admin notification email:", adminMailErr);
    }

    return res.status(201).json({
      success: true,
      message: "Form submitted successfully. Thank you!",
      userEmailSent,
      adminEmailSent
    });

  } catch (err) {
    console.error("❌ Contact Route Error:", err);
    return res.status(500).json({
      success: false,
      message: "Server error. Please try again."
    });
  }
});

module.exports = router;