import './globals.css'

export const metadata = {
  title: 'PegBit Studio — Foundation meets Frontier.',
  description: 'PegBit Studio is an AI-powered technology studio building intelligent products that empower people to do more, learn more, and create more. Lagos, Nigeria.',
  keywords: 'PegBit, PegBit Studio, AI studio Nigeria, AI product studio, Lagos technology studio, Sydence, ExamSurf, Omos, AI-powered products',
  authors: [{ name: 'PegBit Technologies Ltd' }],
  alternates: {
    canonical: 'https://pegbitstudio.com/',
  },
  openGraph: {
    type: 'website',
    siteName: 'PegBit Studio',
    title: 'PegBit Studio — Foundation meets Frontier.',
    description: 'An AI-powered technology studio building intelligent products that empower people to do more, learn more, and create more.',
    url: 'https://pegbitstudio.com/',
    images: [
      {
        url: 'https://pegbitstudio.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PegBit Studio — Foundation meets Frontier. AI-powered technology studio.',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PegBit Studio — Foundation meets Frontier.',
    description: 'An AI-powered technology studio building intelligent products that empower people to do more, learn more, and create more.',
    images: ['https://pegbitstudio.com/og-image.png'],
  },
}

export const viewport = {
  themeColor: '#0A0A1A',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PegBit Studio",
    "legalName": "PegBit Technologies Ltd",
    "url": "https://pegbitstudio.com",
    "logo": "https://pegbitstudio.com/apple-touch-icon.png",
    "image": "https://pegbitstudio.com/og-image.png",
    "description": "An AI-powered technology studio building intelligent products that empower people to do more, learn more, and create more.",
    "slogan": "Foundation meets Frontier.",
    "foundingDate": "2026",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lagos",
      "addressCountry": "NG"
    },
    "contactPoint": [{
      "@type": "ContactPoint",
      "contactType": "general enquiries",
      "email": "info@pegbitstudio.com"
    }, {
      "@type": "ContactPoint",
      "contactType": "leadership",
      "email": "ceo@pegbitstudio.com"
    }]
  }

  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {/* HEX GRID BACKGROUND */}
        <div className="hex-bg" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="hex-pattern" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
                <polygon points="15,2 45,2 60,28 45,50 15,50 0,28" fill="none" stroke="white" strokeWidth="0.8"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hex-pattern)"/>
          </svg>
        </div>
        {children}
      </body>
    </html>
  )
}
