import Link from 'next/link';

export const metadata = {
  title: 'Sydence — Studio Operating System | PegBit Studio',
  description:
    'Sydence is an AI-powered operating system built for digital and creative studios. Automate project management, streamline client delivery, and scale your studio with intelligence.',
  openGraph: {
    title: 'Sydence — Studio Operating System',
    description:
      'Automate your studio. Deliver better work. Sydence is the AI-powered OS for digital agencies.',
    url: 'https://pegbitstudio.com/sydence',
    images: [{ url: '/sydence-mockup.png' }],
  },
};

export default function SydencePage() {
  return (
    <>
      {/* ── NAV ── */}
      <nav id="navbar" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, padding: '20px 0', transition: 'all 0.3s' }}>
        <div className="container">
          <div className="nav-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Link href="/" className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '17px', textDecoration: 'none', color: 'var(--white)' }}>
              <span style={{ color: 'var(--indigo)', fontSize: '22px' }}>⬡</span>
              PegBit Studio
            </Link>
            <Link href="/#products" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: 'var(--text-dim)', textDecoration: 'none', letterSpacing: '0.05em', transition: 'color 0.2s' }}>
              ← Back to Studio
            </Link>
          </div>
        </div>
      </nav>

      <main style={{ paddingTop: '80px' }}>

        {/* ── HERO ── */}
        <section style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', background: 'var(--navy)', position: 'relative', overflow: 'hidden', padding: '100px 0 80px' }}>
          <div className="orb orb-indigo" style={{ width: '700px', height: '700px', top: '-200px', right: '-200px', position: 'absolute', opacity: 0.5 }}></div>
          <div className="orb orb-gold" style={{ width: '400px', height: '400px', bottom: '-100px', left: '-100px', position: 'absolute', opacity: 0.3 }}></div>

          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', fontWeight: 500, color: 'var(--indigo)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '28px', padding: '6px 14px', border: '1px solid rgba(79,70,229,0.3)', borderRadius: '20px', background: 'rgba(79,70,229,0.08)' }}>
              <span style={{ width: '6px', height: '6px', background: 'var(--indigo)', borderRadius: '50%', animation: 'pulse 2s ease infinite' }}></span>
              Currently in Product Testing
            </div>

            <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(48px, 7vw, 84px)', fontWeight: 800, lineHeight: 1.0, letterSpacing: '-0.04em', marginBottom: '28px' }}>
              <span style={{ display: 'block' }}>Your studio.</span>
              <span style={{ color: 'var(--indigo)', display: 'block' }}>Automated.</span>
            </h1>

            <p style={{ fontSize: '18px', fontWeight: 300, lineHeight: 1.75, color: 'var(--text-dim)', maxWidth: '580px', marginBottom: '20px' }}>
              Sydence is an AI-powered operating system built specifically for digital and creative studios. It automates project management, centralises client communication, and gives your team the intelligence to deliver faster — without the chaos.
            </p>
            <p style={{ fontSize: '15px', fontWeight: 300, lineHeight: 1.75, color: 'var(--text-muted)', maxWidth: '520px', marginBottom: '48px' }}>
              Stop duct-taping tools together. Sydence is the single system your studio runs on.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <a href="#waitlist" className="btn-primary">
                Join the Waitlist
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#features" className="btn-ghost">See How It Works</a>
            </div>
          </div>
        </section>

        {/* ── MOCKUP IMAGE ── */}
        <section style={{ background: 'var(--navy-light)', padding: '0', overflow: 'hidden' }}>
          <div className="container">
            <div style={{ maxWidth: '960px', margin: '0 auto', transform: 'translateY(-60px)', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border-accent)', boxShadow: '0 40px 120px rgba(79,70,229,0.2)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/sydence-mockup.png"
                alt="Sydence Dashboard Preview"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
          </div>
        </section>

        {/* ── THE PROBLEM ── */}
        <section id="features" style={{ background: 'var(--navy-light)', paddingTop: '0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 64px' }}>
              <div className="section-tag" style={{ justifyContent: 'center' }}>The Problem</div>
              <h2 className="section-heading" style={{ textAlign: 'center' }}>
                Studios run on<br/><span style={{ color: 'var(--indigo)' }}>20 different tabs.</span>
              </h2>
              <p className="section-sub" style={{ textAlign: 'center', margin: '0 auto' }}>
                Slack for updates. Trello for tasks. Notion for docs. Sheets for timelines. WhatsApp for clients. Every project is a coordination nightmare. Sydence replaces all of it.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '80px' }}>
              {[
                { icon: '🗂️', color: 'var(--indigo)', bg: 'rgba(79,70,229,0.1)', title: 'Unified Project Board', desc: 'All your active projects, tasks, milestones, and deadlines in one intelligent kanban workspace. No more context switching.' },
                { icon: '🤖', color: 'var(--teal)', bg: 'var(--teal-dim)', title: 'AI Project Assistant', desc: 'An AI co-pilot that drafts briefs, writes status updates, flags overdue tasks, and surfaces risks before they become problems.' },
                { icon: '📬', color: 'var(--gold-light)', bg: 'rgba(180,83,9,0.1)', title: 'Client Delivery Hub', desc: 'A branded client portal for file delivery, approvals, and feedback. Clients stay informed. Your inbox stays clean.' },
                { icon: '⏱️', color: '#a78bfa', bg: 'rgba(167,139,250,0.1)', title: 'Time & Billing Tracker', desc: 'Log hours, generate invoices, and track retainer usage automatically. Know your studio\'s profitability at a glance.' },
                { icon: '📊', color: 'var(--teal)', bg: 'var(--teal-dim)', title: 'Studio Intelligence Dashboard', desc: 'Understand capacity, team velocity, and client load across every active engagement — all in one view.' },
                { icon: '🔗', color: 'var(--indigo)', bg: 'rgba(79,70,229,0.1)', title: 'Tool Integrations', desc: 'Sydence connects with the tools you already use — Figma, Slack, Google Drive, and more — so you never lose context.' },
              ].map((f, i) => (
                <div key={i} className="glass-panel" style={{ padding: '28px', borderRadius: '12px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: f.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', marginBottom: '16px' }}>{f.icon}</div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '16px', fontWeight: 700, marginBottom: '8px', color: f.color }}>{f.title}</div>
                  <p style={{ fontSize: '13px', fontWeight: 300, lineHeight: 1.65, color: 'var(--text-dim)' }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHO IT'S FOR ── */}
        <div className="divider"></div>
        <section style={{ background: 'var(--navy)', padding: '80px 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
              <div>
                <div className="section-tag">Built For</div>
                <h2 className="section-heading">Who runs on Sydence?</h2>
                <p className="section-sub">Sydence is purpose-built for digital, creative, and tech studios — teams that manage multiple client projects at once and need more than a generic project tool.</p>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Digital & Creative Agencies', 'Software Development Studios', 'Branding & Design Firms', 'Marketing & Content Studios', 'Independent Freelance Teams'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', fontWeight: 400, color: 'var(--text-dim)' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--indigo)', flexShrink: 0 }}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── WAITLIST ── */}
        <div className="divider"></div>
        <section id="waitlist" style={{ background: 'var(--navy)', padding: '100px 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div className="orb orb-indigo" style={{ width: '600px', height: '600px', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', opacity: 0.2, position: 'absolute' }}></div>
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ maxWidth: '620px', margin: '0 auto' }}>
              <div className="section-tag" style={{ justifyContent: 'center' }}>Early Access</div>
              <h2 className="section-heading" style={{ textAlign: 'center', marginBottom: '16px' }}>
                Be the first to<br/><span style={{ color: 'var(--indigo)' }}>run on Sydence.</span>
              </h2>
              <p className="section-sub" style={{ textAlign: 'center', margin: '0 auto 40px' }}>
                Sydence is currently in active product testing. Join the waitlist and get early access, founding-user pricing, and a direct line to the team building it.
              </p>

              <div className="glass-panel" style={{ padding: '36px', borderRadius: '16px', marginBottom: '24px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, var(--indigo), #818CF8)' }}></div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '12px', alignItems: 'center' }}>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '16px', fontWeight: 500, color: 'var(--white)', textAlign: 'left' }}>
                    Ready to get started?
                    <div style={{ fontSize: '13px', fontWeight: 300, color: 'var(--text-dim)', marginTop: '4px' }}>Send us an email with your studio name and role.</div>
                  </div>
                  <a
                    href="mailto:info@pegbitstudio.com?subject=Sydence Waitlist — I want early access&body=Hi PegBit team,%0A%0AI'd like to join the Sydence waitlist.%0A%0AStudio/Company: %0ARole: %0ANo. of team members: %0A%0ALooking forward to hearing from you."
                    className="btn-primary"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    Join Waitlist →
                  </a>
                </div>
              </div>

              <p style={{ fontSize: '12px', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.05em', color: 'var(--text-muted)' }}>
                No spam. No commitment. Just early access when we go live.
              </p>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{ background: 'var(--navy-mid)', borderTop: '1px solid var(--border)', padding: '32px 0' }}>
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
              <Link href="/" style={{ fontFamily: "'Syne', sans-serif", fontSize: '15px', fontWeight: 600, color: 'var(--text-dim)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: 'var(--indigo)', fontSize: '18px' }}>⬡</span> PegBit Studio
              </Link>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Sydence is a product of PegBit Technologies Ltd. All rights reserved © 2026.</p>
            </div>
          </div>
        </footer>

      </main>
    </>
  );
}
