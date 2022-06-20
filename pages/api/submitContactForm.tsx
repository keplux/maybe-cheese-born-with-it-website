import { NextApiRequest, NextApiResponse } from 'next';

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  try {
    const { firstName, lastName, email, phone, message } = req.body;
    const msg = {
      to: 'sugar@maybecheesebornwithit.com', // Change to your recipient
      from: 'noreply@maybecheesebornwithit.com', // Change to your verified sender
      subject: `${firstName} ${lastName} has sent you a message.`,
      // text: 'and easy to do anywhere, even with Node.js',
      html: `<body style="background:#db2777;padding:2em;font-family:sans-serif;">
  <div style="background:white;padding:2em;border:2px solid black;border-radius:0.5em;max-width:728px;margin:0 auto;">
    <p style="text-align:center;font-size:20px">${firstName} ${lastName} sent you a message!</p>
    <p>
      <strong>Name</strong>
    </p>
    <p style="margin-left:2em;">${firstName} ${lastName}</p>
    <br />
    <p>
      <strong>Email</strong>
    </p>
    <p style="margin-left:2em;">${email}</p>
    <br />
    <p>
      <strong>Phone</strong>
    </p>
    <p style="margin-left:2em;">${phone}</p>
    <br />
    <p>
      <strong>Message</strong>
    </p>
    <p style="margin-left:2em;">${message}</p>
  </div>
</body>`,
    };
    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent');
      })
      .catch((error: any) => {
        console.error(error);
      });
  } catch (error) {
    let errorMessage = '';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return res.status(500).json({ error: errorMessage });
  }

  return res.status(200).json({ message: 'success' });
}

export default sendEmail;
