import { useRef, useEffect } from 'react';

const gains = [
  {
    num: '01',
    text: 'Clareza financeira e coragem para cobrar o preço justo pelo seu tempo e talento.',
    highlight: 'Clareza financeira',
  },
  {
    num: '02',
    text: 'Fim da autossabotagem na beira das grandes conquistas e marcos importantes da vida.',
    highlight: 'Fim da autossabotagem',
  },
  {
    num: '03',
    text: 'Uma relação mais leve e honesta consigo mesma e, eventualmente, com a própria mãe.',
    highlight: 'Relação mais leve',
  },
];

export function GainsSection() {
  const headRef = useRef(null);
  const itemRefs = useRef([]);
  const bannerRef = useRef(null);

  useEffect(() => {
    const animate = (el, delay) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 700ms cubic-bezier(0.16,1,0.3,1), transform 700ms cubic-bezier(0.16,1,0.3,1)';
      const obs = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; }, delay);
          obs.disconnect();
        }
      }, { threshold: 0.12 });
      obs.observe(el);
    };

    animate(headRef.current, 0);
    itemRefs.current.forEach((el, i) => animate(el, 150 + i * 130));
    animate(bannerRef.current, 500);
  }, []);

  return (
    <section
      id="ganhos"
      style={{
        padding: 'var(--dm-space-8) 0',
        background: 'var(--dm-creme)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative element */}
      <div style={{
        position: 'absolute', left: '-60px', bottom: '10%',
        width: '300px', height: '300px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(192,146,66,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="dm-container">

        {/* Header */}
        <div ref={headRef} style={{ marginBottom: 'var(--dm-space-7)' }}>
          <div className="dm-kicker" style={{ marginBottom: 'var(--dm-space-3)' }}>
            Resultados
          </div>
          <h2 style={{
            fontFamily: 'var(--dm-font-heading)',
            fontWeight: 400,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: 'var(--dm-espresso)',
            margin: 0,
            lineHeight: 1.05,
            maxWidth: 600,
          }}>
            O que você conquista{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--dm-ouro)' }}>do outro lado</em>
          </h2>
          <div className="dm-divider dm-divider--left" style={{ marginTop: 'var(--dm-space-4)' }} />
        </div>

        {/* Gains list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--dm-space-3)' }}>
          {gains.map((gain, idx) => (
            <div
              key={idx}
              ref={el => (itemRefs.current[idx] = el)}
              style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr',
                gap: 'var(--dm-space-5)',
                alignItems: 'start',
                padding: 'var(--dm-space-5) var(--dm-space-4)',
                borderRadius: 'var(--dm-radius-lg)',
                background: 'var(--dm-surface)',
                border: '1px solid var(--dm-border)',
                transition: 'transform 300ms ease, box-shadow 300ms ease, border-color 300ms ease',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateX(6px)';
                e.currentTarget.style.boxShadow = 'var(--dm-shadow-card)';
                e.currentTarget.style.borderColor = 'rgba(192,146,66,0.25)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateX(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'var(--dm-border)';
              }}
            >
              {/* Number */}
              <div style={{
                fontFamily: 'var(--dm-font-heading)',
                fontSize: 'clamp(2.8rem, 5vw, 4rem)',
                lineHeight: 0.95,
                fontWeight: 300,
                color: 'var(--dm-ouro)',
                opacity: 0.50,
                letterSpacing: '-0.03em',
              }}>
                {gain.num}
              </div>

              {/* Content */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, paddingTop: 6 }}>
                <span style={{
                  fontFamily: 'var(--dm-font-heading)',
                  fontSize: '1.15rem',
                  fontStyle: 'italic',
                  color: 'var(--dm-espresso)',
                  fontWeight: 400,
                }}>
                  {gain.highlight}
                </span>
                <p style={{
                  fontFamily: 'var(--dm-font-body)',
                  fontSize: '0.95rem',
                  lineHeight: 1.7,
                  color: 'var(--dm-text)',
                  opacity: 0.8,
                  margin: 0,
                }}>
                  {gain.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Full-width banner gain */}
        <div
          ref={bannerRef}
          style={{
            marginTop: 'var(--dm-space-4)',
            padding: 'var(--dm-space-6)',
            borderRadius: 'var(--dm-radius-xl)',
            background: 'linear-gradient(135deg, var(--dm-espresso) 0%, var(--dm-cacau) 100%)',
            border: '1px solid rgba(192,146,66,0.18)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 16px 48px rgba(8,4,2,0.18)',
          }}
        >
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(192,146,66,0.08) 0%, transparent 70%)',
          }} />

          <p style={{
            fontFamily: 'var(--dm-font-heading)',
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 'clamp(1.4rem, 3vw, 2rem)',
            color: 'var(--dm-marfim)',
            margin: '0 auto',
            maxWidth: 780,
            lineHeight: 1.4,
            position: 'relative', zIndex: 1,
          }}>
            Você recupera{' '}
            <span style={{ color: 'var(--dm-ouro-light)' }}>energia vital livre</span>
            {' '}para investir nos seus próprios talentos e desejos autênticos.
          </p>
        </div>

      </div>
    </section>
  );
}
