import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Açaí Blessed CSA • Links',
  description: 'Links rápidos para pedidos - WhatsApp e iFood do Açaí Blessed CSA',
  robots: 'index, follow',
};

export default function CSALinksPage() {
  return (
    <html lang="pt-BR">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{
          __html: `
            :root{
              --primary:#4e0073;
              --secondary:#ff9b00;
              --cream:#fff7e0;
              --bg-acai:url('/csa/fundo.jpg');
            }
            *{box-sizing:border-box;margin:0;padding:0;font-family:'Montserrat',sans-serif;}
            body{
              min-height:100vh;display:flex;align-items:center;justify-content:center;color:var(--cream);padding:24px;position:relative;overflow:hidden;
            }
            body::before{
              content:'';position:absolute;inset:0;background:var(--bg-acai) center/cover no-repeat;
              filter:blur(12px) brightness(0.55);transform:scale(1.08);z-index:-3;
            }
            body::after{
              content:'';position:absolute;inset:0;background:linear-gradient(120deg,rgba(78,0,115,0.70) 40%,rgba(255,155,0,0.70) 100%);z-index:-2;
            }
            .card{
              width:100%;max-width:440px;background:rgba(255,255,255,0.06);backdrop-filter:blur(10px) saturate(180%);
              -webkit-backdrop-filter:blur(10px) saturate(180%);
              border:1px solid rgba(255,255,255,0.15);border-radius:24px;
              padding:46px 32px 54px;text-align:center;box-shadow:0 10px 32px rgba(0,0,0,0.35);animation:fadeIn 0.8s ease both;
            }
            @keyframes fadeIn{from{opacity:0;transform:translateY(20px);}to{opacity:1;transform:none;}}
            .brand{display:flex;align-items:center;justify-content:center;gap:20px;margin-bottom:32px;flex-wrap:nowrap;}
            .brand-logo{width:80px;height:80px;flex-shrink:0;object-fit:contain;border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,0.35);}
            .brand-text{display:flex;flex-direction:column;align-items:flex-start;gap:4px;}
            .logo{font-size:2.3rem;font-weight:700;letter-spacing:-0.5px;color:var(--cream);line-height:1.05;text-shadow:0 2px 4px rgba(0,0,0,0.35);}
            .subtitle{font-size:1rem;font-weight:600;color:var(--secondary);}
            .link-btn{display:flex;align-items:center;justify-content:center;gap:8px;width:100%;margin-bottom:22px;padding:15px 22px;font-size:1.05rem;font-weight:600;border:none;border-radius:14px;cursor:pointer;text-decoration:none;color:var(--primary);background:var(--cream);transition:transform 0.18s ease,box-shadow 0.18s ease;}
            .link-btn:hover{transform:translateY(-4px);box-shadow:0 8px 18px rgba(0,0,0,0.35);}    
            .link-btn.whatsapp{color:#fff;background:linear-gradient(135deg,#25d366 0%,#128c7e 100%);}    
            .link-btn.ifood{color:#fff;background:linear-gradient(135deg,#e80000 0%,#ff4d4d 100%);}    
            footer{margin-top:38px;font-size:0.8rem;opacity:0.85;}
            footer a { color: inherit; text-decoration: none; }
            @media(max-width:380px){
              .brand{gap:12px;}
              .brand-logo{width:65px;height:65px;}
              .logo{font-size:1.8rem;}
              .subtitle{font-size:0.9rem;}
            }
          `
        }} />
      </head>
      <body>
        <main className="card">
          <div className="brand">
            <img className="brand-logo" src="/csa/acaiblessedlgsemfundo.png" alt="Logo Açaí Blessed" />
            <div className="brand-text">
              <h1 className="logo">AÇAÍ<br />BLESSED</h1>
              <p className="subtitle">Monte do seu jeito 🍧</p>
            </div>
          </div>

          <a className="link-btn whatsapp" href="https://wa.me/5511974440966" target="_blank" rel="noopener">💬 Pedir no WhatsApp</a>
          <a className="link-btn ifood" href="https://www.ifood.com.br/delivery/mogi-das-cruzes-sp/acai-blessed-csa-conjunto-residencial-santo-angelo/20c62464-aa5a-4f9c-b3ba-9c760cdc7520?utm_medium=share&srsltid=AfmBOopjbcXoYG4YdiFlNUBhxn74W3RoDvCbPF2toUO56jc_21cFkV70" target="_blank" rel="noopener">🍽️ Pedir no iFood</a>
          <Link href="/" className="link-btn">🌐 Nossa Landing Page</Link>

          <footer>
            <a href="https://www.instagram.com/acaiblessedcsa/" target="_blank" rel="noopener">@acaiblessedcsa</a>
          </footer>
        </main>
      </body>
    </html>
  );
}