import { useRef, useEffect } from 'react';
import { X, Check } from 'lucide-react';

const traditional = [
  { bold: 'Foco errado:', text: 'Tentam curar a relação forçando um perdão racional e superficial antes do tempo.' },
  { bold: 'Cegueira:', text: 'Ignoram a lealdade inconsciente e tratam o problema só com estratégias corporativas.' },
  { bold: 'Conflito:', text: 'Sugerem que para crescer você precisa romper brutalmente com a família.' },
];

const divorce = [
  { bold: 'Raiz:', text: 'Desativa na base as crenças silenciosas que te impedem de fluir profissionalmente.' },
  { bold: 'Individualização:', text: 'Permite que você defina limites seguros sem desonrar ou desprezar o seu passado.' },
  { bold: 'Integração:', text: 'Transforma o sufoco emocional em potência, clareza e autoridade para monetizar.' },
];

export function ComparisonSection() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const headRef = useRef(null);

  useEffect(() => {
    [headRef, leftRef, rightRef].forEach((ref, i) => {
      const el = ref.current;
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = i === 0 ? 'translateY(20px)' : i === 1 ? 'translateX(-20px)' : 'translateX(20px)';
      el.style.transition = 'opacity 700ms cubic-bezier(0.16,1,0.3,1), transform 700ms cubic-bezier(0.16,1,0.3,1)';
      const obs = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => { el.style.opacity = '1'; el.style.transform = 'translate(0)'; }, i * 150);
          obs.disconnect();
        }
      }, { threshold: 0.12 });
      obs.observe(el);
      return () => obs.disconnect();
    });
  }, []);

  return (
    <section
      id="comparativo"
      style={{
        padding: 'var(--dm-space-8) 0',
        background: 'var(--dm-creme-2)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="dm-container">

        {/* Header */}
        <div ref={headRef} style={{ textAlign: 'center', marginBottom: 'var(--dm-space-7)' }}>
          <div className="dm-kicker" style={{ justifyContent: 'center', marginBottom: 'var(--dm-space-3)' }}>
            Por que é diferente
          </div>
          <h2 style={{
            fontFamily: 'var(--dm-font-heading)',
            fontWeight: 400,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: 'var(--dm-espresso)',
            margin: 0,
            lineHeight: 1.05,
          }}>
            Por que os conselhos comuns{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--dm-ouro)' }}>falham</em>?
          </h2>
          <div className="dm-divider" style={{ marginTop: 'var(--dm-space-4)' }} />
        </div>

        {/* Two columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--dm-space-4)',
        }}>

          {/* Traditional — muted, "wrong" */}
          <div
            ref={leftRef}
            style={{
              padding: 'var(--dm-space-6)',
              borderRadius: 'var(--dm-radius-xl)',
              background: 'rgba(255,255,255,0.5)',
              border: '1px solid rgba(107,62,32,0.10)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--dm-space-5)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Watermark */}
            <div style={{
              position: 'absolute', bottom: -20, right: -10, fontFamily: 'var(--dm-font-heading)',
              fontSize: '7rem', color: 'rgba(107,62,32,0.05)', lineHeight: 1, fontStyle: 'italic', userSelect: 'none',
            }}>Não</div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--dm-space-3)' }}>
              <div style={{
                width: 40, height: 40, borderRadius: '50%',
                background: 'rgba(107,62,32,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--dm-caramelo)',
              }}>
                <X size={20} strokeWidth={2} />
              </div>
              <h3 style={{
                fontFamily: 'var(--dm-font-heading)',
                fontSize: '1.5rem',
                fontWeight: 500,
                color: 'var(--dm-caramelo)',
                margin: 0,
              }}>
                Caminho Tradicional
              </h3>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--dm-space-4)' }}>
              {traditional.map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 20, height: 20, borderRadius: '50%',
                    border: '1px solid rgba(107,62,32,0.20)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, marginTop: 3,
                  }}>
                    <X size={10} strokeWidth={2.5} style={{ color: 'var(--dm-caramelo)', opacity: 0.6 }} />
                  </div>
                  <p style={{
                    fontFamily: 'var(--dm-font-body)',
                    fontSize: '0.925rem',
                    lineHeight: 1.65,
                    color: 'var(--dm-text)',
                    opacity: 0.75,
                    margin: 0,
                  }}>
                    <strong style={{ fontWeight: 500, opacity: 1 }}>{item.bold} </strong>
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Divorce — premium, golden warmth */}
          <div
            ref={rightRef}
            style={{
              padding: 'var(--dm-space-6)',
              borderRadius: 'var(--dm-radius-xl)',
              background: 'linear-gradient(150deg, var(--dm-espresso) 0%, var(--dm-cacau) 100%)',
              border: '1px solid rgba(192,146,66,0.22)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--dm-space-5)',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 24px 64px rgba(8,4,2,0.25)',
            }}
          >
            {/* Atmospheric glow */}
            <div style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              background: 'radial-gradient(ellipse 80% 60% at 80% 20%, rgba(192,146,66,0.10) 0%, transparent 60%)',
            }} />

            {/* Watermark */}
            <div style={{
              position: 'absolute', bottom: -20, right: -10, fontFamily: 'var(--dm-font-heading)',
              fontSize: '7rem', color: 'rgba(192,146,66,0.06)', lineHeight: 1, fontStyle: 'italic', userSelect: 'none',
            }}>Sim</div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--dm-space-3)', position: 'relative', zIndex: 1 }}>
              <div style={{
                width: 40, height: 40, borderRadius: '50%',
                background: 'rgba(192,146,66,0.15)',
                border: '1px solid rgba(192,146,66,0.30)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--dm-ouro)',
              }}>
                <Check size={20} strokeWidth={2} />
              </div>
              <h3 style={{
                fontFamily: 'var(--dm-font-heading)',
                fontSize: '1.5rem',
                fontWeight: 500,
                fontStyle: 'italic',
                color: 'var(--dm-ouro-light)',
                margin: 0,
              }}>
                O Divórcio Materno
              </h3>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--dm-space-4)', position: 'relative', zIndex: 1 }}>
              {divorce.map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 20, height: 20, borderRadius: '50%',
                    background: 'rgba(192,146,66,0.20)',
                    border: '1px solid rgba(192,146,66,0.35)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, marginTop: 3,
                  }}>
                    <Check size={10} strokeWidth={3} style={{ color: 'var(--dm-ouro-light)' }} />
                  </div>
                  <p style={{
                    fontFamily: 'var(--dm-font-body)',
                    fontSize: '0.925rem',
                    lineHeight: 1.65,
                    color: 'rgba(245, 237, 224, 0.85)',
                    margin: 0,
                  }}>
                    <strong style={{ fontWeight: 500, color: 'var(--dm-ouro-pale)' }}>{item.bold} </strong>
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
