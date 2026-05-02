'use client'
import { useEffect, useRef } from 'react';

export default function AboutSection() {
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
      { threshold: 0.08 }
    );
    revealRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  return (
    <section id="about" style={{ background: 'var(--navy-light)', position: 'relative', overflow: 'hidden', padding: '120px 0' }}>
      <div className="orb orb-indigo" style={{ width: '600px', height: '600px', top: '-150px', left: '-250px', opacity: 0.25 }}></div>
      <div className="orb orb-gold" style={{ width: '400px', height: '400px', bottom: '-100px', right: '-150px', opacity: 0.15 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* ── MANIFESTO ROW ── */}
        <div className="about-manifesto reveal" ref={addToRefs}>
          <div className="section-tag">About PegBit Studio</div>
          <div className="manifesto-layout">
            <h2 className="manifesto-heading">
              We build AI products<br/>
              <span style={{ color: 'var(--indigo)' }}>for the next decade</span><br/>
              of Africa and beyond.
            </h2>
            <div className="manifesto-right">
              <p style={{ fontSize: '17px', fontWeight: 300, lineHeight: 1.8, color: 'var(--text-dim)', marginBottom: '24px' }}>
                PegBit Studio is an AI-powered product studio — simultaneously building proprietary software, conducting frontier research, and developing the engineers who will define the next wave of African technology.
              </p>
              <p style={{ fontSize: '15px', fontWeight: 300, lineHeight: 1.8, color: 'var(--text-muted)' }}>
                We partner with ambitious businesses to architect solutions that last. Every product we ship and every partnership we take on is designed with one standard: does it matter in ten years?
              </p>
            </div>
          </div>
        </div>

        {/* ── IDENTITY STATS ── */}
        <div className="about-stats reveal" ref={addToRefs}>
          {[
            { value: '3', label: 'AI Products in Pipeline' },
            { value: '2026', label: 'Founded' },
            { value: 'Africa', label: 'Primary Market' },
            { value: '10yr', label: 'Thinking Horizon' },
          ].map((s, i) => (
            <div key={i} className="about-stat-item">
              <div className="about-stat-value">{s.value}</div>
              <div className="about-stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* ── DIVIDER ── */}
        <div className="divider" style={{ margin: '72px 0' }}></div>

        {/* ── VISION + MISSION ── */}
        <div className="vm-grid reveal" ref={addToRefs}>
          <div className="vm-card" style={{ borderTop: '2px solid var(--indigo)', background: 'rgba(79,70,229,0.04)' }}>
            <div className="vm-label" style={{ color: 'var(--indigo)' }}>Vision</div>
            <p className="vm-text">
              To architect intelligent software and AI infrastructure that transforms how businesses operate and how people live.
            </p>
          </div>
          <div className="vm-card" style={{ borderTop: '2px solid var(--gold)', background: 'rgba(180,83,9,0.04)' }}>
            <div className="vm-label" style={{ color: 'var(--gold-light)' }}>Mission</div>
            <p className="vm-text">
              To bridge the gap between emerging AI research and real-world application — shipping robust digital products for our internal portfolio and enterprise partners alike.
            </p>
          </div>
        </div>

        {/* ── VALUES ── */}
        <div className="reveal" ref={addToRefs} style={{ marginTop: '72px' }}>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', fontWeight: 500, color: 'var(--text-muted)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '32px' }}>
            Our Values
          </p>
          <div className="values-grid">
            {[
              { icon: '🎯', title: 'Build with Intention', desc: 'Every product shipped and person developed has a clear reason behind it.' },
              { icon: '🏗️', title: 'Own the Outcome', desc: 'Every builder owns something real. There are no passengers at PegBit.' },
              { icon: '⚡', title: 'AI-Native Thinking', desc: 'We design with intelligence from the beginning — not as an afterthought.' },
              { icon: '🚀', title: 'Ship and Learn', desc: 'A live product that teaches us is worth more than a perfect plan on paper.' },
              { icon: '🔭', title: 'Long Thinking', desc: 'Every decision is made with a 10-year view. We build for what lasts.' },
            ].map((val, idx) => (
              <div key={idx} className="value-card glass-panel">
                <div style={{ width: '36px', height: '36px', background: 'var(--indigo-glow)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', marginBottom: '14px' }}>
                  {val.icon}
                </div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '14px', fontWeight: 700, marginBottom: '6px' }}>{val.title}</div>
                <div style={{ fontSize: '13px', color: 'var(--text-dim)', lineHeight: 1.6 }}>{val.desc}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
