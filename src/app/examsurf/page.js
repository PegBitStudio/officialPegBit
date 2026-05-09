import Link from 'next/link';
import StudentWaitlist from '@/components/StudentWaitlist';

export const metadata = {
  title: 'ExamSurf — The Smartest Way to Pass JAMB & WAEC | PegBit Studio',
  description:
    'AI-powered exam preparation for Nigerian students. Practice with the real JAMB CBT interface, get personalised coaching from Omos AI, and track your mastery.',
  openGraph: {
    title: 'ExamSurf — AI Exam Preparation',
    description:
      'Study Smarter. Score Higher. The pixel-accurate JAMB simulator and AI coach built for students.',
    url: 'https://pegbitstudio.com/examsurf',
    images: [{ url: '/og-image.png' }], // Placeholder for now
  },
};

export default function ExamSurfPage() {
  return (
    <>
      {/* ── NAV ── */}
      <nav id="navbar" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, padding: '20px 0', background: 'rgba(10,10,26,0.8)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="nav-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Link href="/" className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '17px', textDecoration: 'none', color: 'var(--white)' }}>
              <span style={{ color: 'var(--teal)', fontSize: '22px' }}>⬡</span>
              PegBit Studio
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <Link href="/#products" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: 'var(--text-dim)', textDecoration: 'none', letterSpacing: '0.05em' }}>
                ← Back
              </Link>
              <Link href="https://examsurf.com/demo" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '8px 18px', fontSize: '13px', background: 'var(--teal)', boxShadow: '0 4px 14px rgba(13,148,136,0.2)' }}>
                View Demo →
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main style={{ paddingTop: '80px' }}>

        {/* ── HERO ── */}
        <section style={{ minHeight: '92vh', display: 'flex', alignItems: 'center', background: 'var(--navy)', position: 'relative', overflow: 'hidden', padding: '100px 0 80px' }}>
          <div className="orb orb-teal" style={{ width: '800px', height: '800px', top: '-300px', right: '-300px', position: 'absolute', opacity: 0.45 }}></div>
          <div className="orb orb-indigo" style={{ width: '400px', height: '400px', bottom: '-100px', left: '-100px', position: 'absolute', opacity: 0.25 }}></div>

          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', fontWeight: 500, color: 'var(--teal)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '28px', padding: '6px 14px', border: '1px solid rgba(13,148,136,0.3)', borderRadius: '20px', background: 'rgba(13,148,136,0.08)' }}>
              <span style={{ width: '6px', height: '6px', background: 'var(--teal)', borderRadius: '50%', animation: 'pulse 2s ease infinite', display: 'inline-block' }}></span>
              AI-Powered JAMB & WAEC Preparation
            </div>

            <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(36px, 7vw, 84px)', fontWeight: 800, lineHeight: 1.0, letterSpacing: '-0.04em', marginBottom: '28px' }}>
              <span style={{ display: 'block' }}>Study Smarter.</span>
              <span style={{ color: 'var(--teal)', display: 'block' }}>Score Higher.</span>
              <span style={{ display: 'block' }}>Pass First Time.</span>
            </h1>

            <p style={{ fontSize: '19px', fontWeight: 300, lineHeight: 1.75, color: 'var(--text-dim)', maxWidth: '580px', marginBottom: '48px' }}>
              ExamSurf combines a pixel-accurate JAMB CBT simulator, an AI tutor called Omos, and personalised adaptive coaching — built exclusively for Nigerian students.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="https://examsurf.com/demo" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ background: 'var(--teal)', boxShadow: '0 4px 14px rgba(13,148,136,0.2)' }}>
                View Live Demo
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 18px', borderRadius: '8px', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)', fontSize: '13px', color: 'var(--text-muted)', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.05em' }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--teal)', display: 'inline-block', animation: 'pulse 2s infinite' }}></span>
                App Under Active Testing
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <section style={{ background: 'var(--navy-light)', borderY: '1px solid var(--border)', padding: '60px 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '40px' }}>
              {[
                { value: '17', label: 'Subjects Covered' },
                { value: '10,000+', label: 'Practice Questions' },
                { value: '95%', label: 'Score Improvement' },
                { value: '3', label: 'Exams Supported' },
              ].map((s, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '32px', fontWeight: 800, color: 'var(--white)', marginBottom: '4px' }}>{s.value}</div>
                  <div style={{ fontSize: '10px', fontWeight: 500, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section id="features" style={{ background: 'var(--navy)', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 64px' }}>
              <div className="section-tag" style={{ justifyContent: 'center' }}>Built for Excellence</div>
              <h2 className="section-heading" style={{ textAlign: 'center' }}>
                Built for the Nigerian Student.<br/><span style={{ color: 'var(--teal)' }}>Nothing else comes close.</span>
              </h2>
            </div>

            <div className="responsive-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '20px' }}>
              {[
                { icon: '🤖', title: 'Omos AI Tutor', desc: 'Ask any JAMB or WAEC question. Omos explains it at your level — like a teacher available 24/7.', color: 'var(--teal)' },
                { icon: '💻', title: 'JAMB CBT Simulator', desc: 'Practice on the exact interface used in JAMB centres. Authentic timer, question palette, and calculator.', color: 'var(--indigo)' },
                { icon: '🎯', title: 'Adaptive Coaching', desc: 'Our AI coach identifies your weakest topics and tells you exactly what to focus on next.', color: 'var(--gold-light)' },
                { icon: '📊', title: 'Mastery Tracking', desc: 'A radar chart shows your mastery per subject. No guessing — you always know where you stand.', color: 'var(--teal)' },
                { icon: '📝', title: 'Theory Engine', desc: 'Write theory answers and get AI-powered marking with point-by-point feedback.', color: 'var(--indigo)' },
                { icon: '🏆', title: 'Streaks & Leagues', desc: 'Daily streaks and rankings keep you motivated. The more you practise, the higher you climb.', color: 'var(--gold-light)' },
              ].map((f, i) => (
                <div key={i} className="glass-panel" style={{ padding: '32px', borderRadius: '16px', position: 'relative', overflow: 'hidden' }}>
                   <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(90deg, ${f.color}, transparent)` }}></div>
                  <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginBottom: '20px' }}>{f.icon}</div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '18px', fontWeight: 700, marginBottom: '10px', color: 'var(--white)' }}>{f.title}</div>
                  <p style={{ fontSize: '14px', fontWeight: 300, lineHeight: 1.7, color: 'var(--text-dim)' }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── OMOS SECTION ── */}
        <div className="divider"></div>
        <section style={{ background: 'var(--navy-light)', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
          <div className="orb orb-teal" style={{ width: '600px', height: '600px', top: '50%', right: '-300px', opacity: 0.15 }}></div>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '60px', alignItems: 'center', maxWidth: '1000px', margin: '0 auto' }}>
              <div>
                <div className="section-tag">Proprietary Intelligence</div>
                <h2 className="section-heading">Omos — Your<br/><span style={{ color: 'var(--teal)' }}>Personal AI Coach.</span></h2>
                <p className="section-sub" style={{ marginBottom: '24px' }}>
                  Don\'t just practice questions. Get guided. Omos analyzes every answer you give and builds a custom curriculum for your success.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {['Personalised study plans', 'Instant subject explanations', 'Weekly progress digests', 'Mock exam predictions'].map((t, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--text-dim)' }}>
                      <span style={{ width: '6px', height: '6px', background: 'var(--teal)', borderRadius: '50%' }}></span>{t}
                    </div>
                  ))}
                </div>
              </div>
              <div className="glass-panel" style={{ padding: '40px', borderRadius: '24px', background: 'rgba(13,148,136,0.05)', border: '1px solid rgba(13,148,136,0.2)' }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: 'var(--teal)', marginBottom: '20px', letterSpacing: '0.1em' }}>OMOS TUTOR MODE_</div>
                <div style={{ background: 'rgba(0,0,0,0.3)', padding: '20px', borderRadius: '12px', border: '1px solid var(--border)', marginBottom: '16px' }}>
                  <p style={{ fontSize: '13px', color: 'var(--text-dim)', fontStyle: 'italic' }}>"Omos, I don\'t understand how to calculate the equilibrium constant in this Chemistry question..."</p>
                </div>
                <div style={{ background: 'var(--teal-dim)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(13,148,136,0.3)' }}>
                  <p style={{ fontSize: '13px', color: 'var(--white)', lineHeight: 1.6 }}>"Think of it like a balance scale. When a reaction is at equilibrium, the rate of the forward reaction equals the rate of the reverse reaction..."</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WAITLIST ── */}
        <div className="divider"></div>
        <section id="waitlist" style={{ background: 'var(--navy)', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '60px', alignItems: 'start', maxWidth: '960px', margin: '0 auto' }}>
              <div>
                <div className="section-tag">Early Access</div>
                <h2 className="section-heading" style={{ marginBottom: '16px' }}>
                  Join the<br/><span style={{ color: 'var(--teal)' }}>Student Waitlist.</span>
                </h2>
                <p className="section-sub" style={{ marginBottom: '32px' }}>
                  ExamSurf is currently undergoing private testing. Join the waitlist to be notified when we open the next round of beta access to new users.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--teal-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>🤖</div>
                    <div style={{ fontSize: '14px', color: 'var(--text-dim)' }}>Priority access to <strong>Omos AI Tutor</strong></div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--teal-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>🚀</div>
                    <div style={{ fontSize: '14px', color: 'var(--text-dim)' }}><strong>Beta Testing</strong> notifications</div>
                  </div>
                </div>
              </div>
              <StudentWaitlist />
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{ background: 'var(--navy-mid)', borderTop: '1px solid var(--border)', padding: '40px 0' }}>
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
              <Link href="/" style={{ fontFamily: "'Syne', sans-serif", fontSize: '16px', fontWeight: 600, color: 'var(--white)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: 'var(--teal)', fontSize: '20px' }}>⬡</span> PegBit Studio
              </Link>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>ExamSurf is a product of PegBit Technologies Ltd. All rights reserved © 2026.</p>
            </div>
          </div>
        </footer>

      </main>
    </>
  );
}
