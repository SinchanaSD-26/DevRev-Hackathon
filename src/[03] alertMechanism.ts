# This module handles sending alerts (Slack and email).
  
SNAP IN :-
  
import { WebClient } from '@slack/web-api';
import nodemailer from 'nodemailer';
const slackToken = 'YOUR_SLACK_API_TOKEN';
const slackChannel = 'support-team';
export const sendSlackAlert = async (message: string) => {
    const client = new WebClient(slackToken);
    await client.chat.postMessage({ channel: slackChannel, text: message });
    console.log('Slack alert sent.');
};
export const sendEmail = async (subject: string, body: string) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: 'your-email@gmail.com', pass: 'your-password' },
    });
await transporter.sendMail({
        from: 'your-email@gmail.com',
        to: 'agent@example.com',
        subject,
        text: body,
    });
    console.log('Email alert sent.');
};

# Expected Output:
When a customer frustration is detected, Slack and email alerts are sent. Example console output when sending alerts:

# OUTPUT
Slack alert sent.
Email alert sent.

