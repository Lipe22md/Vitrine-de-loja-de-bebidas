/*
  ============================================
  SEÇÃO DE PRODUTOS - LOJA DE BEBIDAS
  ============================================
  
  COMO EDITAR/ADICIONAR PRODUTOS:
  1. Encontre a categoria desejada abaixo
  2. Copie um bloco de produto existente
  3. Cole e altere os dados (nome, preço, descrição)
  4. O código é gerado automaticamente pela posição
  
  COMO ALTERAR O NÚMERO DO WHATSAPP:
  - Altere a variável "numeroWhatsApp" abaixo

  COMO TROCAR A IMAGEM DE UM PRODUTO:
  1. Coloque sua imagem na pasta src/assets/
  2. Importe ela aqui embaixo (copie uma linha e troque o nome)
  3. Substitua a variável da imagem no produto desejado
*/

import BeverageCard from "./BeverageCard";

// =============================================
// EDITE AQUI: Número do WhatsApp comercial
// =============================================
const numeroWhatsApp = "5571993039382";

// =============================================
// Importando imagens - CERVEJAS GARRAFA
// =============================================
import cervejaGarrafa1Img from "@/assets/garrafa de sol.png";
import cervejaGarrafa2Img from "@/assets/garrafa de brahma.jpg";
import cervejaGarrafa3Img from "@/assets/garrafa de amstel.jpg";
import cervejaGarrafa4Img from "@/assets/garrafa de heineken.jpg";
import cervejaGarrafa5Img from "@/assets/garrafa de Budweiser.jpg";
import cervejaGarrafa6Img from "@/assets/garrafa de corona.jpg";

// =============================================
// Importando imagens - CERVEJAS LATA
// =============================================
import cervejaLata1Img from "@/assets/lata de itaipava.png";
import cervejaLata2Img from "@/assets/lata de amstel.jpg";
import cervejaLata3Img from "@/assets/lata de heineken.jpg";
import cervejaLata4Img from "@/assets/lata 1 de budweiser.png";
import cervejaLata5Img from "@/assets/lata-de-stella-3.png";
import cervejaLata6Img from "@/assets/lata de skol 2.jpg";

// =============================================
// Importando imagens - CAIXAS DE GARRAFAS
// =============================================
import caixaGarrafa1Img from "@/assets/caixa de antarctida.jpg";
import caixaGarrafa2Img from "@/assets/caixa de skol garrafa.png";
import caixaGarrafa3Img from "@/assets/caixa de garrafa spaten.png";
import caixaGarrafa4Img from "@/assets/imagem-heineken-caixa-de-garrafa.png";
import caixaGarrafa5Img from "@/assets/caixa de garrafa de ashby.webp";
import caixaGarrafa6Img from "@/assets/caixa de cerveja eisenbahn.webp";

// =============================================
// Importando imagens - CAIXAS DE LATAS
// =============================================
import caixaLata1Img from "@/assets/imagem heineken caixa de lata.png";
import caixaLata2Img from "@/assets/caixa-de-lata-de-stella.png";
import caixaLata3Img from "@/assets/caixa de lata brahma.webp";
import caixaLata4Img from "@/assets/caixa de lata de skol.webp";
import caixaLata5Img from "@/assets/caixa de lata de budweiser.jpg";
import caixaLata6Img from "@/assets/caixa de lata de itaipava.jpeg";

// =============================================
// Importando imagens - WHISKY
// =============================================
import whisky1Img from "@/assets/whisky-jack-daniels-fire-1l.png";
import whisky2Img from "@/assets/whisky_jack_daniels_apple_1000ml.png";
import whisky3Img from "@/assets/whisky_johnnie_walker_red_label_500ml.png";
import whisky4Img from "@/assets/Whisky-Ballantine_s-Finest-8-Anos-1L.png";
import whisky5Img from "@/assets/jack-daniels-whisky.png";
import whisky6Img from "@/assets/White-Horse-Blended-Scotch-Whisky-1L.png";

// =============================================
// Importando imagens - GELO SABORIZADO
// =============================================
import gelo1Img from "@/assets/gelo-para-drinks-sabor-laranja-coco-leve.png";
import gelo2Img from "@/assets/Gelo-Limao-Coco-Leve.png";
import gelo3Img from "@/assets/Gelo-sabor-Maca-Verde-Coco-leve.png";
import gelo4Img from "@/assets/88913-gelo-coco-leve-sabor-morango.png";
import gelo5Img from "@/assets/88915-gelo-coco-leve-sabor-maracuja.png";
import gelo6Img from "@/assets/embalagem_para_gelo_saborizado_sabor_melancia.png";

