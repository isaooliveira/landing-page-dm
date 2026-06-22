import { useRef, useEffect } from 'react';
import { Button } from '../ui/Button';
import { ArrowRight, CheckCircle2, ShieldCheck, Infinity, Headphones, BookOpen } from 'lucide-react';

const includes = [
  { icon: Infinity, text: 'Acesso vitalício ao conteúdo da Imersão' },
  { icon: Headphones, text: 'Áudios terapêuticos de integração emocional' },
  { icon: BookOpen, text: 'Materiais complementares de estudo guiado' },
  { icon: ShieldCheck, text: 'Garantia incondicional de 7 dias' },
];

export function OfferSection() {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(32px)';
    el.style.transition = 'opacity 800ms cubic-bezier(0.16,1,0.3,1), transform 800ms cubic-bezier(0.16,1,0.3,1)';
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; obs.disconnect(); }
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="oferta"
      style={{
        padding: 'var(--dm-space-8) 0',
        background: 'linear-gradient(170deg, var(--dm-noir) 0%, var(--dm-espresso) 60%, var(--dm-terra) 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background orbs */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(192,146,66,0.07) 0%, transparent 70%)',
      }} />
      <div className="dm-gold-line" style={{ position: 'absolute', top: 0, margin: 0, left: 0, right: 0 }} />

      <div className="dm-container" style={{ display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 1 }}>

        <div
          ref={cardRef}
          style={{
            maxWidth: 760,
            width: '100%',
            background: 'linear-gradient(150deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
            border: '1px solid rgba(192,146,66,0.25)',
            borderRadius: 'var(--dm-radius-xl)',
            padding: 'var(--dm-space-7) var(--dm-space-6)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 32px 80px rgba(8,4,2,0.50), 0 0 0 1px rgba(192,146,66,0.08)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Card inner glow */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(192,146,66,0.5), transparent)',
            pointerEvents: 'none',
          }} />

          {/* Kicker */}
          <div className="dm-kicker" style={{ color: 'var(--dm-ouro)', justifyContent: 'center', marginBottom: 'var(--dm-space-3)' }}>
            Condição Especial
          </div>

          {/* Heading */}
          <h2 style={{
            fontFamily: 'var(--dm-font-heading)',
            fontWeight: 400,
            fontStyle: 'italic',
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            color: 'var(--dm-marfim)',
            margin: '0 0 var(--dm-space-6)',
            lineHeight: 1.1,
            maxWidth: 520,
          }}>
            Sua liberdade emocional começa aqui
          </h2>

          {/* What's included */}
          <div style={{
            width: '100%',
            maxWidth: 440,
            marginBottom: 'var(--dm-space-6)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--dm-space-3)',
          }}>
            {includes.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  padding: '12px 16px',
                  borderRadius: 'var(--dm-radius-md)',
                  background: 'rgba(192,146,66,0.06)',
                  border: '1px solid rgba(192,146,66,0.12)',
                  textAlign: 'left',
                }}>
                  <Icon size={18} strokeWidth={1.5} style={{ color: 'var(--dm-ouro-light)', flexShrink: 0 }} />
                  <span style={{
                    fontFamily: 'var(--dm-font-body)',
                    fontSize: '0.9rem',
                    color: 'rgba(245,237,224,0.85)',
                  }}>
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Divider */}
          <div style={{ width: '100%', height: '1px', background: 'rgba(192,146,66,0.15)', marginBottom: 'var(--dm-space-6)' }} />

          {/* Price */}
          <div style={{ marginBottom: 'var(--dm-space-5)' }}>
            <div style={{
              fontFamily: 'var(--dm-font-body)',
              fontSize: '0.85rem',
              color: 'rgba(245,237,224,0.45)',
              textDecoration: 'line-through',
              marginBottom: 8,
              letterSpacing: '0.04em',
            }}>
              De R$ 297,00
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: 10, lineHeight: 1 }}>
              <span style={{
                fontFamily: 'var(--dm-font-body)',
                fontSize: '1rem',
                color: 'rgba(245,237,224,0.65)',
                fontWeight: 400,
                paddingBottom: 6,
              }}>
                12x de
              </span>
              <span style={{
                fontFamily: 'var(--dm-font-heading)',
                fontWeight: 300,
                fontSize: 'clamp(3.5rem, 6vw, 5rem)',
                color: 'var(--dm-ouro-light)',
                letterSpacing: '-0.03em',
                lineHeight: 1,
              }}>
                R$ 9,70
              </span>
            </div>
            <div style={{
              fontFamily: 'var(--dm-font-body)',
              fontSize: '0.9rem',
              color: 'rgba(245,237,224,0.55)',
              marginTop: 8,
            }}>
              ou <strong style={{ color: 'rgba(245,237,224,0.85)', fontWeight: 500 }}>R$ 97</strong> à vista
            </div>
          </div>

          {/* CTA */}
          <Button href="#checkout" style={{ width: '100%', maxWidth: 440, minHeight: 64, fontSize: '0.9rem' }}>
            Quero iniciar o meu divórcio
            <ArrowRight size={16} />
          </Button>

          {/* Trust note */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8,
            marginTop: 'var(--dm-space-4)',
            fontFamily: 'var(--dm-font-body)',
            fontSize: '0.78rem',
            color: 'rgba(245,237,224,0.40)',
            letterSpacing: '0.05em',
          }}>
            <CheckCircle2 size={13} strokeWidth={1.5} style={{ color: 'var(--dm-ouro)', opacity: 0.6 }} />
            Pagamento 100% seguro · Garantia de 7 dias sem perguntas
          </div>

        </div>
      </div>
    </section>
  );
}
