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
      { threshold: 0.1 }
    );
    revealRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  return (
    <section id="about" style={{ background: 'var(--navy-light)', position: 'relative', overflow: 'hidden' }}>
      <div className="orb orb-indigo" style={{ width: '700px', height: '700px', top: '-200px', left: '-300px', opacity: 0.3 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* ── INTRO ── */}
        <div className="about-intro reveal" ref={addToRefs} style={{ maxWidth: '760px', marginBottom: '72px' }}>
          <div className="section-tag">About PegBit Studio</div>
          <h2 className="section-heading">
            An AI studio built to<br/>
            <span style={{ color: 'var(--indigo)' }}>ship, discover,</span> and develop.
          </h2>
          <p className="section-sub" style={{ marginBottom: '20px' }}>
            PegBit Studio is the brand name of PegBit Technologies Ltd — a technology company operating as an AI-powered product studio, a frontier research lab, and a talent engine, simultaneously.
          </p>
          <p style={{ fontSize: '15px', fontWeight: 300, lineHeight: 1.75, color: 'var(--text-muted)', maxWidth: '620px' }}>
            We partner with ambitious founders and businesses to architect solutions that dominate markets. Every product we ship, every person we develop, and every line of research we pursue has one purpose: to create things that matter.
          </p>
        </div>

        {/* ── VISION + MISSION ── */}
        <div className="vm-grid reveal" ref={addToRefs} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '24px' }}>
          <div className="glass-panel" style={{ padding: '36px', position: 'relative', overflow: 'hidden', borderRadius: '16px' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, var(--indigo), transparent)' }}></div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--indigo)', marginBottom: '16px', fontWeight: 500 }}>Vision</div>
            <p style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(17px, 2vw, 21px)', fontWeight: 600, lineHeight: 1.5, color: 'var(--white)', maxWidth: '420px' }}>
              To architect intelligent software and AI infrastructure that transforms how businesses operate and how people live.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '36px', position: 'relative', overflow: 'hidden', borderRadius: '16px', background: 'rgba(180,83,9,0.05)', border: '1px solid rgba(180,83,9,0.15)' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, var(--gold), transparent)' }}></div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-light)', marginBottom: '16px', fontWeight: 500 }}>Mission</div>
            <p style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(17px, 2vw, 21px)', fontWeight: 600, lineHeight: 1.5, color: 'var(--white)', maxWidth: '420px' }}>
              To bridge the gap between emerging AI research and real-world application, shipping robust digital products for our internal portfolio and enterprise partners.
            </p>
          </div>
        </div>

        {/* ── VALUES ── */}
        <div className="reveal" ref={addToRefs} style={{ marginTop: '64px' }}>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', fontWeight: 500, color: 'var(--text-dim)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '28px' }}>Our Values</p>
          <div className="values-grid">
            {[
              { icon: '🎯', title: 'Build with Intention', desc: 'Every product shipped and person developed has a clear reason behind it.' },
              { icon: '🏗️', title: 'Own the Outcome', desc: 'Every builder owns something real. There are no passengers at PegBit.' },
              { icon: '⚡', title: 'AI-Native Thinking', desc: 'We design with intelligence from the beginning — not as an afterthought.' },
              { icon: '🚀', title: 'Ship and Learn', desc: 'A live product that teaches us is worth more than a perfect plan.' },
              { icon: '🔭', title: 'Long Thinking', desc: 'Decisions are made with a 10-year view. We build for what lasts.' },
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
