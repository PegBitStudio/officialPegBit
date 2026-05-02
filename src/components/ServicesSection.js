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
      <section id="services" style={{ background: 'var(--navy)' }}>
        <div className="orb orb-teal" style={{ width: '500px', height: '500px', top: 0, right: '-150px', opacity: 0.5 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>

          <div className="services-intro" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'end', marginBottom: '64px' }}>
            <div className="reveal" ref={addToRefs}>
              <div className="section-tag">What We Do</div>
              <h2 className="section-heading">Three functions.<br/>One identity.</h2>
            </div>
            <div className="reveal" ref={addToRefs} style={{ transitionDelay: '0.1s' }}>
              <p className="section-sub">
                PegBit Studio operates simultaneously as a product studio that ships, an R&D lab that researches and prototypes, and a talent engine that develops builders. These are not separate departments. They are three expressions of one identity.
              </p>
            </div>
          </div>

          <div className="services-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            
            <div className="service-card glass-panel reveal" ref={addToRefs} style={{ position: 'relative', padding: '36px 28px', overflow: 'hidden', transition: 'all 0.4s ease' }}>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, var(--indigo), #818CF8)', opacity: 0.8 }}></div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.1em', marginBottom: '20px' }}>01 / 03</div>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', marginBottom: '20px', background: 'var(--indigo-glow)' }}>📦</div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '20px', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '12px' }}>Product Studio</div>
              <p style={{ fontSize: '14px', fontWeight: 300, lineHeight: 1.7, color: 'var(--text-dim)' }}>We build, ship, and maintain intelligent digital products that reach real users and generate revenue. Own products and client commissions — multiple revenue streams that reinforce each other.</p>
            </div>

            <div className="service-card glass-panel reveal" ref={addToRefs} style={{ transitionDelay: '0.1s', position: 'relative', padding: '36px 28px', overflow: 'hidden', transition: 'all 0.4s ease' }}>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, var(--gold), var(--gold-light))', opacity: 0.8 }}></div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.1em', marginBottom: '20px' }}>02 / 03</div>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', marginBottom: '20px', background: 'rgba(180,83,9,0.12)' }}>🔬</div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '20px', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '12px' }}>R&D Lab</div>
              <p style={{ fontSize: '14px', fontWeight: 300, lineHeight: 1.7, color: 'var(--text-dim)' }}>We research emerging technology, experiment with AI, and prototype what does not yet exist. We stay ahead by exploring what others are not yet building — generating IP that feeds the product pipeline.</p>
            </div>

            <div className="service-card glass-panel reveal" ref={addToRefs} style={{ transitionDelay: '0.2s', position: 'relative', padding: '36px 28px', overflow: 'hidden', transition: 'all 0.4s ease' }}>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, var(--teal), #2DD4BF)', opacity: 0.8 }}></div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.1em', marginBottom: '20px' }}>03 / 03</div>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', marginBottom: '20px', background: 'var(--teal-dim)' }}>🧱</div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '20px', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '12px' }}>Talent Engine</div>
              <p style={{ fontSize: '14px', fontWeight: 300, lineHeight: 1.7, color: 'var(--text-dim)' }}>We develop builders through real ownership, structured growth, and the discipline of shipping. The people developed inside PegBit are as valuable as any product we launch.</p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
