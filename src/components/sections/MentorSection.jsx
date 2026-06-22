import { useRef, useEffect } from 'react';

export function MentorSection() {
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    [[imgRef, 'translateX(-20px)'], [textRef, 'translateX(20px)']].forEach(([ref, transform]) => {
      const el = ref.current;
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = transform;
      el.style.transition = 'opacity 800ms cubic-bezier(0.16,1,0.3,1), transform 800ms cubic-bezier(0.16,1,0.3,1)';
      const obs = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'translate(0)'; obs.disconnect(); }
      }, { threshold: 0.12 });
      obs.observe(el);
      return () => obs.disconnect();
    });
  }, []);

  return (
    <section
      id="mentora"
      style={{
        padding: 'var(--dm-space-8) 0',
        background: 'var(--dm-creme-2)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative circle */}
      <div style={{
        position: 'absolute', right: '-120px', top: '50%', transform: 'translateY(-50%)',
        width: '500px', height: '500px', borderRadius: '50%',
        border: '1px solid rgba(192,146,66,0.07)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', right: '-60px', top: '50%', transform: 'translateY(-50%)',
        width: '320px', height: '320px', borderRadius: '50%',
        border: '1px solid rgba(192,146,66,0.05)',
        pointerEvents: 'none',
      }} />

      <div className="dm-container" style={{ maxWidth: 1060 }}>
        <div className="mentor-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 0.85fr) minmax(0, 1.15fr)',
          gap: 'var(--dm-space-7)',
          alignItems: 'center',
        }}>

          {/* Portrait image */}
          <div ref={imgRef}>
            <img
              src={`${import.meta.env.BASE_URL}assets/foto-quem-sou-final.webp`}
              alt="Talita Lopes — Mentora"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                borderRadius: 'var(--dm-radius-xl)',
              }}
            />
          </div>

          {/* Text content */}
          <div ref={textRef} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--dm-space-4)' }}>
            <div className="dm-kicker">Sua Mentora</div>

            <div>
              <h2 style={{
                fontFamily: 'var(--dm-font-heading)',
                fontWeight: 400,
                fontSize: 'clamp(2.4rem, 4.5vw, 3.5rem)',
                color: 'var(--dm-espresso)',
                margin: '0 0 4px',
                lineHeight: 1.0,
              }}>
                Talita Lopes
              </h2>
              <p style={{
                fontFamily: 'var(--dm-font-heading)',
                fontStyle: 'italic',
                fontWeight: 400,
                fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                color: 'var(--dm-ouro)',
                margin: 0,
                lineHeight: 1.4,
              }}>
                Hipnoterapeuta e fundadora da Escola de Expansão Feminina
              </p>
            </div>

            <div className="dm-divider dm-divider--left" />

            <p style={{
              fontFamily: 'var(--dm-font-body)',
              fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)',
              lineHeight: 1.75,
              color: 'var(--dm-text)',
              opacity: 0.85,
              margin: 0,
            }}>
              Talita, hipnoterapeuta, fundou a Escola de Expansão Feminina e já guiou mais de 3.000 mulheres, fortalecendo a crença de que a riqueza e liberdade pessoal não são privilégios, mas direitos universais.
            </p>

            <p style={{
              fontFamily: 'var(--dm-font-body)',
              fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)',
              lineHeight: 1.75,
              color: 'var(--dm-text)',
              opacity: 0.80,
              margin: 0,
            }}>
              Minha missão é capacitar mulheres a desfazer contratos de baixa permissão, expandir sua consciência nos planos mental e energético, e construir um patrimônio emocional que sustente a manifestação de uma vida alinhada com seus maiores desejos e propósito.
            </p>

            {/* Quote */}
            <blockquote style={{
              margin: 'var(--dm-space-2) 0 0',
              padding: 'var(--dm-space-4)',
              borderLeft: '2px solid var(--dm-ouro)',
              background: 'rgba(192,146,66,0.05)',
              borderRadius: '0 var(--dm-radius-md) var(--dm-radius-md) 0',
            }}>
              <p style={{
                fontFamily: 'var(--dm-font-heading)',
                fontStyle: 'italic',
                fontWeight: 400,
                fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
                color: 'var(--dm-caramelo)',
                margin: 0,
                lineHeight: 1.5,
              }}>
                "Crescer não precisa ser um ato de traição. Pode ser o maior presente que você dá
                à sua linhagem."
              </p>
            </blockquote>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .mentor-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
