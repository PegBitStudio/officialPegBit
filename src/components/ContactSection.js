'use client'
import { useEffect, useRef } from 'react';

export default function ContactSection() {
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
      <section id="contact" style={{ background: 'var(--navy)', textAlign: 'center' }}>
        <div className="orb orb-indigo" style={{ width: '600px', height: '600px', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', opacity: 0.25 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="contact-inner" style={{ maxWidth: '700px', margin: '0 auto' }}>

            <div className="section-tag reveal" ref={addToRefs} style={{ justifyContent: 'center' }}>Get In Touch</div>
            <h2 className="section-heading reveal" ref={addToRefs} style={{ textAlign: 'center', marginBottom: '16px' }}>
              Let's build something<br/>
              <span style={{ color: 'var(--indigo)' }}>that matters.</span>
            </h2>
            <p className="section-sub reveal" ref={addToRefs} style={{ margin: '0 auto 48px', textAlign: 'center' }}>
              Whether you're a potential client, partner, investor, or grant committee — we'd love to hear from you. Every important thing starts with a conversation.
            </p>

            <div className="contact-cards reveal" ref={addToRefs} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '48px' }}>
              <a href="mailto:info@pegbitstudio.com" className="contact-card glass-panel" style={{ padding: '24px', textAlign: 'left', transition: 'all 0.3s', cursor: 'pointer', display: 'block' }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px' }}>General Enquiries</div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '15px', fontWeight: 600, color: 'var(--indigo)', wordBreak: 'break-all' }}>info@pegbitstudio.com</div>
                <div style={{ fontSize: '13px', color: 'var(--text-dim)', marginTop: '4px' }}>Partnerships, client projects, press, and general questions.</div>
              </a>
              <a href="mailto:ceo@pegbitstudio.com" className="contact-card glass-panel" style={{ padding: '24px', textAlign: 'left', transition: 'all 0.3s', cursor: 'pointer', display: 'block' }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px' }}>Studio Leadership</div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '15px', fontWeight: 600, color: 'var(--indigo)', wordBreak: 'break-all' }}>ceo@pegbitstudio.com</div>
                <div style={{ fontSize: '13px', color: 'var(--text-dim)', marginTop: '4px' }}>Grants, investment, strategic conversations, and media.</div>
              </a>
            </div>

            <div className="contact-tagline reveal" ref={addToRefs} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', fontFamily: "'Syne', sans-serif", fontSize: '14px', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
              <div style={{ flex: 1, maxWidth: '80px', height: '1px', background: 'var(--border)' }}></div>
              Foundation meets Frontier.
              <div style={{ flex: 1, maxWidth: '80px', height: '1px', background: 'var(--border)' }}></div>
            </div>

          </div>
        </div>
      </section>

      <footer style={{ background: 'var(--navy-mid)', borderTop: '1px solid var(--border)', padding: '40px 0' }}>
        <div className="container">
          <div className="footer-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
            <div className="footer-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: '16px' }}>
              <span className="hex" style={{ color: 'var(--indigo)', fontSize: '20px' }}>⬡</span>
              PegBit Studio
            </div>
            <div className="footer-legal" style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              <strong style={{ color: 'var(--text-dim)', fontWeight: 500 }}>PegBit Technologies Ltd</strong> · Registered with CAC, Nigeria.<br/>
              PegBit Studio is a brand of PegBit Technologies Ltd. All rights reserved © 2026.
            </div>
            <div className="footer-tagline" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
              pegbitstudio.com
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