// =============================================
// EDITE AQUI: Lista de CERVEJAS - GARRAFA
// =============================================
const cervejasGarrafa = [
  { id: 1, nome: "Cerveja Pilsen Sol Garrafa 330ml", preco: "R$ 8,90", descricao: "Cerveja pilsen clássica, gelada e refrescante", imagem: cervejaGarrafa1Img },
  { id: 2, nome: "Cerveja Brahma Garrafa 600ml", preco: "R$ 12,90", descricao: "Cerveja premium importada, sabor encorpado", imagem: cervejaGarrafa2Img },
  { id: 3, nome: "CERVEJA AMSTEL LAGER GARRAFA RETORNAVEL 600ML", preco: "R$ 18,90", descricao: "IPA artesanal com lúpulo selecionado", imagem: cervejaGarrafa3Img },
  { id: 4, nome: "Cerveja Lager HEINEKEN Premium Garrafa 250ml", preco: "R$ 14,90", descricao: "Cerveja de trigo leve e aromática", imagem: cervejaGarrafa4Img },
  { id: 5, nome: "Garrafa Cerveja Budweiser em Alumínio 473ml", preco: "R$ 9,90", descricao: "Lager suave e equilibrada", imagem: cervejaGarrafa5Img },
  { id: 6, nome: "Cerveja Pilsen Corona Garrafa 330ml", preco: "R$ 16,90", descricao: "Cerveja escura com notas de café e chocolate", imagem: cervejaGarrafa6Img },
];

// =============================================
// EDITE AQUI: Lista de CERVEJAS - LATA
// =============================================
const cervejasLata = [
  { id: 7, nome: "Cerveja Itaipava Pilsen Lata 350ml", preco: "R$ 4,50", descricao: "Lata gelada, prática e refrescante", imagem: cervejaLata1Img },
  { id: 8, nome: "Cerveja Puro Malte AMSTEL Lager Lata 269ml", preco: "R$ 6,90", descricao: "Cerveja premium em lata, ideal para eventos", imagem: cervejaLata2Img },
  { id: 9, nome: "Cerveja Heineken Lata 269ml", preco: "R$ 5,90", descricao: "Latão de puro malte, sabor intenso", imagem: cervejaLata3Img },
  { id: 10, nome: "Cerveja Budweiser American Lager 473ml Lata", preco: "R$ 8,90", descricao: "IPA encorpada em lata, amargor equilibrado", imagem: cervejaLata4Img },
  { id: 11, nome: "Cerveja Stella Artois Puro Malte 350ml Lata", preco: "R$ 3,90", descricao: "Lager leve e refrescante para o dia a dia", imagem: cervejaLata5Img },
  { id: 12, nome: "Cerveja Pilsen Skol Lata 269ml", preco: "R$ 7,50", descricao: "Trigo em lata com aroma frutado", imagem: cervejaLata6Img },
];

// =============================================
// EDITE AQUI: Lista de CERVEJAS - CAIXA DE GARRAFAS
// =============================================
const caixasGarrafas = [
  { id: 13, nome: "Cerveja Antarctica Original 300ml Caixa", preco: "R$ 89,90", descricao: "12 garrafas com desconto especial", imagem: caixaGarrafa1Img },
  { id: 14, nome: "Cerveja Skol Pilsen Litrinho 300ml Caixa C/12", preco: "R$ 139,90", descricao: "12 garrafas premium para sua festa", imagem: caixaGarrafa2Img },
  { id: 15, nome: "Cerveja Spaten Puro Malte Garrafa Vidro 600ml CX C/12", preco: "R$ 99,90", descricao: "12 garrafas lager selecionadas", imagem: caixaGarrafa3Img },
  { id: 16, nome: "Cerveja Heineken Long Neck 330ml - Pack 06", preco: "R$ 149,90", descricao: "12 garrafas de trigo artesanal", imagem: caixaGarrafa4Img },
  { id: 17, nome: "Caixa Cerveja Artesanal 6 Garrafas 500ml", preco: "R$ 99,90", descricao: "6 garrafas artesanais sortidas", imagem: caixaGarrafa5Img },
  { id: 18, nome: "Cerveja Eisenbahn Pilsen Pack 6 Garrafas 355ml", preco: "R$ 169,90", descricao: "12 garrafas escuras premium", imagem: caixaGarrafa6Img },
];

// =============================================
// EDITE AQUI: Lista de CERVEJAS - CAIXA DE LATAS
// =============================================
const caixasLatas = [
  { id: 19, nome: "Cerveja Heineken Premium Puro Malte 350ml Caixa 12 Unidades", preco: "R$ 44,90", descricao: "Pack com 12 latas, ótimo custo-benefício", imagem: caixaLata1Img },
  { id: 20, nome: "Cerveja Stella Artois Puro Malte 269ml Lata Pack Caixa 8", preco: "R$ 59,90", descricao: "12 latas de puro malte selecionado", imagem: caixaLata2Img },
  { id: 21, nome: "Cerveja Brahma Chopp Pilsen 269ml Lata Pack Caixa 15", preco: "R$ 69,90", descricao: "12 latas premium importadas", imagem: caixaLata3Img },
  { id: 22, nome: "Cerveja skol lata caixa com 12", preco: "R$ 89,90", descricao: "12 latas IPA para os apreciadores", imagem: caixaLata4Img },
  { id: 23, nome: "Cerveja Budweiser American Lager 8 Unidades Lata 269ml", preco: "R$ 54,90", descricao: "Pack econômico com 18 latas", imagem: caixaLata5Img },
  { id: 24, nome: "Caixa de Cerveja Itaipava Pilsen Lata 269ml c/12", preco: "R$ 79,90", descricao: "12 latas de trigo aromática", imagem: caixaLata6Img },
];

