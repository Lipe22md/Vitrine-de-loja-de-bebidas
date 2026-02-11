const Footer = () => {
  // =============================================
  // EDITE AQUI: Informações da loja
  // =============================================
  const nomeDaLoja = "Depósito de Bebidas";
  const telefone = "(71) 99303-9382";
  const endereco = "Rua das Bebidas, 123 - Centro";
  const horario = "Seg a Sáb: 9h às 22h | Dom: 10h às 18h";
  const numeroWhatsApp = "5571993039382";

  return (
    <footer className="bg-card border-t border-border">
      {/* Seção de Contato */}
      <div id="contato" className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">Entre em Contato</h2>
          <p className="text-muted-foreground text-center mb-10">Faça seu pedido ou tire suas dúvidas pelo WhatsApp!</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
            <div className="text-center p-6 bg-secondary rounded-lg">
              <span className="text-3xl block mb-2">📍</span>
              <h4 className="font-semibold text-foreground mb-1">Endereço</h4>
              <p className="text-sm text-muted-foreground">{endereco}</p>
            </div>
            <div className="text-center p-6 bg-secondary rounded-lg">
              <span className="text-3xl block mb-2">📞</span>
              <h4 className="font-semibold text-foreground mb-1">Telefone</h4>
              <p className="text-sm text-muted-foreground">{telefone}</p>
            </div>
            <div className="text-center p-6 bg-secondary rounded-lg">
              <span className="text-3xl block mb-2">🕐</span>
              <h4 className="font-semibold text-foreground mb-1">Horário</h4>
              <p className="text-sm text-muted-foreground">{horario}</p>
            </div>
          </div>

          {/* CTA WhatsApp */}
          <div className="bg-whatsapp/10 border border-whatsapp/30 rounded-2xl p-8 text-center max-w-lg mx-auto">
            <span className="text-4xl block mb-3">💬</span>
            <h3 className="text-xl font-bold text-foreground mb-2">Faça seu Pedido pelo WhatsApp</h3>
            <p className="text-sm text-muted-foreground mb-4">Atendimento rápido e personalizado!</p>
            <a
              href={`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent("Olá! Gostaria de fazer um pedido.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-whatsapp text-whatsapp-foreground font-semibold rounded-lg hover:bg-whatsapp/90 transition-colors"
            >
              Abrir WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 {nomeDaLoja}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Beba com moderação. Venda proibida para menores de 18 anos.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
