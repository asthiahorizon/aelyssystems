import { NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'

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
      return NextResponse.json({ ok: true, id: doc.id }, { headers: corsHeaders() })
    }
    return NextResponse.json({ error: 'Not found' }, { status: 404, headers: corsHeaders() })
  } catch (e) {
    return NextResponse.json({ error: e?.message || 'Server error' }, { status: 500, headers: corsHeaders() })
  }
}