// =============================================
// EDITE AQUI: Lista de WHISKY
// =============================================
const whiskys = [
  { id: 25, nome: "Whisky Jack Daniel's Fire 1L", preco: "R$ 89,90", descricao: "Blend clássico, ideal para drinks", imagem: whisky1Img },
  { id: 26, nome: "Whisky Jack Daniel's Apple 1000ml", preco: "R$ 159,90", descricao: "Blend premium envelhecido 12 anos", imagem: whisky2Img },
  { id: 27, nome: "Whisky Johnnie Walker Red Label 500ml", preco: "R$ 179,90", descricao: "Tennessee whiskey original", imagem: whisky3Img },
  { id: 28, nome: "Whisky Ballantine's Finest 8 Anos 1L", preco: "R$ 189,90", descricao: "Blend escocês suave e refinado", imagem: whisky4Img },
  { id: 29, nome: "Whisky Jack Daniel's Old No. 7 Tennessee Whiskey 1L", preco: "R$ 129,90", descricao: "Whiskey irlandês tripla destilação", imagem: whisky5Img },
  { id: 30, nome: "White Horse Blended Scotch Whisky 1L", preco: "R$ 69,90", descricao: "Blend acessível com sabor defumado", imagem: whisky6Img },
];

// =============================================
// EDITE AQUI: Lista de GELO SABORIZADO
// =============================================
const gelosSaborizados = [
  { id: 31, nome: "Gelo Coco Leve Sabor Laranja 190 g", preco: "R$ 12,90", descricao: "Cubos de gelo sabor limão para drinks", imagem: gelo1Img },
  { id: 32, nome: "Gelo Coco Leve Sabor Limão 190 g", preco: "R$ 14,90", descricao: "Mix de frutas vermelhas congeladas", imagem: gelo2Img },
  { id: 33, nome: "Gelo para Drink Maçã Verde Coco Leve Pacote 190g", preco: "R$ 12,90", descricao: "Sabor tropical para suas bebidas", imagem: gelo3Img },
  { id: 34, nome: "Gelo Coco Leve Sabor Morango 190 g", preco: "R$ 13,90", descricao: "Sabor morango refrescante", imagem: gelo4Img },
  { id: 35, nome: "Gelo Coco Leve Maracujá 190g", preco: "R$ 12,90", descricao: "Toque tropical de abacaxi", imagem: gelo5Img },
  { id: 36, nome: "Gelo para drink sabor melancia 190g", preco: "R$ 13,90", descricao: "Refrescância extra com menta natural", imagem: gelo6Img },
];

interface CategorySectionProps {
  id: string;
  titulo: string;
  descricao: string;
  produtos: { id: number; nome: string; preco: string; descricao?: string; imagem: string }[];
}

const CategorySection = ({ id, titulo, descricao, produtos }: CategorySectionProps) => (
  <div id={id} className="mb-16">
    <div className="text-center mb-8">
      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{titulo}</h3>
      <p className="text-muted-foreground max-w-xl mx-auto text-sm">{descricao}</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {produtos.map((produto) => (
        <BeverageCard
          key={produto.id}
          codigo={produto.id}
          nome={produto.nome}
          preco={produto.preco}
          imagem={produto.imagem}
          descricao={produto.descricao}
          numeroWhatsApp={numeroWhatsApp}
        />
      ))}
    </div>
  </div>
);

const ProductsSection = () => {
  return (
    <section id="produtos" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nossos Produtos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore nosso catálogo completo de bebidas. Clique em comprar para pedir pelo WhatsApp!
          </p>
        </div>

        <CategorySection id="cervejas-garrafa" titulo="🍺 Cervejas - Garrafa" descricao="Garrafas individuais das melhores marcas." produtos={cervejasGarrafa} />
        <CategorySection id="cervejas-lata" titulo="🥫 Cervejas - Lata" descricao="Latas práticas para qualquer ocasião." produtos={cervejasLata} />
        <CategorySection id="caixas-garrafas" titulo="📦 Caixas de Garrafas" descricao="Caixas com desconto especial para festas e eventos." produtos={caixasGarrafas} />
        <CategorySection id="caixas-latas" titulo="📦 Caixas de Latas" descricao="Packs de latas com preço acessível." produtos={caixasLatas} />
        <CategorySection id="whisky" titulo="🍷 Whisky" descricao="Seleção premium de whiskys nacionais e importados." produtos={whiskys} />
        <CategorySection id="gelo-saborizado" titulo="🧊 Gelo Saborizado" descricao="Dê um toque especial aos seus drinks com gelo saborizado." produtos={gelosSaborizados} />
      </div>
    </section>
  );
};

export default ProductsSection;
