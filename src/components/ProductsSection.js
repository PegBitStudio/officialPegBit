'use client'
import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function ProductsSection() {
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
    <>
      <div className="divider"></div>
      <section id="products" style={{ background: 'var(--navy-light)', position: 'relative', overflow: 'hidden' }}>
        <div className="orb orb-gold" style={{ width: '600px', height: '600px', bottom: '-100px', left: '-200px', opacity: 0.5 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>

          <div className="products-intro" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '40px', alignItems: 'end', marginBottom: '64px' }}>
            <div className="reveal" ref={addToRefs}>
              <div className="section-tag">Our Products</div>
              <h2 className="section-heading">Intelligent products<br/>built for real problems.</h2>
            </div>
            <div className="reveal" ref={addToRefs} style={{ transitionDelay: '0.1s' }}>
              <p className="section-sub">
                Every product in our pipeline is AI-native by design — not retrofitted. Each one targets an underserved, high-impact problem space in Africa and beyond.
              </p>
            </div>
          </div>

          <div className="products-grid responsive-grid">

            {/* Sydence */}
            <div className="product-card glass-panel reveal" ref={addToRefs} style={{ position: 'relative', overflow: 'hidden', transition: 'all 0.4s ease', display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '28px 28px 20px', borderBottom: '1px solid var(--border)', borderTop: '3px solid var(--indigo)' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500, padding: '4px 10px', borderRadius: '20px', marginBottom: '16px', background: 'rgba(79,70,229,0.12)', color: 'var(--indigo)', border: '1px solid rgba(79,70,229,0.2)' }}>
                  <span style={{ width: '5px', height: '5px', background: 'currentColor', borderRadius: '50%', display: 'inline-block', animation: 'pulse 2s infinite' }}></span>
                  Product Testing
                </div>
                <div style={{ width: '52px', height: '52px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginBottom: '16px', background: 'rgba(79,70,229,0.12)' }}>⬡</div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '22px', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '4px' }}>Sydence</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.05em' }}>Studio Operating System</div>
              </div>
              <div style={{ padding: '20px 28px 28px', flexGrow: 1 }}>
                <p style={{ fontSize: '14px', fontWeight: 300, lineHeight: 1.7, color: 'var(--text-dim)' }}>An AI-powered studio operating system that automates project management and client delivery workflows for digital and creative agencies.</p>
              </div>
              <div style={{ padding: '0 28px 24px' }}>
                <Link href="/sydence" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 500, color: 'var(--indigo)', transition: 'gap 0.2s', cursor: 'pointer', textDecoration: 'none' }}>Learn More & Join Waitlist →</Link>
              </div>
            </div>

            {/* ExamSurf */}
            <div className="product-card glass-panel reveal" ref={addToRefs} style={{ transitionDelay: '0.1s', position: 'relative', overflow: 'hidden', transition: 'all 0.4s ease', display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '28px 28px 20px', borderBottom: '1px solid var(--border)', borderTop: '3px solid var(--teal)' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500, padding: '4px 10px', borderRadius: '20px', marginBottom: '16px', background: 'rgba(13,148,136,0.12)', color: 'var(--teal)', border: '1px solid rgba(13,148,136,0.2)' }}>
                  <span style={{ width: '5px', height: '5px', background: 'currentColor', borderRadius: '50%', display: 'inline-block' }}></span>
                  Coming Soon
                </div>
                <div style={{ width: '52px', height: '52px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginBottom: '16px', background: 'rgba(13,148,136,0.12)' }}>📚</div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '22px', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '4px' }}>ExamSurf</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.05em' }}>AI Exam Preparation</div>
              </div>
              <div style={{ padding: '20px 28px 28px', flexGrow: 1 }}>
                <p style={{ fontSize: '14px', fontWeight: 300, lineHeight: 1.7, color: 'var(--text-dim)' }}>An AI-driven exam preparation platform for JAMB and WAEC, generating personalised practice questions powered by ten years of exam data.</p>
              </div>
              <div style={{ padding: '0 28px 24px' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 500, color: 'var(--teal)', transition: 'gap 0.2s', cursor: 'pointer' }}>In Development →</span>
              </div>
            </div>

            {/* Omos */}
            <div className="product-card glass-panel reveal" ref={addToRefs} style={{ transitionDelay: '0.2s', position: 'relative', overflow: 'hidden', transition: 'all 0.4s ease', display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '28px 28px 20px', borderBottom: '1px solid var(--border)', borderTop: '3px solid var(--gold)' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500, padding: '4px 10px', borderRadius: '20px', marginBottom: '16px', background: 'rgba(180,83,9,0.12)', color: 'var(--gold)', border: '1px solid rgba(180,83,9,0.2)' }}>
                  <span style={{ width: '5px', height: '5px', background: 'currentColor', borderRadius: '50%', display: 'inline-block', animation: 'pulse 2s infinite' }}></span>
                  Waitlist Open
                </div>
                <div style={{ width: '52px', height: '52px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginBottom: '16px', background: 'rgba(180,83,9,0.12)' }}>🤖</div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '22px', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '4px' }}>Omos</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.05em' }}>Proprietary AI Infrastructure</div>
              </div>
              <div style={{ padding: '20px 28px 28px', flexGrow: 1 }}>
                <p style={{ fontSize: '14px', fontWeight: 300, lineHeight: 1.7, color: 'var(--text-dim)' }}>PegBit's proprietary AI infrastructure layer — currently powering Sydence and ExamSurf, designed to eventually serve as a standalone enterprise AI service.</p>
              </div>
              <div style={{ padding: '0 28px 24px' }}>
                <Link href="https://omosai.dev" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 500, color: 'var(--gold-light)', transition: 'gap 0.2s', cursor: 'pointer', textDecoration: 'none' }}>Join Waitlist →</Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
