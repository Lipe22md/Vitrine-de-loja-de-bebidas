/*
  ============================================
  CARD DE PRODUTO - BEBIDAS
  ============================================
  
  Cada produto tem código, nome, preço, imagem e seletor de quantidade.
  O botão WhatsApp envia código, nome e quantidade.
*/

import { useState } from "react";

interface BeverageCardProps {
  codigo: number;
  nome: string;
  preco: string;
  imagem: string;
  descricao?: string;
  numeroWhatsApp: string;
}

const BeverageCard = ({ codigo, nome, preco, imagem, descricao, numeroWhatsApp }: BeverageCardProps) => {
  const [quantidade, setQuantidade] = useState(1);

  const criarLinkWhatsApp = () => {
    const msg = `Olá! Gostaria de fazer um pedido:\n\n📦 Código: codigo-${codigo}\n🍺 Produto: ${nome}\n📏 Quantidade: ${quantidade}\n💰 Preço unitário: ${preco}\n\nPoderia confirmar disponibilidade?`;
    return `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <article className="product-card group">
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img src={imagem} alt={nome} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
        <span className="absolute top-3 left-3 text-xs font-bold bg-primary text-primary-foreground px-2 py-1 rounded">
          codigo-{codigo}
        </span>
      </div>

      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-foreground text-lg leading-tight">{nome}</h3>
          {descricao && <p className="text-xs text-muted-foreground mt-1">{descricao}</p>}
          <p className="text-xl font-bold text-primary mt-1">{preco}</p>
        </div>

        {/* Seletor de Quantidade */}
        <div>
          <p className="text-xs text-muted-foreground mb-2">Quantidade:</p>
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => setQuantidade(Math.max(1, quantidade - 1))} className="qty-btn">−</button>
            <span className="w-10 text-center font-bold text-foreground">{quantidade}</span>
            <button type="button" onClick={() => setQuantidade(quantidade + 1)} className="qty-btn">+</button>
          </div>
        </div>

        <a
          href={criarLinkWhatsApp()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3 bg-whatsapp text-whatsapp-foreground font-semibold rounded-lg hover:bg-whatsapp/90 transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Comprar via WhatsApp
        </a>
      </div>
    </article>
  );
};

export default BeverageCard;
