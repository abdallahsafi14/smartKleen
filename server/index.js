import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "server232.web-hosting.com",
    port: 465,
    secure: true,
    auth: {
      user: "webform@smartkleeninc.ca",
      pass: "4DCnexg,AVU@", //
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
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send message" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
