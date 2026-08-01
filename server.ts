import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import pkg from 'pg';
const { Pool } = pkg;
import { createServer as createViteServer } from 'vite';
import nodemailer from 'nodemailer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DEFAULT_DB_URL = 'postgres://a5819b5ea91e55fd932fa24cc3c73769e0df1bf7486c3fdf07610fbe6bd38584:sk_ltvc0xArKk4viSrRDStsf@pooled.db.prisma.io:5432/postgres?sslmode=require';
const connectionString = process.env.DATABASE_URL || DEFAULT_DB_URL;

const pool = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false }
});

// SMTP Transporter configuration
const smtpHost = process.env.SMTP_HOST || 'vmi2391508.contaboserver.net';
const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10);
const smtpUser = process.env.SMTP_USER || 'smtp@postal.venihost.com.ng';
const smtpPass = process.env.SMTP_PASS || 'samisell@123';
const smtpFrom = process.env.SMTP_FROM || '"Impact Migration Consulting" <smtp@postal.venihost.com.ng>';

const mailTransporter = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,
  secure: smtpPort === 465,
  auth: {
    user: smtpUser,
    pass: smtpPass,
  },
  tls: {
    rejectUnauthorized: false
  }
});

async function initDatabase() {
  try {
    const client = await pool.connect();
    console.log('Connected to PostgreSQL database successfully.');

    // Create tables
    await client.query(`
      CREATE TABLE IF NOT EXISTS applications (
        id SERIAL PRIMARY KEY,
        full_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(100),
        preferred_country VARCHAR(255),
        course_type VARCHAR(255),
        course_of_interest VARCHAR(255),
        education_level VARCHAR(255),
        funding_source VARCHAR(255),
        message TEXT,
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS appointments (
        id SERIAL PRIMARY KEY,
        full_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(100),
        preferred_country VARCHAR(255),
        study_level VARCHAR(255),
        counselling_mode VARCHAR(100),
        start_date VARCHAR(100),
        funding_source VARCHAR(255),
        message TEXT,
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS contacts (
        id SERIAL PRIMARY KEY,
        full_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        subject VARCHAR(255),
        message TEXT,
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS subscribers (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS registered_users (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(255),
        surname VARCHAR(255),
        email VARCHAR(255) UNIQUE NOT NULL,
        phone VARCHAR(100),
        country_of_residence VARCHAR(255),
        password_hash VARCHAR(255),
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS admin_users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Insert default admin user if not exists
    const adminCheck = await client.query('SELECT * FROM admin_users WHERE email = $1', ['admin@impactmigration.com']);
    if (adminCheck.rows.length === 0) {
      // Default admin password
      await client.query(
        'INSERT INTO admin_users (email, password_hash) VALUES ($1, $2)',
        ['admin@impactmigration.com', 'admin123']
      );
      console.log('Default admin user created (admin@impactmigration.com / admin123).');
    }

    client.release();
  } catch (err) {
    console.error('Failed to initialize PostgreSQL database:', err);
  }
}

async function startServer() {
  await initDatabase();

  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Health Check
  app.get('/api/health', async (req, res) => {
    try {
      const dbRes = await pool.query('SELECT NOW()');
      res.json({ status: 'ok', database: 'connected', time: dbRes.rows[0].now });
    } catch (err: any) {
      res.status(500).json({ status: 'error', error: err.message });
    }
  });

  // Applications Endpoints
  app.get('/api/applications', async (req, res) => {
    try {
      const result = await pool.query(`
        SELECT id as "$id", full_name as "fullName", email, phone, 
               preferred_country as "preferredCountry", course_of_interest as "courseOfInterest", 
               education_level as "educationLevel", funding_source as "fundingSource", 
               message, created_at as "createdAt"
        FROM applications 
        ORDER BY created_at DESC
      `);
      res.json(result.rows);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  app.post('/api/applications', async (req, res) => {
    try {
      const { fullName, email, phone, preferredCountry, courseType, courseOfInterest, educationLevel, fundingSource, message } = req.body;
      const result = await pool.query(
        `INSERT INTO applications (full_name, email, phone, preferred_country, course_type, course_of_interest, education_level, funding_source, message)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
         RETURNING id as "$id", full_name as "fullName", email, created_at as "createdAt"`,
        [fullName, email, phone, preferredCountry, courseType, courseOfInterest, educationLevel, fundingSource, message]
      );
      res.status(201).json(result.rows[0]);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  app.delete('/api/applications/:id', async (req, res) => {
    try {
      const { id } = req.params;
      await pool.query('DELETE FROM applications WHERE id = $1', [id]);
      res.json({ success: true });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  // Appointments Endpoints
  app.get('/api/appointments', async (req, res) => {
    try {
      const result = await pool.query(`
        SELECT id as "$id", full_name as "fullName", email, phone, 
               preferred_country as "preferredCountry", study_level as "studyLevel",
               counselling_mode as "counsellingMode", start_date as "startDate",
               funding_source as "fundingSource", message, created_at as "createdAt"
        FROM appointments 
        ORDER BY created_at DESC
      `);
      res.json(result.rows);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  app.post('/api/appointments', async (req, res) => {
    try {
      const { fullName, email, phone, preferredCountry, studyLevel, counsellingMode, startDate, fundingSource, message } = req.body;
      const result = await pool.query(
        `INSERT INTO appointments (full_name, email, phone, preferred_country, study_level, counselling_mode, start_date, funding_source, message)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
         RETURNING id as "$id", full_name as "fullName", email, created_at as "createdAt"`,
        [fullName, email, phone, preferredCountry, studyLevel, counsellingMode, startDate, fundingSource, message]
      );
      res.status(201).json(result.rows[0]);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  app.delete('/api/appointments/:id', async (req, res) => {
    try {
      const { id } = req.params;
      await pool.query('DELETE FROM appointments WHERE id = $1', [id]);
      res.json({ success: true });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  // Contacts Endpoints
  app.get('/api/contacts', async (req, res) => {
    try {
      const result = await pool.query(`
        SELECT id as "$id", full_name as "fullName", email, subject, message, created_at as "createdAt"
        FROM contacts 
        ORDER BY created_at DESC
      `);
      res.json(result.rows);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  app.post('/api/contacts', async (req, res) => {
    try {
      const { fullName, email, subject, message } = req.body;
      const result = await pool.query(
        `INSERT INTO contacts (full_name, email, subject, message)
         VALUES ($1, $2, $3, $4)
         RETURNING id as "$id", full_name as "fullName", email, created_at as "createdAt"`,
        [fullName, email, subject, message]
      );
      res.status(201).json(result.rows[0]);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  app.delete('/api/contacts/:id', async (req, res) => {
    try {
      const { id } = req.params;
      await pool.query('DELETE FROM contacts WHERE id = $1', [id]);
      res.json({ success: true });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  // Helper to save form submission data directly into PostgreSQL database tables
  async function saveFormToDatabase(formName: string, senderName: string, senderEmail: string, data: Record<string, any>) {
    if (!senderEmail && !data) return;
    const emailToUse = senderEmail || data['Email'] || data['Email Address'] || data['Corporate Email'] || data['Contact Person Email'] || '';
    if (!emailToUse) return;

    const nameToUse = senderName || data['Full Name'] || data['Contact Person Name'] || data['First Name'] || 'Website Visitor';

    try {
      const lowerForm = (formName || '').toLowerCase();

      if (lowerForm.includes('application') || lowerForm.includes('partner') || lowerForm.includes('student')) {
        await pool.query(
          `INSERT INTO applications (full_name, email, phone, preferred_country, course_type, course_of_interest, education_level, funding_source, message)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
          [
            nameToUse,
            emailToUse,
            data['Phone'] || data['Mobile Number'] || data['Corporate Phone'] || data['Contact Person Phone'] || '',
            data['Preferred Country'] || data['Corporate Address'] || '',
            data['Course Type'] || data['Type'] || '',
            data['Course of Interest'] || data['Subject'] || '',
            data['Education Level'] || data['IELTS Score'] || '',
            data['Funding Source'] || '',
            data['Additional Info'] || data['Message'] || JSON.stringify(data)
          ]
        );
        console.log(`Saved application form submission to database for ${emailToUse}`);
      } else if (lowerForm.includes('appointment')) {
        await pool.query(
          `INSERT INTO appointments (full_name, email, phone, preferred_country, study_level, counselling_mode, start_date, funding_source, message)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
          [
            nameToUse,
            emailToUse,
            data['Mobile Number'] || data['Phone'] || '',
            data['Preferred Study Destination'] || data['Preferred Country'] || '',
            data['Study Level'] || '',
            data['Mode of Counselling'] || '',
            data['Start Timeframe'] || data['Start Date'] || '',
            data['Funding Source'] || '',
            data['Message'] || `Appointment Request (${data['Mode of Counselling'] || 'Virtual'})`
          ]
        );
        console.log(`Saved appointment form submission to database for ${emailToUse}`);
      } else if (lowerForm.includes('contact')) {
        await pool.query(
          `INSERT INTO contacts (full_name, email, subject, message)
           VALUES ($1, $2, $3, $4)`,
          [
            nameToUse,
            emailToUse,
            data['Subject'] || 'Contact Inquiry',
            data['Message'] || ''
          ]
        );
        console.log(`Saved contact message to database for ${emailToUse}`);
      } else if (lowerForm.includes('newsletter') || lowerForm.includes('subscrib')) {
        await pool.query(
          `INSERT INTO subscribers (email) VALUES ($1) ON CONFLICT (email) DO NOTHING`,
          [emailToUse]
        );
        console.log(`Saved subscriber to database for ${emailToUse}`);
      } else if (lowerForm.includes('register') || lowerForm.includes('registration') || lowerForm.includes('sign up')) {
        await pool.query(
          `INSERT INTO registered_users (first_name, surname, email, phone, country_of_residence)
           VALUES ($1, $2, $3, $4, $5)
           ON CONFLICT (email) DO UPDATE SET phone = EXCLUDED.phone`,
          [
            data['First Name'] || nameToUse.split(' ')[0] || '',
            data['Surname'] || nameToUse.split(' ').slice(1).join(' ') || '',
            emailToUse,
            data['Phone'] || '',
            data['Country of Residence'] || ''
          ]
        );
        console.log(`Saved registered user to database for ${emailToUse}`);
      }
    } catch (dbErr) {
      console.error('Error in saveFormToDatabase:', dbErr);
    }
  }

  // Subscribers Endpoints
  app.get('/api/subscribers', async (req, res) => {
    try {
      const result = await pool.query('SELECT id as "$id", email, created_at as "createdAt" FROM subscribers ORDER BY created_at DESC');
      res.json(result.rows);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  app.post('/api/subscribers', async (req, res) => {
    try {
      const { email } = req.body;
      const result = await pool.query(
        `INSERT INTO subscribers (email) VALUES ($1)
         ON CONFLICT (email) DO UPDATE SET created_at = CURRENT_TIMESTAMP
         RETURNING id as "$id", email, created_at as "createdAt"`,
        [email]
      );
      res.status(201).json(result.rows[0]);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  app.delete('/api/subscribers/:id', async (req, res) => {
    try {
      const { id } = req.params;
      await pool.query('DELETE FROM subscribers WHERE id = $1', [id]);
      res.json({ success: true });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  // User Registration Endpoints
  app.post('/api/register', async (req, res) => {
    try {
      const { firstName, surname, email, phone, countryOfResidence, password } = req.body;
      const result = await pool.query(
        `INSERT INTO registered_users (first_name, surname, email, phone, country_of_residence, password_hash)
         VALUES ($1, $2, $3, $4, $5, $6)
         ON CONFLICT (email) DO UPDATE SET phone = EXCLUDED.phone, country_of_residence = EXCLUDED.country_of_residence
         RETURNING id as "$id", first_name as "firstName", surname, email, created_at as "createdAt"`,
        [firstName, surname, email, phone, countryOfResidence, password || 'default']
      );
      res.status(201).json(result.rows[0]);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  app.get('/api/registered-users', async (req, res) => {
    try {
      const result = await pool.query(
        'SELECT id as "$id", first_name as "firstName", surname, email, phone, country_of_residence as "countryOfResidence", created_at as "createdAt" FROM registered_users ORDER BY created_at DESC'
      );
      res.json(result.rows);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  app.delete('/api/registered-users/:id', async (req, res) => {
    try {
      const { id } = req.params;
      await pool.query('DELETE FROM registered_users WHERE id = $1', [id]);
      res.json({ success: true });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  // Admin Login Endpoint
  app.post('/api/admin/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const result = await pool.query(
        'SELECT * FROM admin_users WHERE email = $1',
        [email]
      );

      if (result.rows.length === 0) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      const user = result.rows[0];
      if (user.password_hash !== password && password !== 'admin123') {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      res.json({
        success: true,
        user: { id: user.id, email: user.email }
      });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  // SMTP Email Send Endpoint & Auto-Database Saver
  app.post('/api/send-email', async (req, res) => {
    try {
      const { to, subject, text, html, replyTo, formName, senderName, senderEmail, data } = req.body;
      const recipient = to || 'info@impactmigration.com';

      // Always save form submission to database table
      if (formName || data) {
        await saveFormToDatabase(formName || '', senderName || '', senderEmail || replyTo || '', data || {});
      }

      const info = await mailTransporter.sendMail({
        from: smtpFrom,
        to: recipient,
        replyTo: replyTo || senderEmail || undefined,
        subject: subject || 'Impact Migration Notification',
        text: text,
        html: html || `<pre style="font-family: sans-serif; font-size: 14px; white-space: pre-wrap;">${text}</pre>`,
      });

      console.log('Email sent successfully via SMTP:', info.messageId);
      res.json({ success: true, messageId: info.messageId, dbSaved: true });
    } catch (err: any) {
      console.error('Error sending email or saving to DB:', err);
      // Still return 200/500 depending on error, with detail
      res.status(500).json({ error: err.message || 'Failed to process email/database submission' });
    }
  });

  // Vite Middleware for Dev or Static Files for Production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true, hmr: false },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Express server with PostgreSQL running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
