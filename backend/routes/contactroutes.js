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
const express = require("express");
const router = express.Router();
const Contact = require("../module/Contact");
const nodemailer = require("nodemailer");
const dns = require("dns");

dns.setDefaultResultOrder("ipv4first");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  family: 4,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  connectionTimeout: 30000,
  greetingTimeout: 30000,
  socketTimeout: 30000,
  tls: {
    servername: "smtp.gmail.com",
    rejectUnauthorized: false,
  },
});

// SMTP Verify
transporter.verify((err) => {
  if (err) {
    console.error("❌ SMTP Verify Error:", err);
  } else {
    console.log("✅ SMTP Connected Successfully");
  }
});

router.post("/Contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Save to MongoDB
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // Send response immediately
    res.status(201).json({
      success: true,
      message: "Message saved successfully",
    });

    // User Email
    transporter
      .sendMail({
        from: `"AP Solutions" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Thank You for Contacting Us!",
        html: `
          <h3>Hi ${name},</h3>
          <p>Thank you for contacting <b>AP Solutions</b>.</p>
          <p>We have received your message and will contact you soon.</p>

          <hr>

          <p><strong>Your Message:</strong></p>
          <p>${message}</p>

          <br>

          <p>Regards,<br>AP Solutions Team</p>
        `,
      })
      .then(() => console.log("✅ User mail sent"))
      .catch((err) => console.error("❌ User mail failed:", err));

    // Admin Email
    transporter
      .sendMail({
        from: `"Website Contact Form" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        subject: "New Contact Form Submission",
        html: `
          <h2>New Contact Form Submission</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>

          <p>${message}</p>
        `,
      })
      .then(() => console.log("✅ Admin mail sent"))
      .catch((err) => console.error("❌ Admin mail failed:", err));
  } catch (err) {
    console.error("❌ Save failed:", err);
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

module.exports = router;

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
// const dns = require("dns");

// dns.setDefaultResultOrder("ipv4first");

// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
//   tls: { rejectUnauthorized: false },
//   family: 4,
//   connectionTimeout: 10000,
//   greetingTimeout: 10000,
//   socketTimeout: 15000,
//   pool: true,
//   maxConnections: 3,
// });

// transporter.verify((error) => {
//   if (error) console.error("❌ SMTP Error:", error);
//   else console.log("✅ Nodemailer Ready");
// });

// router.post("/Contact", async (req, res) => {
//   try {
//     const { name, email, message } = req.body;

//     if (!name || !email || !message) {
//       return res.status(400).json({ success: false, message: "All fields are required" });
//     }

//     // Save to DB
//     const newContact = new Contact({ name, email, message });
//     await newContact.save();

//     // Client ko turant response
//     res.status(201).json({
//       success: true,
//       message: "Form submitted successfully. Thank you!",
//     });

//     // Background emails
//     setImmediate(() => {
//       // ✅ USER ko sirf generic Thank You — unka data/message wapas nahi jayega
//       const userMail = {
//         from: `"AP Solutions" <${process.env.EMAIL_USER}>`,
//         to: email,
//         subject: "Thank You for Contacting AP Solutions!",
//         html: `
//           <div style="font-family: Arial, sans-serif; padding: 20px;">
//             <h2>Hello ${name}, 👋</h2>
//             <p>Thank you for reaching out to <b>AP Solutions</b>!</p>
//             <p>We have received your message and our team will get back to you shortly.</p>
//             <br>
//             <p>Best regards,</p>
//             <h3>AP Solutions Team</h3>
//           </div>
//         `,
//       };

//       // ✅ ADMIN ko poora filled data
//       const adminMail = {
//         from: `"Website Form" <${process.env.EMAIL_USER}>`,
//         to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
//         subject: `📩 New Contact from ${name}`,
//         html: `
//           <div style="font-family: Arial, sans-serif; padding: 20px;">
//             <h2>New Contact Form Submission</h2>
//             <p><strong>Name:</strong> ${name}</p>
//             <p><strong>Email:</strong> ${email}</p>
//             <p><strong>Message:</strong></p>
//             <p>${message}</p>
//           </div>
//         `,
//       };

//       Promise.allSettled([
//         transporter.sendMail(userMail),
//         transporter.sendMail(adminMail),
//       ]).then((results) => {
//         results.forEach((r, i) => {
//           const label = i === 0 ? "User mail" : "Admin mail";
//           if (r.status === "fulfilled") {
//             console.log(`✅ ${label} sent`);
//           } else {
//             console.error(`❌ ${label} failed:`, r.reason.message);
//           }
//         });
//       });
//     });
//   } catch (err) {
//     console.error("❌ Contact Route Error:", err);
//     if (!res.headersSent) {
//       return res.status(500).json({
//         success: false,
//         message: "Server error. Please try again.",
//       });
//     }
//   }
// });

// module.exports = router;

// const express = require("express");
// const router = express.Router();
// const Contact = require("../module/Contact");
// const nodemailer = require("nodemailer");
// const dns = require("dns");

// // Force IPv4 lookup globally - fixes ENETUNREACH on Render (IPv6 not routable)
// dns.setDefaultResultOrder("ipv4first");

// // Nodemailer Transporter
// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
//   tls: { rejectUnauthorized: false },
//   family: 4,              // 🔑 key fix — skip broken IPv6 route
//   connectionTimeout: 10000,
//   greetingTimeout: 10000,
//   socketTimeout: 15000,
//   pool: true,
//   maxConnections: 3,
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

//     // Save to DB first
//     const newContact = new Contact({ name, email, message });
//     await newContact.save();

//     // ⚡ Client ko turant response bhej do — email background me jayega
//     res.status(201).json({
//       success: true,
//       message: "Form submitted successfully. Thank you!",
//     });

//     // 🚀 Emails ab background me, non-blocking
//     setImmediate(() => {
//       const userMail = {
//         from: `"AP Solutions" <${process.env.EMAIL_USER}>`,
//         to: email,
//         subject: "Thank You for Contacting AP Solutions!",
//         html: `
//           <h2>Hello ${name},</h2>
//           <p>Thank you for reaching out. We have received your message.</p>
//           <p>Our team will contact you soon.</p>
//           <hr>
//           <p><strong>Your Message:</strong> ${message}</p>
//           <p>Best Regards,<br><strong>AP Solutions Team</strong></p>
//         `,
//       };

//       const adminMail = {
//         from: `"Website Form" <${process.env.EMAIL_USER}>`,
//         to: process.env.EMAIL_USER,
//         subject: `📩 New Contact from ${name}`,
//         html: `
//           <h2>New Contact Form</h2>
//           <p><strong>Name:</strong> ${name}</p>
//           <p><strong>Email:</strong> ${email}</p>
//           <p><strong>Message:</strong></p>
//           <p>${message}</p>
//         `,
//       };

//       Promise.allSettled([
//         transporter.sendMail(userMail),
//         transporter.sendMail(adminMail),
//       ]).then((results) => {
//         results.forEach((r, i) => {
//           const label = i === 0 ? "User mail" : "Admin mail";
//           if (r.status === "fulfilled") {
//             console.log(`✅ ${label} sent`);
//           } else {
//             console.error(`❌ ${label} failed:`, r.reason.message);
//           }
//         });
//       });
//     });
//   } catch (err) {
//     console.error("❌ Contact Route Error:", err);
//     if (!res.headersSent) {
//       return res.status(500).json({
//         success: false,
//         message: "Server error. Please try again.",
//       });
//     }
//   }
// });

// module.exports = router;

// const express = require("express");
// const router = express.Router();
// const Contact = require("../module/Contact");
// const nodemailer = require("nodemailer");
// const dns = require("dns");
// const rateLimit = require("express-rate-limit");

// // Force IPv4 lookup globally - fixes ENETUNREACH on Render (IPv6 not routable)
// dns.setDefaultResultOrder("ipv4first");

// // Nodemailer Transporter
// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
//   tls: { rejectUnauthorized: false },
//   family: 4,              // 🔑 key fix — skip broken IPv6 route
//   connectionTimeout: 10000,
//   greetingTimeout: 10000,
//   socketTimeout: 15000,
//   pool: true,
//   maxConnections: 3,
// });

// // Verify SMTP
// transporter.verify((error) => {
//   if (error) console.error("❌ SMTP Error:", error);
//   else console.log("✅ Nodemailer Ready");
// });

// // 🛡️ Rate limiter — ek IP se 15 min me max 5 submissions (spam/abuse se bachne ke liye)
// const contactLimiter = rateLimit({
//   windowMs: 15 * 60 * 1000,
//   max: 5,
//   message: { success: false, message: "Too many requests. Please try again later." },
//   standardHeaders: true,
//   legacyHeaders: false,
// });

// // Simple email format check
// const isValidEmail = (email) => /^\S+@\S+\.\S+$/.test(email);

// // POST Route
// router.post("/Contact", contactLimiter, async (req, res) => {
//   try {
//     const { name, email, message, website } = req.body;
//     // 👆 "website" ek honeypot field hai — form me hidden rehta hai, sirf bots isko fill karte hain

//     // 🕵️ Honeypot check — agar ye field bhara hua hai to ye bot hai, silently success bhej do
//     if (website) {
//       return res.status(200).json({ success: true, message: "Form submitted successfully. Thank you!" });
//     }

//     if (!name || !email || !message) {
//       return res.status(400).json({ success: false, message: "All fields are required" });
//     }

//     if (!isValidEmail(email)) {
//       return res.status(400).json({ success: false, message: "Please enter a valid email address" });
//     }

//     // Save to DB first
//     const newContact = new Contact({ name, email, message });
//     await newContact.save();

//     // ⚡ Client ko turant response bhej do — email background me jayega
//     res.status(201).json({
//       success: true,
//       message: "Form submitted successfully. Thank you!",
//     });

//     // 🚀 Emails ab background me, non-blocking
//     setImmediate(() => {
//       const userMail = {
//         from: `"AP Solutions" <${process.env.EMAIL_USER}>`,
//         to: email,
//         subject: "Thank You for Contacting AP Solutions!",
//         html: `
//           <h2>Hello ${name},</h2>
//           <p>Thank you for reaching out. We have received your message.</p>
//           <p>Our team will contact you soon.</p>
//           <hr>
//           <p><strong>Your Message:</strong> ${message}</p>
//           <p>Best Regards,<br><strong>AP Solutions Team</strong></p>
//         `,
//       };

//       const adminMail = {
//         from: `"Website Form" <${process.env.EMAIL_USER}>`,
//         to: process.env.OWNER_EMAIL || process.env.EMAIL_USER,
//         subject: `📩 New Contact from ${name}`,
//         html: `
//           <h2>New Contact Form</h2>
//           <p><strong>Name:</strong> ${name}</p>
//           <p><strong>Email:</strong> ${email}</p>
//           <p><strong>Message:</strong></p>
//           <p>${message}</p>
//         `,
//       };

//       Promise.allSettled([
//         transporter.sendMail(userMail),
//         transporter.sendMail(adminMail),
//       ]).then((results) => {
//         results.forEach((r, i) => {
//           const label = i === 0 ? "User mail" : "Admin mail";
//           if (r.status === "fulfilled") {
//             console.log(`✅ ${label} sent`);
//           } else {
//             console.error(`❌ ${label} failed:`, r.reason.message);
//           }
//         });
//       });
//     });
//   } catch (err) {
//     console.error("❌ Contact Route Error:", err);
//     if (!res.headersSent) {
//       return res.status(500).json({
//         success: false,
//         message: "Server error. Please try again.",
//       });
//     }
//   }
// });

// module.exports = router;