import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Aelys Systems — Automatisation IA, Business Analyse & Développement métier pour PME suisses'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#0A1633',
          backgroundImage:
            'radial-gradient(ellipse 80% 60% at 20% 20%, rgba(37,99,235,0.35) 0%, rgba(10,22,51,0) 60%), radial-gradient(ellipse 70% 60% at 90% 90%, rgba(59,130,246,0.25) 0%, rgba(10,22,51,0) 60%)',
          padding: '72px 88px',
          fontFamily: 'system-ui, -apple-system, Inter, sans-serif',
        }}
      >
        {/* Brand row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: 'linear-gradient(135deg, #2563EB 0%, #1E3A8A 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 30px rgba(37,99,235,0.4)',
            }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M13 2 L4 14 H10 L9 22 L20 10 H14 Z" fill="#FFFFFF" />
            </svg>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ color: '#fff', fontSize: 30, fontWeight: 600, letterSpacing: -0.5 }}>
              Aelys Systems
            </div>
            <div style={{ color: '#93c5fd', fontSize: 14, letterSpacing: 3, textTransform: 'uppercase' }}>
              Swiss · IA & Business Analyse
            </div>
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            marginTop: 72,
            color: '#fff',
            fontSize: 64,
            lineHeight: 1.1,
            fontWeight: 600,
            letterSpacing: -1.5,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div>Automatisation IA, Business Analyse</div>
          <div>
            <span style={{ color: '#fff' }}>et </span>
            <span style={{ color: '#93c5fd' }}>développement métier</span>
          </div>
          <div style={{ color: '#cbd5e1', fontSize: 36, fontWeight: 500, marginTop: 12 }}>
            pour les PME suisses
          </div>
        </div>

        {/* Bottom pills */}
        <div style={{ marginTop: 'auto', display: 'flex', gap: 14, alignItems: 'center' }}>
          {['Business Analyse', 'Automatisation IA', 'Dev Web · Mobile · Desktop'].map((t) => (
            <div
              key={t}
              style={{
                padding: '10px 18px',
                borderRadius: 999,
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: '#dbeafe',
                fontSize: 20,
              }}
            >
              {t}
            </div>
          ))}
          <div style={{ flex: 1 }} />
          <div style={{ color: '#64748b', fontSize: 20 }}>aelyssystems.ch</div>
        </div>
      </div>
    ),
    { ...size }
  )
}
