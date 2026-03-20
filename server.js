import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { Resend } from 'resend';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = process.env.RESEND_FROM_EMAIL || 'Dime Solutions <onboarding@resend.dev>';
const TO   = process.env.CONTACT_EMAIL     || 'support@dime-solutions.co.ke';

// Static files first — before any middleware
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.json({ limit: '16kb' }));
app.use(cors());

// ── Rate limiter ───────────────────────────────────────────────────────────────
const rateMap = new Map();
function rateLimit(req, res, next) {
  const ip = req.ip || req.socket.remoteAddress || 'unknown';
  const now = Date.now();
  const WINDOW = 10 * 60 * 1000;
  const MAX = 5;
  const entry = rateMap.get(ip) || { count: 0, resetAt: now + WINDOW };
  if (now > entry.resetAt) { entry.count = 0; entry.resetAt = now + WINDOW; }
  entry.count++;
  rateMap.set(ip, entry);
  if (entry.count > MAX) {
    return res.status(429).json({ success: false, error: 'Too many submissions. Please wait a few minutes.' });
  }
  next();
}

// ── HTML escaping ──────────────────────────────────────────────────────────────
function esc(val) {
  if (val === null || val === undefined) return '';
  return String(val)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .replace(/\n/g, '<br>');
}

// ── POST /api/send-contact ─────────────────────────────────────────────────────
app.post('/api/send-contact', rateLimit, async (req, res) => {
  console.log('📨 New contact form submission');
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, error: 'Missing required fields.' });
  }

  try {
    await resend.emails.send({
      from:    FROM,
      to:      [TO],
      replyTo: email,
      subject: `New Contact: ${esc(subject)}`,
      html: `
        <h2 style="color:#0b2342">New Contact Form Submission</h2>
        <table cellpadding="6" style="font-family:sans-serif;font-size:14px">
          <tr><td><strong>Name</strong></td><td>${esc(name)}</td></tr>
          <tr><td><strong>Email</strong></td><td>${esc(email)}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${esc(phone) || 'N/A'}</td></tr>
          <tr><td><strong>Subject</strong></td><td>${esc(subject)}</td></tr>
          <tr><td valign="top"><strong>Message</strong></td><td>${esc(message)}</td></tr>
        </table>
      `,
    });
    console.log('✅ Contact email sent');
    res.json({ success: true });
  } catch (err) {
    console.error('❌ Contact email error:', err);
    res.status(500).json({ success: false, error: 'Failed to send message. Please try again.' });
  }
});

// ── POST /api/send-audit ───────────────────────────────────────────────────────
app.post('/api/send-audit', rateLimit, async (req, res) => {
  console.log('📨 New audit request');
  const { companyName, contactName, email, phone, industry, auditNotes } = req.body;

  if (!contactName || !email) {
    return res.status(400).json({ success: false, error: 'Name and email are required.' });
  }

  try {
    await resend.emails.send({
      from:    FROM,
      to:      [TO],
      replyTo: email,
      subject: `New Free Audit Request — ${esc(companyName || contactName)}`,
      html: `
        <h2 style="color:#0b2342">New Free Audit Request</h2>
        <table cellpadding="6" style="font-family:sans-serif;font-size:14px">
          <tr><td><strong>Company</strong></td><td>${esc(companyName) || 'N/A'}</td></tr>
          <tr><td><strong>Contact</strong></td><td>${esc(contactName)}</td></tr>
          <tr><td><strong>Email</strong></td><td>${esc(email)}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${esc(phone) || 'N/A'}</td></tr>
          <tr><td><strong>Industry</strong></td><td>${esc(industry) || 'N/A'}</td></tr>
          <tr><td valign="top"><strong>Notes</strong></td><td>${esc(auditNotes) || 'N/A'}</td></tr>
        </table>
      `,
    });
    console.log('✅ Audit email sent');
    res.json({ success: true });
  } catch (err) {
    console.error('❌ Audit email error:', err);
    res.status(500).json({ success: false, error: 'Failed to submit request. Please try again.' });
  }
});

// ── POST /api/send-career ──────────────────────────────────────────────────────
app.post('/api/send-career', rateLimit, async (req, res) => {
  console.log('📨 New career application');
  const { name, email, position, message } = req.body;

  if (!name || !email) {
    return res.status(400).json({ success: false, error: 'Name and email are required.' });
  }

  try {
    await resend.emails.send({
      from:    FROM,
      to:      [TO],
      replyTo: email,
      subject: `New Career Application — ${esc(name)}${position ? ` (${esc(position)})` : ''}`,
      html: `
        <h2 style="color:#0b2342">New Career Application</h2>
        <table cellpadding="6" style="font-family:sans-serif;font-size:14px">
          <tr><td><strong>Name</strong></td><td>${esc(name)}</td></tr>
          <tr><td><strong>Email</strong></td><td>${esc(email)}</td></tr>
          <tr><td><strong>Position</strong></td><td>${esc(position) || 'Not specified'}</td></tr>
          <tr><td valign="top"><strong>Message</strong></td><td>${esc(message) || 'N/A'}</td></tr>
        </table>
      `,
    });
    console.log('✅ Career email sent');
    res.json({ success: true });
  } catch (err) {
    console.error('❌ Career email error:', err);
    res.status(500).json({ success: false, error: 'Failed to submit application. Please try again.' });
  }
});

// ── Catch-all: serve React SPA ─────────────────────────────────────────────────
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server running on port ${PORT} [${process.env.NODE_ENV || 'development'}]`);
});
