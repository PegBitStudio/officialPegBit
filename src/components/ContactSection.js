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
            <div className="footer-socials" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <a href="https://linkedin.com/company/pegbitstudio" target="_blank" rel="noopener noreferrer" title="LinkedIn" style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'var(--glass-bg)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-dim)', transition: 'all 0.2s', textDecoration: 'none' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://x.com/PegBitStudio" target="_blank" rel="noopener noreferrer" title="X (Twitter)" style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'var(--glass-bg)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-dim)', transition: 'all 0.2s', textDecoration: 'none' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://github.com/PegBitStudio" target="_blank" rel="noopener noreferrer" title="GitHub" style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'var(--glass-bg)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-dim)', transition: 'all 0.2s', textDecoration: 'none' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
