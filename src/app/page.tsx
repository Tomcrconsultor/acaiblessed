export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-600 to-orange-500 flex items-center justify-center">
      <div className="text-center text-white p-8">
        <h1 className="text-6xl font-bold mb-4">Açaí Blessed</h1>
        <p className="text-xl mb-8">Landing page temporária - testando deploy</p>
        <a 
          href="https://wa.me/5511974440966"
          className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-full text-white font-bold text-xl transition-all duration-300 hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
        >
          💬 Peça no WhatsApp
        </a>
        <div className="mt-8">
          <a 
            href="/csa"
            className="text-white underline hover:text-orange-200"
          >
            → Ir para página de links (/csa)
          </a>
        </div>
      </div>
    </main>
  );
}
