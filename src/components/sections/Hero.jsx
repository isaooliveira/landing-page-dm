import { useEffect, useRef } from 'react';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const btnRef = useRef(null);
  const imgRef = useRef(null);
  const kickerRef = useRef(null);

  useEffect(() => {
    const els = [kickerRef, headingRef, subRef, btnRef, imgRef];
    els.forEach((ref, i) => {
      if (!ref.current) return;
      ref.current.style.opacity = '0';
      ref.current.style.transform = 'translateY(24px)';
      ref.current.style.transition = `opacity 800ms cubic-bezier(0.16,1,0.3,1), transform 800ms cubic-bezier(0.16,1,0.3,1)`;
      setTimeout(() => {
        if (ref.current) {
          ref.current.style.opacity = '1';
          ref.current.style.transform = 'translateY(0)';
        }
      }, 80 + i * 140);
    });
  }, []);

  return (
    <section
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: 'linear-gradient(160deg, var(--dm-espresso) 0%, var(--dm-noir) 55%, var(--dm-cacau) 100%)',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 'var(--dm-space-7)',
        paddingBottom: 'var(--dm-space-8)',
      }}
    >
      {/* Atmospheric gradient orbs */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 70% 60% at 70% 50%, rgba(192,146,66,0.08) 0%, transparent 70%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 50% 50% at 15% 80%, rgba(61,28,14,0.6) 0%, transparent 70%)',
      }} />

      {/* Decorative vertical line */}
      <div style={{
        position: 'absolute', top: '10%', left: '50%', width: '1px',
        height: '120px',
        background: 'linear-gradient(to bottom, transparent, rgba(192,146,66,0.3), transparent)',
        pointerEvents: 'none',
      }} />

      <div className="dm-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)',
          gap: 'var(--dm-space-7)',
          alignItems: 'center',
        }}>

          {/* Left column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--dm-space-5)' }}>

            <div ref={kickerRef} className="dm-kicker" style={{ color: 'var(--dm-ouro-light)' }}>
              Imersão Digital
            </div>

            <h1
              ref={headingRef}
              style={{
                fontFamily: 'var(--dm-font-heading)',
                fontWeight: 400,
                fontSize: 'clamp(2.6rem, 5.5vw, 4.2rem)',
                lineHeight: 1.0,
                letterSpacing: '-0.01em',
                color: 'var(--dm-marfim)',
                margin: 0,
              }}
            >
              Transforme o peso da{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--dm-ouro-light)' }}>
                relação com sua mãe
              </em>
              {' '}em expansão financeira.
            </h1>

            <p
              ref={subRef}
              style={{
                fontFamily: 'var(--dm-font-body)',
                fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
                lineHeight: 1.72,
                color: 'rgba(245, 237, 224, 0.72)',
                maxWidth: 520,
                margin: 0,
              }}
            >
              Rompa contratos emocionais herdados que sabotam silenciosamente suas finanças e crescimento —
              sem precisar cortar laços, brigar ou viver se sentindo ingrata.
            </p>

            {/* CTA */}
            <div ref={btnRef} style={{ display: 'flex', gap: 'var(--dm-space-3)', flexWrap: 'wrap' }}>
              <Button href="#oferta">
                Começar agora
                <ArrowRight size={16} />
              </Button>
              <Button variant="ghost" href="#mecanismo">
                Como funciona
              </Button>
            </div>

          </div>

          {/* Right column: image */}
          <div ref={imgRef}>
            <img
              src={`${import.meta.env.BASE_URL}assets/hero.png`}
              alt="Divórcio Materno"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                borderRadius: 'var(--dm-radius-xl)',
              }}
            />

            {/* Floating badge */}
            <div style={{
              marginTop: 'var(--dm-space-4)',
              background: 'rgba(22,9,4,0.80)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(192,146,66,0.25)',
              borderRadius: 'var(--dm-radius-md)',
              padding: '10px 16px',
              display: 'inline-flex',
              flexDirection: 'column',
              gap: 2,
            }}>
              <span style={{ fontFamily: 'var(--dm-font-body)', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--dm-ouro)', opacity: 0.8 }}>Condição especial</span>
              <span style={{ fontFamily: 'var(--dm-font-heading)', fontSize: '1.3rem', color: 'var(--dm-marfim)', fontWeight: 500, lineHeight: 1 }}>12x de R$ 9,70</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div style={{
        position: 'absolute', bottom: 'var(--dm-space-5)', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
        opacity: 0.4,
      }}>
        <span style={{ fontFamily: 'var(--dm-font-body)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--dm-marfim)' }}>Scroll</span>
        <div style={{ width: '1px', height: '32px', background: 'linear-gradient(to bottom, var(--dm-ouro), transparent)' }} />
      </div>

      <style>{`
        @media (max-width: 860px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
