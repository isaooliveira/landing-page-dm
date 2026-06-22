import { useRef, useEffect } from 'react';

export function MechanismSection() {
  const textRef = useRef(null);
  const quoteRef = useRef(null);

  useEffect(() => {
    [textRef, quoteRef].forEach((ref, i) => {
      const el = ref.current;
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(28px)';
      el.style.transition = 'opacity 800ms cubic-bezier(0.16,1,0.3,1), transform 800ms cubic-bezier(0.16,1,0.3,1)';
      const obs = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }, i * 200);
          obs.disconnect();
        }
      }, { threshold: 0.15 });
      obs.observe(el);
      return () => obs.disconnect();
    });
  }, []);

  return (
    <section
      id="mecanismo"
      style={{
        background: 'linear-gradient(170deg, var(--dm-noir) 0%, var(--dm-espresso) 60%, var(--dm-terra) 100%)',
        padding: 'var(--dm-space-8) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Atmospheric radial light */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(192,146,66,0.07) 0%, transparent 70%)',
      }} />

      {/* Top ornamental line */}
      <div className="dm-gold-line" style={{ position: 'absolute', top: 0, margin: 0, left: 0, right: 0 }} />
      {/* Bottom ornamental line */}
      <div className="dm-gold-line" style={{ position: 'absolute', bottom: 0, margin: 0, left: 0, right: 0 }} />

      <div className="dm-container" style={{ maxWidth: 860, position: 'relative', zIndex: 1 }}>

        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--dm-space-6)' }}>

          {/* Large decorative quote mark */}
          <div style={{
            fontFamily: 'var(--dm-font-heading)',
            fontSize: '8rem',
            lineHeight: 0.5,
            color: 'var(--dm-ouro)',
            opacity: 0.18,
            fontStyle: 'italic',
            fontWeight: 300,
            userSelect: 'none',
          }}>
            "
          </div>

          {/* Kicker */}
          <div className="dm-kicker" style={{ color: 'var(--dm-ouro)', justifyContent: 'center', marginTop: '-var(--dm-space-4)' }}>
            O Mecanismo Central
          </div>

          {/* Main heading */}
          <h2 style={{
            fontFamily: 'var(--dm-font-heading)',
            fontWeight: 400,
            fontStyle: 'italic',
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            color: 'var(--dm-ouro-light)',
            margin: 0,
            lineHeight: 1.05,
          }}>
            A Lealdade Inconsciente
          </h2>

          {/* Divider */}
          <div style={{ width: 48, height: 1, background: 'var(--dm-ouro)', opacity: 0.4 }} />

          {/* Body text */}
          <p
            ref={textRef}
            style={{
              fontFamily: 'var(--dm-font-body)',
              fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
              lineHeight: 1.8,
              color: 'rgba(245, 237, 224, 0.80)',
              maxWidth: 760,
              margin: 0,
            }}
          >
            Muitas vezes, a forma como lidamos com a nossa vida financeira e nossos limites
            não é uma escolha racional, mas uma{' '}
            <strong style={{ color: 'var(--dm-ouro-pale)', fontWeight: 500 }}>
              reprodução invisível dos medos, dores ou expectativas que absorvemos na infância.
            </strong>
            {' '}O Divórcio Materno é o rompimento adulto, responsável e amoroso com esse padrão,
            permitindo que você tome posse absoluta do próprio destino.
          </p>

          {/* Three pillars */}
          <div
            ref={quoteRef}
            className="mechanism-pillars"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 'var(--dm-space-4)',
              marginTop: 'var(--dm-space-3)',
              width: '100%',
            }}
          >
            {[
              { label: 'Raiz', desc: 'Padrões formados na relação com a mãe' },
              { label: 'Efeito', desc: 'Bloqueios financeiros e de autovalor' },
              { label: 'Libertação', desc: 'Rompimento consciente e amoroso' },
            ].map((p) => (
              <div
                key={p.label}
                style={{
                  padding: 'var(--dm-space-4)',
                  border: '1px solid rgba(192,146,66,0.20)',
                  borderRadius: 'var(--dm-radius-md)',
                  background: 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(8px)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                }}
              >
                <span style={{
                  fontFamily: 'var(--dm-font-heading)',
                  fontSize: '1.2rem',
                  color: 'var(--dm-ouro-light)',
                  fontStyle: 'italic',
                  fontWeight: 400,
                }}>
                  {p.label}
                </span>
                <span style={{
                  fontFamily: 'var(--dm-font-body)',
                  fontSize: '0.875rem',
                  color: 'rgba(245,237,224,0.60)',
                  lineHeight: 1.5,
                }}>
                  {p.desc}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .mechanism-pillars { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
