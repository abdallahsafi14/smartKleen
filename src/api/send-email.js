import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send({ message: "Only POST requests allowed" });
  }

  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "server232.web-hosting.com",
    port: 465,
    secure: true,
    auth: {
      user: "webform@smartkleeninc.ca",
      pass: "4DCnexg,AVU@",
    },
  });

  try {
    await transporter.sendMail({
      from: `"SmartKleen Webform" <webform@smartkleeninc.ca>`,
      to: "smartkleen24@gmail.com",
      subject: "New Contact Form Submission",
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    res.status(200).json({ success: true });
    // eslint-disable-next-line no-unused-vars
  } catch (error) {
    res.status(500).json({ error: "Failed to send message" });
  }
}
