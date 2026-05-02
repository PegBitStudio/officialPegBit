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
      { threshold: 0.12 }
    );

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <section id="about" style={{ background: 'var(--navy-light)' }}>
      <div className="orb orb-indigo" style={{ width: '600px', height: '600px', top: '-100px', left: '-200px', opacity: 0.4 }}></div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        <div className="section-tag reveal" ref={addToRefs}>About PegBit Studio</div>

        <div className="about-grid">
          <div className="about-left reveal" ref={addToRefs}>
            <h2 className="section-heading">
              An AI studio built to<br/>
              <span style={{ color: 'var(--indigo)' }}>ship, discover,</span><br/>
              and develop.
            </h2>
            <p className="section-sub" style={{ marginBottom: '36px' }}>
              PegBit Studio is the brand name of PegBit Technologies Ltd — a registered technology company operating as an AI-powered product studio, a frontier research lab, and a talent engine, simultaneously.
            </p>
            <p className="section-sub" style={{ fontSize: '15px' }}>
              We don't just write code; we partner with ambitious founders and businesses to architect solutions that dominate markets. Every product we ship, every person we develop, and every line of research we pursue has one purpose: to create things that matter.
            </p>

            <div className="vision-block glass-panel" style={{ marginTop: '36px', background: 'rgba(79,70,229,0.06)', border: '1px solid var(--border-accent)', borderRadius: '12px', padding: '28px', marginBottom: '20px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, var(--indigo), transparent)' }}></div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--indigo)', marginBottom: '12px', fontWeight: 500 }}>Vision</div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '16px', fontWeight: 500, lineHeight: 1.6, color: 'var(--white)' }}>To architect intelligent software and AI infrastructure that transforms how businesses operate and how people live.</div>
            </div>

            <div className="mission-block glass-panel" style={{ background: 'rgba(180,83,9,0.06)', border: '1px solid rgba(180,83,9,0.2)', borderRadius: '12px', padding: '28px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, var(--gold), transparent)' }}></div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-light)', marginBottom: '12px', fontWeight: 500 }}>Mission</div>
              <div style={{ fontSize: '15px', fontWeight: 300, lineHeight: 1.75, color: 'rgba(255,255,255,0.8)' }}>To bridge the gap between emerging AI research and real-world application, shipping robust digital products for our internal portfolio and our enterprise partners.</div>
            </div>
          </div>

          <div className="about-right reveal" ref={addToRefs} style={{ transitionDelay: '0.15s' }}>
            <p style={{ fontFamily: "'Syne', sans-serif", fontSize: '15px', fontWeight: 600, color: 'var(--text-dim)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '20px' }}>Our Values</p>
            <ul className="values-list" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { icon: '🎯', title: 'Build with Intention', desc: 'Every product shipped and person developed has a clear reason behind it.' },
                { icon: '🏗️', title: 'Own the Outcome', desc: 'Every builder owns something real. There are no passengers at PegBit.' },
                { icon: '⚡', title: 'AI-Native Thinking', desc: 'We do not add AI to products. We design with intelligence from the beginning.' },
                { icon: '🚀', title: 'Ship and Learn', desc: 'Working products over perfect plans. A live product that teaches us is worth more.' },
                { icon: '🔭', title: 'Long Thinking', desc: 'Decisions are made with a 10-year view. We build for what lasts.' },
              ].map((val, idx) => (
                <li key={idx} className="glass-panel" style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', padding: '16px 20px', borderRadius: '8px', transition: 'all 0.3s' }}>
                  <div style={{ width: '32px', height: '32px', background: 'var(--indigo-glow)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', flexShrink: 0 }}>
                    {val.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '14px', fontWeight: 600, marginBottom: '3px' }}>{val.title}</div>
                    <div style={{ fontSize: '13px', color: 'var(--text-dim)', lineHeight: 1.5 }}>{val.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
