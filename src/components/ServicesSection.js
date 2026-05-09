'use client'
import { useEffect, useRef } from 'react';

export default function ServicesSection() {
  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    revealRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  return (
    <>
      <div className="divider"></div>
      <section id="services" style={{ background: 'var(--navy)', position: 'relative', overflow: 'hidden' }}>
        <div className="orb orb-teal" style={{ width: '500px', height: '500px', top: 0, right: '-150px', opacity: 0.3 }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>

          {/* ── HEADER ── */}
          <div className="services-header reveal" ref={addToRefs}>
            <div>
              <div className="section-tag">What We Do</div>
              <h2 className="section-heading">
                Three capabilities.<br/>
                <span style={{ color: 'var(--indigo)' }}>One studio.</span>
              </h2>
            </div>
            <p className="section-sub services-desc">
              PegBit Studio is structured around three interlocking capabilities — not separate departments. Together, they give us an unfair advantage: proprietary research that feeds our products, and real-world client work that sharpens our engineering.
            </p>
          </div>

          {/* ── CARDS ── */}
          <div className="services-cards responsive-grid">

            {/* Product Studio */}
            <div className="service-card glass-panel reveal" ref={addToRefs} style={{ padding: '40px 32px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, var(--indigo), transparent)' }}></div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: 'var(--text-muted)', letterSpacing: '0.15em', marginBottom: '24px' }}>01</div>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', marginBottom: '20px', background: 'var(--indigo-glow)' }}>📦</div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '20px', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '8px' }}>Product Studio</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'var(--indigo)', letterSpacing: '0.08em', marginBottom: '16px' }}>Build & Ship</div>
              <p style={{ fontSize: '14px', fontWeight: 300, lineHeight: 1.75, color: 'var(--text-dim)', marginBottom: '24px' }}>
                We design, engineer, and ship AI-native software products — both for our own portfolio and for enterprise clients who need a technical partner that operates at startup velocity.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {['AI product development', 'Client software commissions', 'Rapid prototyping'].map((t, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'var(--text-muted)' }}>
                    <span style={{ width: '4px', height: '4px', background: 'var(--indigo)', borderRadius: '50%', flexShrink: 0 }}></span>{t}
                  </div>
                ))}
              </div>
            </div>

            {/* R&D Lab */}
            <div className="service-card glass-panel reveal" ref={addToRefs} style={{ transitionDelay: '0.1s', padding: '40px 32px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, var(--gold), transparent)' }}></div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: 'var(--text-muted)', letterSpacing: '0.15em', marginBottom: '24px' }}>02</div>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', marginBottom: '20px', background: 'rgba(180,83,9,0.12)' }}>🔬</div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '20px', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '8px' }}>R&D Lab</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'var(--gold-light)', letterSpacing: '0.08em', marginBottom: '16px' }}>Research & Frontier</div>
              <p style={{ fontSize: '14px', fontWeight: 300, lineHeight: 1.75, color: 'var(--text-dim)', marginBottom: '24px' }}>
                We research, prototype, and stress-test ideas at the frontier of AI — generating proprietary intellectual property that feeds directly into our product pipeline and informs how we solve client problems.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {['Applied AI research', 'Proprietary IP development', 'Emerging technology exploration'].map((t, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'var(--text-muted)' }}>
                    <span style={{ width: '4px', height: '4px', background: 'var(--gold)', borderRadius: '50%', flexShrink: 0 }}></span>{t}
                  </div>
                ))}
              </div>
            </div>

            {/* Studio Fellowship */}
            <div className="service-card glass-panel reveal" ref={addToRefs} style={{ transitionDelay: '0.2s', padding: '40px 32px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, var(--teal), transparent)' }}></div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: 'var(--text-muted)', letterSpacing: '0.15em', marginBottom: '24px' }}>03</div>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', marginBottom: '20px', background: 'var(--teal-dim)' }}>🧱</div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '20px', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '8px' }}>Studio Fellowship</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'var(--teal)', letterSpacing: '0.08em', marginBottom: '16px' }}>People & Development</div>
              <p style={{ fontSize: '14px', fontWeight: 300, lineHeight: 1.75, color: 'var(--text-dim)', marginBottom: '24px' }}>
                We don't hire for roles — we develop builders. Every person inside PegBit holds real ownership, ships real products, and grows in a structured environment designed to produce senior engineers and product leaders.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {['Builder development programme', 'Real-world product ownership', 'Senior engineering pipeline'].map((t, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'var(--text-muted)' }}>
                    <span style={{ width: '4px', height: '4px', background: 'var(--teal)', borderRadius: '50%', flexShrink: 0 }}></span>{t}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
