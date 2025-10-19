const express = require("express");
const path = require("path");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const { Resend } = require('resend');

// server used to send send emails
const app = express();
const corsOptions = {
  origin: ["http://localhost:3000", "https://portfolio-production-99b0.up.railway.app/"],
  methods: ["POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
app.use(express.json());

// Serve static files from React build
app.use(express.static(path.join(__dirname, 'build')));

app.use("/", router);
app.listen(process.env.PORT || 5000, '0.0.0.0', () => console.log("Server Running"));

// Email configuration based on environment
const isProduction = process.env.NODE_ENV === 'production';

// Initialize Resend for production
const resend = isProduction ? new Resend(process.env.RESEND_API_KEY) : null;

// Initialize Nodemailer for development (Mailtrap)
const contactEmail = !isProduction ? nodemailer.createTransport({
  host: process.env.MAIL_HOST || 'smtp.mailtrap.io',
  port: process.env.MAIL_PORT || 2525,
  secure: false,
  auth: {
    user: process.env.MAIL_USER || '54f052b7356807',
    pass: process.env.MAIL_PASSWORD || '97cddd75cea83b'
  },
}) : null;

// Verify email service (only for development with Mailtrap)
if (!isProduction && contactEmail) {
  contactEmail.verify((error) => {
    if (error) {
      console.log('Mailtrap verification error:', error);
    } else {
      console.log('Mailtrap Ready to Send');
    }
  });
} else if (isProduction) {
  console.log('Resend Ready to Send');
}

// API routes
router.post("/contact", async (req, res) => {
  try {
    const name = req.body.firstName + " " + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;
    
    let result;
    
    if (isProduction) {
      // Production: Use Resend SDK
      result = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'quartzdavid@gmail.com',
        subject: 'Contact Form Submission - Portfolio',
        html: `<p>Name: ${name}</p>
               <p>Email: ${email}</p>
               <p>Phone: ${phone}</p>
               <p>Message: ${message}</p>`
      });
      console.log('Email sent successfully via Resend:', result.data?.id);
    } else {
      // Development: Use Mailtrap with Nodemailer
      const mail = {
        from: `${name} <test@mailtrap.io>`,
        to: "quartzdavid@gmail.com",
        subject: "Contact Form Submission - Portfolio",
        html: `<p>Name: ${name}</p>
               <p>Email: ${email}</p>
               <p>Phone: ${phone}</p>
               <p>Message: ${message}</p>`,
      };
      result = await contactEmail.sendMail(mail);
      console.log('Email sent successfully via Mailtrap:', result.messageId);
    }
    
    res.json({ code: 200, status: "Message Sent" });
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({ 
      code: 500, 
      status: "Error", 
      message: "Failed to send message. Please try again later." 
    });
  }
});

// Catch all handler: send back React's index.html file for client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
