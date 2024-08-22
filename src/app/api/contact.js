// pages/api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, contact, subject, message } = req.body;

    // Create a transporter object with SMTP server details
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // or use another service provider
      auth: {
        user: 'your-email@gmail.com', // replace with your email
        pass: 'your-email-password',  // replace with your email password
      },
    });

    try {
      // Send the email
      await transporter.sendMail({
        from: email,
        to: 'info@visiongroww.com',
        subject: `Contact Form Submission: ${subject}`,
        text: `
          Name: ${name}
          Email: ${email}
          Contact: ${contact}
          Subject: ${subject}
          Message: ${message}
        `,
      });

      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
