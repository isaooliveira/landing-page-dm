import { useRef, useEffect } from 'react';
import { AlertCircle, Lock, Ban, Coins, Sparkles } from 'lucide-react';

const identifyItems = [
  { text: "Culpa ao tomar decisões que contrariam a opinião dela, mesmo na vida adulta.", icon: AlertCircle, num: 'I' },
  { text: "Sensação de sufocamento constante quando tenta estabelecer e manter os próprios limites.", icon: Lock, num: 'II' },
  { text: "Autossabotagem cíclica justamente quando algo bom ou promissor acontece na sua história.", icon: Ban, num: 'III' },
  { text: "Dificuldade enorme de se posicionar ou cobrar pelo seu trabalho de forma justa.", icon: Coins, num: 'IV' },
  { text: "Medo profundo de crescer, brilhar e, no fundo, incomodar ou ser abandonada por ela.", icon: Sparkles, num: 'V' },
];

export function IdentificationSection() {
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const items = itemRefs.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = items.indexOf(entry.target);
            setTimeout(() => {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
            }, idx * 110);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    items.forEach((el) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 700ms cubic-bezier(0.16,1,0.3,1), transform 700ms cubic-bezier(0.16,1,0.3,1)';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const headRef = useRef(null);
  useEffect(() => {
    const el = headRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 700ms cubic-bezier(0.16,1,0.3,1), transform 700ms cubic-bezier(0.16,1,0.3,1)';
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; obs.disconnect(); }
    }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="identificacao"
      style={{
        padding: 'var(--dm-space-8) 0',
        background: 'var(--dm-creme)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative bg element */}
      <div style={{
        position: 'absolute', top: '-80px', right: '-80px', width: '400px', height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(192,146,66,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="dm-container">

        {/* Section header */}
        <div ref={headRef} style={{ textAlign: 'center', marginBottom: 'var(--dm-space-7)' }}>
          <div className="dm-kicker" style={{ justifyContent: 'center', marginBottom: 'var(--dm-space-3)' }}>
            Identificação
          </div>
          <h2
            style={{
              fontFamily: 'var(--dm-font-heading)',
              fontWeight: 400,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              lineHeight: 1.05,
              color: 'var(--dm-espresso)',
              margin: '0 auto',
              maxWidth: 700,
            }}
          >
            Você se reconhece em{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--dm-ouro)' }}>alguma</em>{' '}
            destas situações?
          </h2>
          <div className="dm-divider" style={{ marginTop: 'var(--dm-space-4)' }} />
        </div>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 'var(--dm-space-3)',
        }}>
          {identifyItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                ref={(el) => (itemRefs.current[idx] = el)}
                style={{
                  background: 'var(--dm-surface)',
                  border: '1px solid var(--dm-border)',
                  borderRadius: 'var(--dm-radius-lg)',
                  padding: 'var(--dm-space-5) var(--dm-space-4)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--dm-space-4)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'transform 300ms ease, box-shadow 300ms ease',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = 'var(--dm-shadow-card)';
                  e.currentTarget.style.borderColor = 'rgba(192,146,66,0.25)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'var(--dm-border)';
                }}
              >
                {/* Roman numeral watermark */}
                <div style={{
                  position: 'absolute', top: 12, right: 16,
                  fontFamily: 'var(--dm-font-heading)',
                  fontSize: '1.1rem',
                  color: 'var(--dm-ouro)',
                  opacity: 0.3,
                  fontWeight: 400,
                  letterSpacing: '0.05em',
                }}>
                  {item.num}
                </div>

                {/* Icon */}
                <div style={{
                  width: 44, height: 44,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--dm-creme-2), var(--dm-marfim))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--dm-caramelo)',
                  flexShrink: 0,
                  border: '1px solid rgba(192,146,66,0.12)',
                }}>
                  <Icon size={20} strokeWidth={1.5} />
                </div>

                {/* Text */}
                <p style={{
                  fontFamily: 'var(--dm-font-body)',
                  fontSize: '0.925rem',
                  lineHeight: 1.65,
                  color: 'var(--dm-text)',
                  margin: 0,
                  fontWeight: 400,
                }}>
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Closing emphasis */}
        <div style={{
          marginTop: 'var(--dm-space-7)',
          textAlign: 'center',
          maxWidth: 680,
          margin: 'var(--dm-space-7) auto 0',
        }}>
          <p style={{
            fontFamily: 'var(--dm-font-heading)',
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)',
            lineHeight: 1.4,
            color: 'var(--dm-espresso)',
            opacity: 0.8,
          }}>
            "Se você se reconheceu em ao menos uma dessas situações, o Divórcio Materno foi criado para você."
          </p>
        </div>

      </div>
    </section>
  );
}
