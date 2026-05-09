'use client'
import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function HeroSection() {
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
    <section id="hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '120px 0 80px', overflow: 'hidden' }}>
      <div className="orb orb-indigo hero-orb-1" style={{ width: '700px', height: '700px', top: '-200px', right: '-200px', position: 'absolute' }}></div>
      <div className="orb orb-gold hero-orb-2" style={{ width: '500px', height: '500px', bottom: '-100px', left: '-100px', position: 'absolute' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div 
          className="hero-label reveal" 
          ref={addToRefs}
          style={{ 
            display: 'inline-flex', alignItems: 'center', gap: '8px', 
            fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', fontWeight: 500, 
            color: 'var(--gold-light)', letterSpacing: '0.12em', textTransform: 'uppercase', 
            marginBottom: '28px', padding: '6px 14px', border: '1px solid rgba(180,83,9,0.3)', 
            borderRadius: '20px', background: 'rgba(180,83,9,0.08)' 
          }}
        >
          <span style={{ width: '6px', height: '6px', background: 'var(--gold-light)', borderRadius: '50%', animation: 'pulse 2s ease infinite' }}></span>
          AI-Powered Technology Studio
        </div>

        <h1 
          className="hero-headline reveal" 
          ref={addToRefs}
          style={{ 
            fontFamily: "'Syne', sans-serif", fontSize: 'clamp(36px, 7vw, 88px)', 
            fontWeight: 800, lineHeight: 1.0, letterSpacing: '-0.04em', marginBottom: '32px' 
          }}
        >
          <span style={{ display: 'block' }}>Foundation</span>
          <span style={{ color: 'var(--indigo)', display: 'block' }}>meets</span>
          <span style={{ display: 'block' }}>Frontier.</span>
        </h1>

        <p 
          className="hero-sub reveal" 
          ref={addToRefs}
          style={{ 
            fontSize: '18px', fontWeight: 300, lineHeight: 1.7, color: 'var(--text-dim)', 
            maxWidth: '560px', marginBottom: '48px' 
          }}
        >
          PegBit Studio operates at the intersection of a frontier research lab and a high-velocity product studio. We build proprietary AI products, and we bring that exact same engineering rigor to our enterprise partners.
        </p>

        <div className="hero-actions reveal" ref={addToRefs} style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <Link href="#products" className="btn-primary">
            View Our Products
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link href="#contact" className="btn-ghost">Partner With Us</Link>
        </div>

        <div 
          className="hero-stats reveal" 
          ref={addToRefs}
          style={{ 
            display: 'flex', gap: '40px', marginTop: '72px', paddingTop: '40px', 
            borderTop: '1px solid var(--border)', flexWrap: 'wrap' 
          }}
        >
          <div className="stat-item">
            <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: 700, color: 'var(--white)', letterSpacing: '-0.03em' }}>3</div>
            <div style={{ fontSize: '12px', color: 'var(--text-dim)', letterSpacing: '0.05em', textTransform: 'uppercase', marginTop: '2px' }}>Products in Pipeline</div>
          </div>
          <div className="stat-item">
            <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: 700, color: 'var(--white)', letterSpacing: '-0.03em' }}>AI-First</div>
            <div style={{ fontSize: '12px', color: 'var(--text-dim)', letterSpacing: '0.05em', textTransform: 'uppercase', marginTop: '2px' }}>By Design</div>
          </div>
          <div className="stat-item">
            <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: 700, color: 'var(--white)', letterSpacing: '-0.03em' }}>2026</div>
            <div style={{ fontSize: '12px', color: 'var(--text-dim)', letterSpacing: '0.05em', textTransform: 'uppercase', marginTop: '2px' }}>Year Founded</div>
          </div>
          <div className="stat-item">
            <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: 700, color: 'var(--white)', letterSpacing: '-0.03em' }}>Africa</div>
            <div style={{ fontSize: '12px', color: 'var(--text-dim)', letterSpacing: '0.05em', textTransform: 'uppercase', marginTop: '2px' }}>& Beyond</div>
          </div>
        </div>
      </div>
    </section>
  );
}
