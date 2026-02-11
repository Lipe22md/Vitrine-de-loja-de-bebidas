import { useState } from "react";

const Header = () => {
  const nomeDaLoja = "Depósito de Bebidas";
  const [menuAberto, setMenuAberto] = useState(false);

  const linksMenu = [
    { texto: "Início", href: "#inicio" },
    { texto: "Produtos", href: "#produtos" },
    { texto: "Sobre", href: "#sobre" },
    { texto: "Contato", href: "#contato" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="#inicio" className="flex items-center gap-2">
          <span className="text-2xl">🍺</span>
          <h1 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">
            {nomeDaLoja}
          </h1>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {linksMenu.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {link.texto}
            </a>
          ))}
          <a href="#contato" className="px-4 py-2 bg-whatsapp text-whatsapp-foreground rounded-lg text-sm font-semibold hover:bg-whatsapp/90 transition-colors">
            WhatsApp
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuAberto(!menuAberto)} className="md:hidden p-2 text-foreground" aria-label="Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuAberto ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuAberto && (
        <nav className="md:hidden border-t border-border bg-background px-4 py-4 space-y-3">
          {linksMenu.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuAberto(false)} className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {link.texto}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
