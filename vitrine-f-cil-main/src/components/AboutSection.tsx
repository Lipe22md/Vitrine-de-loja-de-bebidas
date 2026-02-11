const AboutSection = () => {
  return (
    <section id="sobre" className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Sobre a Nossa Loja
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Somos uma loja de bebidas comprometida em oferecer os melhores produtos com preço justo e 
              atendimento personalizado. Trabalhamos com marcas selecionadas para garantir qualidade em cada pedido.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <h4 className="font-semibold text-foreground">Atendimento Rápido</h4>
                  <p className="text-sm text-muted-foreground">Pedidos via WhatsApp com resposta imediata</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏆</span>
                <div>
                  <h4 className="font-semibold text-foreground">Produtos Premium</h4>
                  <p className="text-sm text-muted-foreground">Apenas as melhores marcas selecionadas</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">💳</span>
                <div>
                  <h4 className="font-semibold text-foreground">Pagamento via PIX</h4>
                  <p className="text-sm text-muted-foreground">Praticidade e segurança no pagamento</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border text-center">
            <h3 className="text-2xl font-bold text-foreground mb-6">💰 Pagamento via PIX</h3>
            <p className="text-muted-foreground mb-6">
              Aceitamos PIX para facilitar seu pagamento. Rápido, seguro e sem taxas!
            </p>
            {/* EDITE AQUI: Chave PIX */}
            <div className="bg-secondary rounded-lg p-4 mb-4">
              <p className="text-xs text-muted-foreground mb-1">Chave PIX (Telefone):</p>
              <p className="text-lg font-bold text-primary">(71) 99303-9382</p>
            </div>
            <p className="text-xs text-muted-foreground">
              Após o pagamento, envie o comprovante pelo WhatsApp para confirmar seu pedido.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
