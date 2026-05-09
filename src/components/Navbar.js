'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <div className="container">
            <div className="nav-left">
              <Link href="#hero" className="nav-logo">
                <span className="hex">⬡</span>
                PegBit Studio
              </Link>
            </div>

            <ul className="nav-links">
              <li><Link href="/#about">About</Link></li>
              <li><Link href="/#services">What We Do</Link></li>
              <li><Link href="/#products">Products</Link></li>
              <li>
                <Link href="/sydence" style={{ color: 'var(--indigo)', fontWeight: 600 }}>
                  Sydence ✦
                </Link>
              </li>
              <li>
                <Link href="https://omosai.dev" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold-light)', fontWeight: 600 }}>
                  Omos ✦
                </Link>
              </li>
              <li>
                <Link href="/examsurf" style={{ color: 'var(--teal)', fontWeight: 600 }}>
                  ExamSurf ✦
                </Link>
              </li>
              <li><Link href="/#contact">Contact</Link></li>
            </ul>

            <div className="nav-right">
              <ThemeToggle />
              <Link href="#contact" className="nav-cta">Get in Touch</Link>
              <button 
                className="menu-toggle" 
                aria-label="Open menu"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span></span><span></span><span></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE NAV */}
      <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
        <button 
          className="mobile-close" 
          aria-label="Close menu"
          onClick={() => setMobileMenuOpen(false)}
        >
          ✕
        </button>
        <Link href="/#about" onClick={() => setMobileMenuOpen(false)}>About</Link>
        <Link href="/#services" onClick={() => setMobileMenuOpen(false)}>What We Do</Link>
        <Link href="/#products" onClick={() => setMobileMenuOpen(false)}>Products</Link>
        <Link href="/sydence" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--indigo)' }}>Sydence ✦</Link>
        <Link href="https://omosai.dev" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--gold-light)' }}>Omos ✦</Link>
        <Link href="/examsurf" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--teal)' }}>ExamSurf ✦</Link>
        <Link href="/#contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        <div style={{ marginTop: '20px' }}>
          <ThemeToggle />
        </div>
      </div>
    </>
  );
}
