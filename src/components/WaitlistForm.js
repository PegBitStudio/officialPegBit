'use client'
import { useState } from 'react';

// ─── REPLACE THIS WITH YOUR FORMSPREE FORM ID ─────────────────────────────
// 1. Go to https://formspree.io and sign up (free)
// 2. Create a new form called "Sydence Waitlist"
// 3. Set the notification email to info@pegbitstudio.com
// 4. Copy your form ID (e.g. "xyzabcde") and replace FORMSPREE_ID below
const FORMSPREE_ID = 'xdabaker';
// ──────────────────────────────────────────────────────────────────────────

export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    studio: '',
    role: '',
    teamSize: '',
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          studio: formData.studio,
          role: formData.role,
          teamSize: formData.teamSize,
          _subject: `Sydence Waitlist — ${formData.name} (${formData.studio})`,
        }),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', studio: '', role: '', teamSize: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="glass-panel" style={{ padding: '48px 40px', borderRadius: '16px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, var(--teal), #34D399)' }}></div>
        <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(13,148,136,0.15)', border: '1px solid rgba(13,148,136,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', margin: '0 auto 20px' }}>✓</div>
        <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '22px', fontWeight: 700, marginBottom: '10px' }}>You're on the list.</div>
        <p style={{ fontSize: '15px', fontWeight: 300, color: 'var(--text-dim)', lineHeight: 1.7 }}>
          We'll be in touch with early access details. You'll be among the first studios to run on Sydence.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="glass-panel" style={{ padding: '40px', borderRadius: '16px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, var(--indigo), #818CF8)' }}></div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '14px', marginBottom: '14px' }}>
          <div>
            <label style={labelStyle}>Full Name *</label>
            <input
              required
              name="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = 'var(--indigo)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'}
            />
          </div>
          <div>
            <label style={labelStyle}>Work Email *</label>
            <input
              required
              name="email"
              type="email"
              placeholder="you@studio.com"
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = 'var(--indigo)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'}
            />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '14px', marginBottom: '14px' }}>
          <div>
            <label style={labelStyle}>Studio / Company Name *</label>
            <input
              required
              name="studio"
              type="text"
              placeholder="Acme Creative"
              value={formData.studio}
              onChange={handleChange}
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = 'var(--indigo)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'}
            />
          </div>
          <div>
            <label style={labelStyle}>Your Role</label>
            <input
              name="role"
              type="text"
              placeholder="e.g. Studio Lead, Founder"
              value={formData.role}
              onChange={handleChange}
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = 'var(--indigo)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'}
            />
          </div>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <label style={labelStyle}>Team Size</label>
          <select
            name="teamSize"
            value={formData.teamSize}
            onChange={handleChange}
            style={{ ...inputStyle, cursor: 'pointer' }}
          >
            <option value="">Select team size</option>
            <option value="Just me">Just me</option>
            <option value="2–5">2–5 people</option>
            <option value="6–15">6–15 people</option>
            <option value="16–50">16–50 people</option>
            <option value="50+">50+ people</option>
          </select>
        </div>

        {status === 'error' && (
          <div style={{ padding: '12px 16px', borderRadius: '8px', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', fontSize: '13px', color: '#F87171', marginBottom: '16px' }}>
            Something went wrong. Please try again or email us at info@pegbitstudio.com
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          style={{
            width: '100%', padding: '14px 24px', borderRadius: '8px',
            background: status === 'loading' ? 'rgba(79,70,229,0.5)' : 'var(--indigo)',
            color: 'white', border: 'none', cursor: status === 'loading' ? 'not-allowed' : 'pointer',
            fontFamily: "'Syne', sans-serif", fontSize: '15px', fontWeight: 700,
            letterSpacing: '-0.01em', transition: 'all 0.2s',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
          }}
        >
          {status === 'loading' ? (
            <>
              <span style={{ width: '16px', height: '16px', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%', animation: 'spin 0.8s linear infinite', display: 'inline-block' }}></span>
              Submitting...
            </>
          ) : (
            'Request Early Access →'
          )}
        </button>
      </div>
    </form>
  );
}

const labelStyle = {
  display: 'block',
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: '10px',
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: 'var(--text-muted)',
  marginBottom: '8px',
};

const inputStyle = {
  width: '100%',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid var(--border)',
  borderRadius: '8px',
  padding: '11px 14px',
  color: 'var(--white)',
  fontSize: '14px',
  fontFamily: 'inherit',
  outline: 'none',
  transition: 'border-color 0.2s',
  boxSizing: 'border-box',
};
