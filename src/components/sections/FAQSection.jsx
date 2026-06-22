import { useState, useRef, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqItems = [
  {
    q: "Em quanto tempo tenho acesso à imersão?",
    a: "Assim que o pagamento for aprovado, você receberá o acesso imediatamente no seu e-mail cadastrado."
  },
  {
    q: "Por quanto tempo poderei assistir?",
    a: "O acesso é imediato e vitalício. Você pode voltar, revisitar e assistir no seu próprio ritmo, sempre que precisar e no tempo que desejar."
  },
  {
    q: "Isso substitui terapia?",
    a: "Não. A imersão é um complemento poderoso focado, especificamente, na sua dinâmica com a mãe e seus efeitos financeiros, mas não substitui acompanhamento clínico adequado."
  },
  {
    q: "Como funciona a garantia?",
    a: "Você tem 7 dias de garantia incondicional e blindada. Se assistir e sentir que não é para você, basta solicitar o reembolso na plataforma. Sem perguntas, sem burocracia."
  },
];

function AccordionItem({ item, isOpen, onToggle }) {
  const bodyRef = useRef(null);

  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    if (isOpen) {
      el.style.maxHeight = el.scrollHeight + 'px';
      el.style.opacity = '1';
    } else {
      el.style.maxHeight = '0';
      el.style.opacity = '0';
    }
  }, [isOpen]);

  return (
    <div
      style={{
        borderRadius: 'var(--dm-radius-md)',
        border: `1px solid ${isOpen ? 'rgba(192,146,66,0.30)' : 'var(--dm-border)'}`,
        background: isOpen ? 'var(--dm-surface)' : 'rgba(255,255,255,0.6)',
        overflow: 'hidden',
        transition: 'border-color 300ms ease, background 300ms ease, box-shadow 300ms ease',
        boxShadow: isOpen ? 'var(--dm-shadow-card)' : 'none',
      }}
    >
      {/* Question */}
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 'var(--dm-space-4)',
          padding: 'var(--dm-space-4) var(--dm-space-5)',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <span style={{
          fontFamily: 'var(--dm-font-heading)',
          fontWeight: 500,
          fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
          color: isOpen ? 'var(--dm-espresso)' : 'var(--dm-text-dark)',
          lineHeight: 1.3,
          transition: 'color 300ms ease',
        }}>
          {item.q}
        </span>
        <div style={{
          width: 32, height: 32, flexShrink: 0,
          borderRadius: '50%',
          background: isOpen ? 'var(--dm-ouro)' : 'var(--dm-creme-2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background 300ms ease, transform 300ms ease',
          transform: isOpen ? 'rotate(0deg)' : 'rotate(0deg)',
          color: isOpen ? 'var(--dm-espresso)' : 'var(--dm-caramelo)',
        }}>
          {isOpen
            ? <Minus size={14} strokeWidth={2.5} />
            : <Plus size={14} strokeWidth={2.5} />
          }
        </div>
      </button>

      {/* Answer */}
      <div
        ref={bodyRef}
        style={{
          maxHeight: '0',
          opacity: '0',
          overflow: 'hidden',
          transition: 'max-height 400ms cubic-bezier(0.16,1,0.3,1), opacity 350ms ease',
        }}
      >
        <div style={{ padding: '0 var(--dm-space-5) var(--dm-space-5)' }}>
          <div style={{
            width: '100%', height: '1px',
            background: 'rgba(192,146,66,0.15)',
            marginBottom: 'var(--dm-space-4)',
          }} />
          <p style={{
            fontFamily: 'var(--dm-font-body)',
            fontSize: '0.95rem',
            lineHeight: 1.75,
            color: 'var(--dm-text)',
            opacity: 0.8,
            margin: 0,
          }}>
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const headRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    [headRef, listRef].forEach((ref, i) => {
      const el = ref.current;
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 700ms cubic-bezier(0.16,1,0.3,1), transform 700ms cubic-bezier(0.16,1,0.3,1)';
      const obs = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; }, i * 150);
          obs.disconnect();
        }
      }, { threshold: 0.1 });
      obs.observe(el);
      return () => obs.disconnect();
    });
  }, []);

  return (
    <section
      id="faq"
      style={{
        padding: 'var(--dm-space-8) 0',
        background: 'var(--dm-creme)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="dm-container" style={{ maxWidth: 760 }}>

        {/* Header */}
        <div ref={headRef} style={{ textAlign: 'center', marginBottom: 'var(--dm-space-7)' }}>
          <div className="dm-kicker" style={{ justifyContent: 'center', marginBottom: 'var(--dm-space-3)' }}>
            Dúvidas
          </div>
          <h2 style={{
            fontFamily: 'var(--dm-font-heading)',
            fontWeight: 400,
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            color: 'var(--dm-espresso)',
            margin: 0,
            lineHeight: 1.05,
          }}>
            Perguntas{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--dm-ouro)' }}>Frequentes</em>
          </h2>
          <div className="dm-divider" style={{ marginTop: 'var(--dm-space-4)' }} />
        </div>

        {/* Accordion */}
        <div
          ref={listRef}
          style={{ display: 'flex', flexDirection: 'column', gap: 'var(--dm-space-2)' }}
        >
          {faqItems.map((item, idx) => (
            <AccordionItem
              key={idx}
              item={item}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
