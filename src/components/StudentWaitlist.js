'use client'
import { useState } from 'react';

export default function StudentWaitlist() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    // We use Formspree or similar here. 
    // For now, we simulate success or the user can provide their endpoint.
    try {
      const response = await fetch('https://formspree.io/f/mvzlvoow', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, project: 'ExamSurf' })
      });
      
      if (response.ok) {
        setSubmitted(true);
        setEmail('');
      }
    } catch (err) {
      console.error('Form submission error:', err);
    }
  };

  if (submitted) {
    return (
      <div className="glass-panel" style={{ padding: '40px', textAlign: 'center', borderRadius: '24px', border: '1px solid var(--teal)' }}>
        <div style={{ fontSize: '32px', marginBottom: '16px' }}>🎉</div>
        <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '20px', fontWeight: 700, marginBottom: '10px' }}>You're in!</h3>
        <p style={{ fontSize: '14px', color: 'var(--text-dim)' }}>We'll email you as soon as a spot opens up in the testing group.</p>
      </div>
    );
  }

  return (
    <div className="glass-panel" style={{ padding: '40px', borderRadius: '24px', border: '1px solid var(--border-accent)' }}>
      <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '20px', fontWeight: 700, marginBottom: '24px' }}>Join the Student Waitlist</h3>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label htmlFor="student-email" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Student Email Address</label>
          <input
            id="student-email"
            type="email"
            required
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: '14px 18px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              color: 'var(--white)',
              fontSize: '14px',
              outline: 'none',
              transition: 'border-color 0.2s'
            }}
            onFocus={(e) => e.target.style.borderColor = 'var(--teal)'}
            onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
          />
        </div>
        <button
          type="submit"
          className="btn-primary"
          style={{
            background: 'var(--teal)',
            boxShadow: '0 4px 14px rgba(13,148,136,0.3)',
            padding: '14px',
            fontSize: '14px',
            fontWeight: 700,
            width: '100%',
            justifyContent: 'center'
          }}
        >
          Join Waitlist →
        </button>
        <p style={{ fontSize: '11px', color: 'var(--text-muted)', textAlign: 'center', marginTop: '8px' }}>
          By joining, you agree to receive updates about ExamSurf.
        </p>
      </form>
    </div>
  );
}
