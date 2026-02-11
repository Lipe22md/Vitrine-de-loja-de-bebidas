import heroBanner from "@/assets/banner-cerveja.png";

const HeroBanner = () => {
  return (
    <section id="inicio" className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
      <img src={heroBanner} alt="Banner da loja de bebidas" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/30" />
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
              Sua Adega de <span className="text-primary">Confiança</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Cervejas, whisky, gelo saborizado e muito mais. Peça pelo WhatsApp e receba rápido!
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#produtos" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all">
                Ver Produtos
              </a>
              <a href="#contato" className="inline-flex items-center gap-2 px-8 py-4 border border-foreground/30 text-foreground font-semibold rounded-lg hover:bg-foreground/10 transition-all">
                Saiba Mais
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
