import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer
      style={{
        background: 'linear-gradient(170deg, var(--dm-noir) 0%, var(--dm-espresso) 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top gold line */}
      <div className="dm-gold-line" style={{ position: 'absolute', top: 0, margin: 0, left: 0, right: 0 }} />

      {/* Atmospheric orb */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 80% at 50% 0%, rgba(192,146,66,0.06) 0%, transparent 60%)',
      }} />

      {/* Pre-footer CTA strip */}
      <div style={{
        borderBottom: '1px solid rgba(192,146,66,0.10)',
        padding: 'var(--dm-space-7) 0',
        position: 'relative', zIndex: 1,
      }}>
        <div className="dm-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 'var(--dm-space-4)' }}>
          <h3 style={{
            fontFamily: 'var(--dm-font-heading)',
            fontWeight: 400,
            fontStyle: 'italic',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
            color: 'var(--dm-marfim)',
            margin: 0,
            lineHeight: 1.1,
            maxWidth: 560,
          }}>
            Pronta para iniciar o seu{' '}
            <span style={{ color: 'var(--dm-ouro-light)' }}>divórcio materno</span>?
          </h3>
          <Button href="#oferta">
            Começar agora
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>

      {/* Footer bottom */}
      <div style={{
        padding: 'var(--dm-space-6) 0',
        position: 'relative', zIndex: 1,
      }}>
        <div className="dm-container" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'var(--dm-space-4)',
          textAlign: 'center',
        }}>

          {/* Brand */}
          <div>
            <div style={{
              fontFamily: 'var(--dm-font-heading)',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: '1.6rem',
              color: 'var(--dm-ouro-light)',
              lineHeight: 1,
              marginBottom: 4,
            }}>
              Divórcio Materno
            </div>
            <div style={{
              fontFamily: 'var(--dm-font-body)',
              fontSize: '0.7rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(245,237,224,0.35)',
            }}>
              Escola da Nova Linhagem
            </div>
          </div>

          {/* Thin divider */}
          <div style={{ width: 40, height: '1px', background: 'rgba(192,146,66,0.25)' }} />

          {/* Contact */}
          <div style={{
            display: 'flex',
            gap: 'var(--dm-space-5)',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
            {[
              ['E-mail', 'suporte@escoladanovalinhagem.com.br'],
              ['WhatsApp', '(11) 99999-9999'],
            ].map(([label, value]) => (
              <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
                <span style={{
                  fontFamily: 'var(--dm-font-body)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--dm-ouro)',
                  opacity: 0.6,
                }}>
                  {label}
                </span>
                <span style={{
                  fontFamily: 'var(--dm-font-body)',
                  fontSize: '0.88rem',
                  color: 'rgba(245,237,224,0.55)',
                }}>
                  {value}
                </span>
              </div>
            ))}
          </div>

          {/* Legal */}
          <div style={{
            fontFamily: 'var(--dm-font-body)',
            fontSize: '0.75rem',
            color: 'rgba(245,237,224,0.25)',
            letterSpacing: '0.04em',
            marginTop: 'var(--dm-space-2)',
          }}>
            © {new Date().getFullYear()} Escola da Nova Linhagem. Todos os direitos reservados.
          </div>

        </div>
      </div>
    </footer>
  );
}
