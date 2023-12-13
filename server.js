// server.js
const cors = require('cors'); // Import the cors middleware
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());
app.post('/api/send-email', async (req, res) => {
  const { email, message } = req.body;

  // Create a nodemailer transporter using your email provider's SMTP settings
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ricardo.ferreira.2222@gmail.com',
      pass: 'zuwn uzng ukzi ppaf',
    },
  });

  // Email options
  const msg = {
    to: 'ricardo.ferreira.2222@gmail.com',
    from: 'mailer-daemon@googlemail.com',
    subject: 'New Form Submission',
    text: `Email: ${email}\nMessage: ${message}`,
  };

  try {
    // Send the email
    await transporter.sendMail(msg);

    // Respond to the client
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error sending email' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
