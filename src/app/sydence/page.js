import Link from 'next/link';
import WaitlistForm from '@/components/WaitlistForm';

export const metadata = {
  title: 'Sydence — Run Your Studio With Clarity | PegBit Studio',
  description:
    'Projects. Team. Ideas. Intelligence. Sydence is a Studio Operating System built for creative studios that move fast and think clearly. Currently in product testing.',
  openGraph: {
    title: 'Sydence — Studio Operating System',
    description:
      'Run your studio with clarity. Projects, standups, ideas, and AI — one system built for creative teams.',
    url: 'https://pegbitstudio.com/sydence',
    images: [{ url: '/sydence-mockup.png' }],
  },
};

export default function SydencePage() {
  return (
    <>
      {/* ── NAV ── */}
      <nav id="navbar" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, padding: '20px 0', background: 'rgba(10,10,26,0.8)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="nav-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Link href="/" className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '17px', textDecoration: 'none', color: 'var(--white)' }}>
              <span style={{ color: 'var(--indigo)', fontSize: '22px' }}>⬡</span>
              PegBit Studio
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <Link href="/#products" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: 'var(--text-dim)', textDecoration: 'none', letterSpacing: '0.05em' }}>
                ← Back
              </Link>
              <a href="https://sydence.vercel.app/signup" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '8px 18px', fontSize: '13px' }}>
                Get Started Free →
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main style={{ paddingTop: '80px' }}>

        {/* ── HERO ── */}
        <section style={{ minHeight: '92vh', display: 'flex', alignItems: 'center', background: 'var(--navy)', position: 'relative', overflow: 'hidden', padding: '100px 0 80px' }}>
          <div className="orb orb-indigo" style={{ width: '800px', height: '800px', top: '-300px', right: '-300px', position: 'absolute', opacity: 0.45 }}></div>
          <div className="orb orb-gold" style={{ width: '400px', height: '400px', bottom: '-100px', left: '-100px', position: 'absolute', opacity: 0.25 }}></div>

          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', fontWeight: 500, color: 'var(--indigo)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '28px', padding: '6px 14px', border: '1px solid rgba(79,70,229,0.3)', borderRadius: '20px', background: 'rgba(79,70,229,0.08)' }}>
              <span style={{ width: '6px', height: '6px', background: 'var(--indigo)', borderRadius: '50%', animation: 'pulse 2s ease infinite', display: 'inline-block' }}></span>
              Currently in Product Testing · by PegBit Studio
            </div>

            <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(46px, 7vw, 84px)', fontWeight: 800, lineHeight: 1.0, letterSpacing: '-0.04em', marginBottom: '28px' }}>
              <span style={{ display: 'block' }}>Run your studio</span>
              <span style={{ color: 'var(--indigo)', display: 'block' }}>with clarity.</span>
            </h1>

            <p style={{ fontSize: '19px', fontWeight: 300, lineHeight: 1.75, color: 'var(--text-dim)', maxWidth: '580px', marginBottom: '48px' }}>
              Projects. Team. Ideas. Intelligence. One system built for creative studios that move fast and think clearly.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <a href="#waitlist" className="btn-primary">
                Join the Waitlist
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 18px', borderRadius: '8px', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)', fontSize: '13px', color: 'var(--text-muted)', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.05em' }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#FBBF24', display: 'inline-block', animation: 'pulse 2s infinite' }}></span>
                App Under Active Testing
              </div>
            </div>
          </div>
        </section>

        {/* ── DASHBOARD SCREENSHOT ── */}
        <section style={{ background: 'var(--navy-light)', padding: '0', overflow: 'hidden' }}>
          <div className="container">
            <div style={{ maxWidth: '980px', margin: '0 auto', transform: 'translateY(-60px)', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border-accent)', boxShadow: '0 40px 120px rgba(79,70,229,0.25)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/sydence-mockup.png" alt="Sydence Studio OS Dashboard" style={{ width: '100%', display: 'block' }} />
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section id="features" style={{ background: 'var(--navy-light)', paddingTop: '0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 64px' }}>
              <div className="section-tag" style={{ justifyContent: 'center' }}>Everything Your Studio Needs</div>
              <h2 className="section-heading" style={{ textAlign: 'center' }}>
                Built around how<br/><span style={{ color: 'var(--indigo)' }}>creative teams actually work.</span>
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '80px' }}>
              {[
                { icon: '🗂️', color: 'var(--indigo)', bg: 'rgba(79,70,229,0.1)', title: 'Project Board', desc: 'Kanban and pipeline views for every project. Track status, owners, and deadlines in one glance — no spreadsheets required.' },
                { icon: '🤖', color: 'var(--teal)', bg: 'var(--teal-dim)', title: 'Omos AI', desc: 'Ask questions, log standups, create projects — all by chat. Omos reads your live studio data and acts on your commands.' },
                { icon: '💡', color: 'var(--gold-light)', bg: 'rgba(180,83,9,0.1)', title: 'Idea Lab', desc: 'Capture, vote, and promote ideas before they slip away. The best ones get escalated directly into active projects.' },
                { icon: '🧑‍💻', color: '#a78bfa', bg: 'rgba(167,139,250,0.1)', title: 'Team Standups', desc: 'Async daily check-ins that keep the whole studio aligned — no meetings required. Omos reads and summarises them.' },
                { icon: '🔬', color: 'var(--teal)', bg: 'var(--teal-dim)', title: 'Colony Lab', desc: 'R&D experiments tracked separately from delivery work. Run hypotheses, measure results, and ship what you learn.' },
                { icon: '📚', color: 'var(--indigo)', bg: 'rgba(79,70,229,0.1)', title: 'Knowledge Base', desc: 'Upload docs or link Google Drive files. Omos reads them and surfaces the right answer when you ask a question.' },
              ].map((f, i) => (
                <div key={i} className="glass-panel" style={{ padding: '28px', borderRadius: '12px', transition: 'transform 0.2s' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: f.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', marginBottom: '16px' }}>{f.icon}</div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '16px', fontWeight: 700, marginBottom: '8px', color: f.color }}>{f.title}</div>
                  <p style={{ fontSize: '13px', fontWeight: 300, lineHeight: 1.65, color: 'var(--text-dim)' }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── UP AND RUNNING ── */}
        <div className="divider"></div>
        <section style={{ background: 'var(--navy)', padding: '80px 0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto 56px' }}>
              <div className="section-tag" style={{ justifyContent: 'center' }}>Simple Setup</div>
              <h2 className="section-heading" style={{ textAlign: 'center' }}>Up and running<br/><span style={{ color: 'var(--indigo)' }}>in minutes.</span></h2>
              <p className="section-sub" style={{ textAlign: 'center', margin: '0 auto' }}>No lengthy setup. No training required.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', maxWidth: '900px', margin: '0 auto' }}>
              {[
                { step: '01', title: 'Create your studio', desc: 'Sign up and name your workspace. Your Studio OS is live in under two minutes.' },
                { step: '02', title: 'Invite your team', desc: 'Share a link — that\'s it. No email servers, no config, no external tools needed.' },
                { step: '03', title: 'Omos takes the wheel', desc: 'The AI reads your live data, flags anomalies, delivers weekly digests, and acts on your commands.' },
              ].map((s, i) => (
                <div key={i} className="glass-panel" style={{ padding: '28px', borderRadius: '12px' }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'var(--indigo)', letterSpacing: '0.15em', marginBottom: '12px' }}>{s.step}</div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '17px', fontWeight: 700, marginBottom: '8px' }}>{s.title}</div>
                  <p style={{ fontSize: '13px', fontWeight: 300, lineHeight: 1.65, color: 'var(--text-dim)' }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── OMOS SPOTLIGHT ── */}
        <div className="divider"></div>
        <section style={{ background: 'var(--navy-light)', padding: '80px 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center', maxWidth: '960px', margin: '0 auto' }}>
              <div>
                <div className="section-tag">AI at the Core</div>
                <h2 className="section-heading">Meet Omos —<br/><span style={{ color: 'var(--teal)' }}>your studio AI.</span></h2>
                <p className="section-sub" style={{ marginBottom: '20px' }}>Ask it anything about your studio. Log your standup. Create a project. Flag a blocker.</p>
                <p style={{ fontSize: '15px', fontWeight: 300, lineHeight: 1.75, color: 'var(--text-muted)' }}>Omos reads your live data and your uploaded knowledge base to give you real answers — not generic AI fluff.</p>
              </div>
              <div className="glass-panel" style={{ padding: '28px', borderRadius: '16px', background: 'rgba(13,148,136,0.05)', border: '1px solid rgba(13,148,136,0.2)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, var(--teal), transparent)' }}></div>
                {[
                  { q: false, text: 'How many projects are overdue?' },
                  { q: true, text: 'You have 2 overdue projects: Brand Revolution (3 days) and API Integration (1 day). Want me to flag them to the team?' },
                  { q: false, text: 'Log my standup: shipped the auth module, reviewing PRs today.' },
                  { q: true, text: 'Standup logged ✓. Flagged to your team channel. Great progress on auth!' },
                ].map((m, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: m.q ? 'flex-start' : 'flex-end', marginBottom: '12px' }}>
                    <div style={{ maxWidth: '80%', padding: '10px 14px', borderRadius: m.q ? '4px 12px 12px 12px' : '12px 4px 12px 12px', background: m.q ? 'rgba(13,148,136,0.15)' : 'rgba(79,70,229,0.2)', fontSize: '13px', lineHeight: 1.5, color: m.q ? 'var(--teal)' : 'var(--white)', border: `1px solid ${m.q ? 'rgba(13,148,136,0.2)' : 'rgba(79,70,229,0.2)'}` }}>
                      {m.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section id="waitlist" style={{ background: 'var(--navy)', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
          <div className="orb orb-indigo" style={{ width: '600px', height: '600px', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', opacity: 0.2, position: 'absolute' }}></div>
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'start', maxWidth: '960px', margin: '0 auto' }}>
              <div>
                <div className="section-tag">Early Access</div>
                <h2 className="section-heading" style={{ marginBottom: '16px' }}>
                  Be the first to<br/><span style={{ color: 'var(--indigo)' }}>run on Sydence.</span>
                </h2>
                <p className="section-sub" style={{ marginBottom: '32px' }}>
                  Sydence is currently in active product testing. Join the waitlist to get early access, founding-user pricing, and a direct line to the team building it.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    '🎟️ Priority early access when we launch',
                    '💰 Founding-user pricing locked in',
                    '🛠️ Direct feedback line to the PegBit team',
                    '🚀 Onboarding support included',
                  ].map((perk, i) => (
                    <div key={i} style={{ fontSize: '14px', color: 'var(--text-dim)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>
              <WaitlistForm />
            </div>
            <p style={{ fontSize: '12px', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.05em', color: 'var(--text-muted)', textAlign: 'center', marginTop: '32px' }}>
              No spam. No commitment. Founding access when we launch publicly.
            </p>
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
