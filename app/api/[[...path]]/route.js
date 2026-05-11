import { NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'
import nodemailer from 'nodemailer'

let cachedClient = null

async function getDb() {
  if (cachedClient) return cachedClient.db()
  const uri = process.env.MONGO_URL
  if (!uri) throw new Error('MONGO_URL not configured')
  const client = new MongoClient(uri)
  await client.connect()
  cachedClient = client
  return client.db()
}

let cachedTransporter = null
function getTransporter() {
  if (cachedTransporter) return cachedTransporter
  cachedTransporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 465),
    secure: String(process.env.SMTP_SECURE || 'true') === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
  return cachedTransporter
}

function escapeHtml(s = '') {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function buildEmailHtml({ name, email, company, phone, message }) {
  return `<!doctype html>
<html><body style="font-family:-apple-system,Segoe UI,Inter,Arial,sans-serif;background:#f3f6fb;padding:24px;">
  <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #e2e8f0;">
    <div style="background:#0A1633;color:#fff;padding:22px 26px;">
      <div style="font-size:12px;letter-spacing:.22em;color:#93c5fd;text-transform:uppercase;">Aelys Systems</div>
      <div style="font-size:20px;font-weight:600;margin-top:6px;">Nouvelle demande de contact</div>
    </div>
    <div style="padding:24px 26px;color:#0f1e47;font-size:14.5px;line-height:1.55;">
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:8px 0;color:#64748b;width:130px;">Nom</td><td style="padding:8px 0;font-weight:600;">${escapeHtml(name)}</td></tr>
        <tr><td style="padding:8px 0;color:#64748b;">Email</td><td style="padding:8px 0;"><a href="mailto:${escapeHtml(email)}" style="color:#2563eb;text-decoration:none;">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:8px 0;color:#64748b;">Entreprise</td><td style="padding:8px 0;">${escapeHtml(company) || '—'}</td></tr>
        <tr><td style="padding:8px 0;color:#64748b;">Téléphone</td><td style="padding:8px 0;">${escapeHtml(phone) || '—'}</td></tr>
      </table>
      <div style="margin-top:18px;padding:16px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;white-space:pre-wrap;">${escapeHtml(message)}</div>
      <div style="margin-top:22px;font-size:12px;color:#94a3b8;">Reçu via aelyssystems.ch · ${new Date().toLocaleString('fr-CH')}</div>
    </div>
  </div>
</body></html>`
}

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  }
}

export async function OPTIONS() {
  return new NextResponse(null, { headers: corsHeaders() })
}

export async function GET(request, { params }) {
  const path = (params?.path || []).join('/')
  if (path === '' || path === 'health') {
    return NextResponse.json({ status: 'ok', service: 'aelys-systems-api' }, { headers: corsHeaders() })
  }
  return NextResponse.json({ error: 'Not found' }, { status: 404, headers: corsHeaders() })
}

export async function POST(request, { params }) {
  const path = (params?.path || []).join('/')
  try {
    const body = await request.json().catch(() => ({}))
    if (path === 'contact') {
      const { name, email, company, phone, message } = body || {}
      if (!name || !email || !message) {
        return NextResponse.json({ error: 'Champs requis manquants' }, { status: 400, headers: corsHeaders() })
      }

      // 1) Save to MongoDB (non-blocking on failure)
      let saved = false
      try {
        const db = await getDb()
        const doc = {
          id: crypto.randomUUID(),
          name, email,
          company: company || '',
          phone: phone || '',
          message,
          createdAt: new Date().toISOString(),
          source: 'website',
        }
        await db.collection('contact_requests').insertOne(doc)
        saved = true
      } catch (dbErr) {
        console.error('[contact] Mongo save failed:', dbErr?.message)
      }

      // 2) Send email via Infomaniak SMTP
      try {
        const transporter = getTransporter()
        await transporter.sendMail({
          from: `"Aelys Systems – Site Web" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
          to: process.env.SMTP_TO || process.env.SMTP_USER,
          replyTo: email,
          subject: `Nouvelle demande de contact – ${name}${company ? ' (' + company + ')' : ''}`,
          html: buildEmailHtml({ name, email, company, phone, message }),
          text: `Nouvelle demande Aelys Systems\n\nNom: ${name}\nEmail: ${email}\nEntreprise: ${company || '—'}\nTéléphone: ${phone || '—'}\n\nMessage:\n${message}\n`,
        })
      } catch (mailErr) {
        console.error('[contact] SMTP send failed:', mailErr?.message)
        return NextResponse.json(
          { error: 'L’email n’a pas pu être envoyé. Merci de réessayer ou de nous écrire directement à info@aelyssystems.ch.', saved },
          { status: 502, headers: corsHeaders() }
        )
      }

      return NextResponse.json({ ok: true, saved }, { headers: corsHeaders() })
    }
    return NextResponse.json({ error: 'Not found' }, { status: 404, headers: corsHeaders() })
  } catch (e) {
    return NextResponse.json({ error: e?.message || 'Server error' }, { status: 500, headers: corsHeaders() })
  }
}
