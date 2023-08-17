import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { NextApiRequest, NextApiResponse } from 'next';

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  const { firstName, lastName, email, phone, message } = req.body;

  const client = new SESClient({
    region: 'us-east-2',
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
    },
  });

  const input = {
    Source: 'noreply@maybecheesebornwithit.org',
    Destination: {
      ToAddresses: ['sugar@maybecheesebornwithit.org'],
    },
    Message: {
      Subject: {
        Data: `New message from ${firstName}${lastName && ` ${lastName}`}`,
      },
      Body: {
        Html: {
          Data: `<body style="background:#db2777;padding:2em;font-family:sans-serif;">
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
        },
      },
    },
  };

  const command = new SendEmailCommand(input);

  try {
    await client.send(command);

    return res.status(200).json({ message: 'Success' });
  } catch (error) {
    return res.status(500).json({ message: 'Error' });
  }
}

export default sendEmail;
