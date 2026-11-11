import type { ReactNode } from "react";

export interface Exercise {
  /** Título do exercício (h2). */
  title: string;
  /** Enunciado (p). Aceita JSX para conteúdo com HTML inline. */
  description: ReactNode;
  /** Código de apoio exibido em um bloco copiável (opcional). */
  code?: string;
  /** Imagem de resultado esperado. */
  image: { src: string; alt: string };
  /** Exibe o rótulo "Resultado Esperado:" antes da imagem. Padrão: true. */
  showResultLabel?: boolean;
}

export interface Aula {
  /** Número da aula; define a rota /aulas/{number}. */
  number: number;
  /** Título do card na home. */
  cardTitle: string;
  /** Título principal (h1) da página da aula. */
  heading: string;
  exercises: Exercise[];
}

export const aulas: Aula[] = [
  {
    number: 4,
    cardTitle: "Aula 4: Links, Imagens e Estruturação",
    heading: "Exercícios de HTML - Links, Imagens e Estruturação",
    exercises: [
      {
        title: "Exercício 1 - Link para Site Externo",
        description:
          "Crie uma página contendo um título e um parágrafo com um link que leve para o site do Google. O link deve abrir em uma nova aba.",
        image: { src: "/assets/at1.png", alt: "Resultado esperado do exercício 1" },
      },
      {
        title: "Exercício 2 - Inserindo uma Imagem",
        description:
          "Crie uma página com um título e insira uma imagem utilizando a tag img. Adicione também o atributo alt descrevendo a imagem.",
        image: { src: "/assets/at2.png", alt: "Resultado esperado do exercício 2" },
      },
      {
        title: "Exercício 3 - Imagem com Link",
        description:
          "Crie uma página com uma imagem clicável. Ao clicar na imagem, o usuário deve ser direcionado para o site do YouTube.",
        image: { src: "/assets/at3.png", alt: "Resultado esperado do exercício 3" },
      },
      {
        title: "Exercício 4 - Estruturação de Página",
        description:
          "Crie uma página utilizando as tags semânticas: header, nav, main e footer. Dentro do nav, adicione três links fictícios.",
        image: { src: "/assets/at4.png", alt: "Resultado esperado do exercício 4" },
      },
      {
        title: "Exercício 5 - Página com Links Internos",
        description:
          "Crie uma página com um menu no topo contendo links que levam para diferentes seções da mesma página.",
        image: { src: "/assets/at5.png", alt: "Resultado esperado do exercício 5" },
      },
    ],
  },
  {
    number: 5,
    cardTitle: "Aula 5: Cascading, Seletores e Propriedades",
    heading: "Exercícios de CSS - Cascading, Seletores e Propriedades",
    exercises: [
      {
        title: "Exercício 1 - Estilizando Parágrafos com Seletor de Tipo",
        description:
          "Utilize seletor de tipo para estilizar todos os parágrafos (p) com cor azul e tamanho da fonte 18px.",
        image: { src: "/assets/atv1-2.png", alt: "Resultado esperado do exercício 1" },
      },
      {
        title: "Exercício 2 - Combinando Seletor de ID e Classe",
        description:
          "Utilize o seletor de ID para deixar o título com cor azul e tamanho de 28px. Além disso, use o seletor de classe para deixar os parágrafos com cor vermelha e tamanho 18px.",
        image: { src: "/assets/atv2-2.png", alt: "Resultado esperado do exercício 2" },
      },
      {
        title: "Exercício 3 - Classe Destaque com Contraste",
        description:
          'Use a classe "destaque" e deixe os elementos que a possuírem com a cor verde e fundo amarelo.',
        image: { src: "/assets/atv3-2.png", alt: "Resultado esperado do exercício 3" },
      },
      {
        title: "Exercício 4 - Prioridade entre Classes no Mesmo Elemento",
        description:
          'Declare dois parágrafos, atribua a classe "um" em ambos, mas apenas no segundo atribua também a classe "dois". Para a classe "um", atribua a cor vermelha e fundo verde. Para a classe "dois", atribua a cor azul, que deve ser visível.',
        image: { src: "/assets/atv4-2.png", alt: "Resultado esperado do exercício 4" },
      },
      {
        title: "Exercício 5 - Estilizando Link por Atributo",
        description:
          'Deixe o link que possuir o atributo target="_blank" com fundo cinza e cor branca.',
        image: { src: "/assets/atv5-2.png", alt: "Resultado esperado do exercício 5" },
      },
      {
        title: "Exercício 6 - Título Centralizado com Seletor de ID",
        description:
          "Utilize seletor de ID para estilizar um título com cor vermelha e alinhamento central.",
        image: { src: "/assets/atv6-2.png", alt: "Resultado esperado do exercício 6" },
      },
      {
        title: "Exercício 7 - Fonte Global com Seletor Universal",
        description:
          'Utilize o seletor universal para definir a fonte padrão como "Verdana" com tamanho da fonte 16px.',
        image: { src: "/assets/atv7-2.png", alt: "Resultado esperado do exercício 7" },
      },
    ],
  },
  {
    number: 6,
    cardTitle: "Aula 6: Combinadores",
    heading: "Exercícios de CSS - Combinadores",
    exercises: [
      {
        title: "Exercício 1 - Conflito de Especificidade",
        description:
          "Crie três regras CSS diferentes que alterem a cor do texto desse elemento. Cada regra deve ter um nível de prioridade diferente.",
        code: `<p id="principal" class="texto">Exemplo de texto</p>`,
        image: { src: "/assets/atv1-3.png", alt: "Resultado esperado do exercício 1" },
      },
      {
        title: "Exercício 2 - Relações entre Elementos",
        description:
          "Aplique estilos diferentes para parágrafos que estão dentro da div, parágrafos que estão dentro da section e o parágrafo que está fora.",
        code: `<div>
  <p>Parágrafo dentro da div</p>
  <section>
    <p>Parágrafo dentro da section</p>
  </section>
</div>
<p>Parágrafo fora</p>`,
        image: { src: "/assets/atv2-3.png", alt: "Resultado esperado do exercício 2" },
      },
      {
        title: "Exercício 3 - Combinação de Relações",
        description:
          "Aplique estilos distintos para o primeiro parágrafo após o título e para todos os parágrafos que vêm depois do título.",
        code: `<section>
  <h1>Título</h1>
  <p>Parágrafo 1</p>
  <p>Parágrafo 2</p>
</section>`,
        image: { src: "/assets/atv3-3.png", alt: "Resultado esperado do exercício 3" },
      },
      {
        title: "Exercício 4 - Aplicação Global e Sobrescrita",
        description:
          "Aplique um estilo comum a todos os elementos e depois faça apenas um dos elementos ter um estilo diferente do restante.",
        code: `<h1>Título</h1>
<p>Parágrafo</p>
<span>Texto em destaque</span>`,
        image: { src: "/assets/atv4-3.png", alt: "Resultado esperado do exercício 4" },
      },
      {
        title: "Exercício 5 - Agrupamento com Contexto",
        description:
          "Aplique o mesmo estilo para os títulos e parágrafos que estão dentro da div e garanta que os elementos dentro da section não recebam esse estilo.",
        code: `<div>
  <h1>Título dentro da div</h1>
  <p>Parágrafo dentro da div</p>
</div>

<section>
  <h1>Título dentro da section</h1>
  <p>Parágrafo dentro da section</p>
</section>`,
        image: { src: "/assets/atv5-3.png", alt: "Resultado esperado do exercício 5" },
      },
      {
        title: "Exercício 6 - Elementos Internos",
        description: "Aplique estilo apenas ao parágrafo que está dentro da div.",
        code: `<div>
  <p>Parágrafo dentro da div</p>
</div>
<p>Parágrafo fora da div</p>`,
        image: { src: "/assets/atv6-3.png", alt: "Resultado esperado do exercício 6" },
      },
      {
        title: "Exercício 7 - Relação Direta",
        description:
          "Aplique estilo somente ao parágrafo que está diretamente ligado ao elemento section.",
        code: `<section>
  <p>Parágrafo direto</p>
  <div>
    <p>Parágrafo interno</p>
  </div>
</section>`,
        image: { src: "/assets/atv7-3.png", alt: "Resultado esperado do exercício 7" },
      },
      {
        title: "Exercício 8 - Irmãos em Diferentes Contextos",
        description: (
          <>
            Aplique estilo a todos os parágrafos que aparecem após o h1,
            independentemente de estarem dentro ou fora de outros elementos.
            <br />
            Depois disso, aplique outro estilo apenas ao parágrafo imediatamente
            após o h1.
          </>
        ),
        code: `<h1>Título</h1>
<p>Parágrafo 1</p>

<div>
  <p>Parágrafo 2</p>
  <p>Parágrafo 3</p>
</div>

<p>Parágrafo 4</p>`,
        image: { src: "/assets/atv8-3.png", alt: "Resultado esperado do exercício 8" },
      },
    ],
  },
  {
    number: 7,
    cardTitle: "Aula 7: Box Model e Unidades de Medida",
    heading: "Exercícios de CSS - Unidades e Box Model (Aula 7)",
    exercises: [
      {
        title: "Exercício 1 - Tamanho 1",
        description:
          "Defina uma largura e altura relativas para a caixa interna, mantendo a caixa ocupando apenas parte do espaço do elemento pai.",
        code: `<div class="container">
  <div class="box">Conteúdo</div>
</div>`,
        image: { src: "/assets/atv1-4.png", alt: "Resultado esperado do exercício 1" },
      },
      {
        title: "Exercício 2 - Tamanho 2",
        description:
          "Defina largura e altura fixas para a caixa, criando um elemento com tamanho absoluto.",
        code: `<div class="card">
  Caixa de exemplo
</div>`,
        image: { src: "/assets/atv2-4.png", alt: "Resultado esperado do exercício 2" },
      },
      {
        title: "Exercício 3 - Fonte 1",
        description:
          "Defina um tamanho de fonte relativo ao elemento <html>, mantendo o valor previsível independentemente da hierarquia dos elementos.",
        code: `<h1>Título Principal</h1>
<p>Texto secundário</p>`,
        image: { src: "/assets/atv3-4.png", alt: "Resultado esperado do exercício 3" },
      },
      {
        title: "Exercício 4 - Fonte 2",
        description:
          "Aumente progressivamente o tamanho do texto em elementos aninhados.",
        code: `<div>
  Texto externo
  <div>
    Texto interno
    <p>Parágrafo interno</p>
  </div>
</div>`,
        image: { src: "/assets/atv4-4.png", alt: "Resultado esperado do exercício 4" },
      },
      {
        title: "Exercício 5 - Viewport",
        description:
          "Crie uma seção que ocupe toda a largura e altura visíveis da tela utilizando unidades relativas à viewport.",
        code: `<section class="hero">
  <h1>Tela Inicial</h1>
</section>`,
        image: { src: "/assets/atv5-4.png", alt: "Resultado esperado do exercício 5" },
      },
      {
        title: "Exercício 6 - Padding Interno",
        description:
          "Adicione espaçamento interno e uma cor de fundo ao elemento para afastar o conteúdo das bordas sem afetar o fundo.",
        code: `<div class="box">
  Conteúdo interno
</div>`,
        image: { src: "/assets/atv8-4.png", alt: "Resultado esperado do exercício 8" },
      },
      {
        title: "Exercício 7 - Margin Externa",
        description:
          "Crie espaçamento externo entre duas caixas utilizando margin, veja o conflito de margens ocorrer.",
        code: `<div class="box">Caixa 1</div>
<div class="box">Caixa 2</div>`,
        image: { src: "/assets/atv9-4.png", alt: "Resultado esperado do exercício 9" },
      },
      {
        title: "Exercício 8 - Border-Box",
        description:
          "Configure o elemento para incluir padding e borda dentro do tamanho total da caixa utilizando box-sizing.",
        code: `<div class="card">
  Cartão de conteúdo
</div>`,
        image: { src: "/assets/atv10-4.png", alt: "Resultado esperado do exercício 10" },
      },
    ],
  },
  {
    number: 8,
    cardTitle: "Aula 8: Display e Layout",
    heading: "Exercícios de CSS - Display e Layout (Aula 8)",
    exercises: [
      {
        title: "Exercício 1 - Elementos 1",
        description:
          "Use uma tag HTML que permite ocupar toda a largura disponível da página e exibir cada item em uma linha separada, sem usar CSS.",
        image: { src: "/assets/atv1-8.png", alt: "Resultado esperado do exercício 1" },
      },
      {
        title: "Exercício 2 - Elementos 2",
        description:
          "Escolha uma tag HTML que permita que os elementos permaneçam na mesma linha, sem quebrar o fluxo do texto, sem usar CSS.",
        image: { src: "/assets/atv2-8.png", alt: "Resultado esperado do exercício 2" },
      },
      {
        title: "Exercício 3 - Elementos 3",
        description:
          "Permita que os botões fiquem lado a lado e tenham largura e altura personalizadas.",
        code: `<button>Salvar</button>
<button>Editar</button>
<button>Excluir</button>`,
        image: { src: "/assets/atv3-8.png", alt: "Resultado esperado do exercício 3" },
      },
      {
        title: "Exercício 4 - Removendo Elementos",
        description: "Remova o aviso da renderização da página sem alterar o HTML.",
        code: `<h2>Painel</h2>
<p class="aviso">Mensagem de aviso</p>
<p>Conteúdo principal</p>`,
        image: { src: "/assets/atv4-8.png", alt: "Resultado esperado do exercício 4" },
      },
      {
        title: "Exercício 5 - Elementos 4",
        description:
          "Organize os cartões horizontalmente utilizando um layout flexível.",
        code: `<div class="container">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>`,
        image: { src: "/assets/atv5-8.png", alt: "Resultado esperado do exercício 6" },
      },
      {
        title: "Exercício 6 - Direção",
        description:
          "Exiba os elementos em coluna utilizando a direção apropriada do Flexbox.",
        code: `<div class="container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`,
        image: { src: "/assets/atv6-8.png", alt: "Resultado esperado do exercício 7" },
      },
      {
        title: "Exercício 7 - Alinhamento",
        description:
          "Centralize os elementos horizontalmente e verticalmente dentro do container.",
        code: `<div class="container">
  <div>Login</div>
</div>`,
        image: { src: "/assets/atv7-8.png", alt: "Resultado esperado do exercício 8" },
      },
      {
        title: "Exercício 8 - Elementos 5",
        description:
          "Organize os elementos utilizando um layout em linhas e colunas.",
        code: `<div class="container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>`,
        image: { src: "/assets/atv8-8.png", alt: "Resultado esperado do exercício 9" },
      },
      {
        title: "Exercício 9 - Colunas",
        description: "Divida o container em duas colunas com tamanhos iguais.",
        code: `<div class="container">
  <div>Produto 1</div>
  <div>Produto 2</div>
  <div>Produto 3</div>
  <div>Produto 4</div>
</div>`,
        image: { src: "/assets/atv9-8.png", alt: "Resultado esperado do exercício 10" },
      },
      {
        title: "Exercício 10 - Espaçamento",
        description: "Adicione espaçamento uniforme entre os elementos do layout.",
        code: `<div class="container">
  <div>Caixa 1</div>
  <div>Caixa 2</div>
  <div>Caixa 3</div>
</div>`,
        image: { src: "/assets/atv10-8.png", alt: "Resultado esperado do exercício 11" },
      },
      {
        title: "Exercício 11 - Elementos 6",
        description:
          "Faça o container ocupar apenas o espaço necessário, mantendo os itens organizados com Flexbox.",
        code: `<div class="menu">
  <a href="#">Início</a>
  <a href="#">Sobre</a>
  <a href="#">Contato</a>
</div>`,
        image: { src: "/assets/atv11-8.png", alt: "Resultado esperado do exercício 12" },
      },
      {
        title: "Exercício 12 - Escolhendo o Layout",
        description:
          "Utilize um layout adequado para organizar um cabeçalho, uma barra lateral e uma área principal de conteúdo.",
        code: `<header>Topo</header>

<div class="container">
  <aside>Menu lateral</aside>
  <main>Conteúdo principal</main>
</div>`,
        image: { src: "/assets/atv12-8.png", alt: "Resultado esperado do exercício 13" },
      },
    ],
  },
  {
    number: 9,
    cardTitle: "Aula 9: Responsividade e Pseudo-seletores",
    heading: "Exercícios de CSS - Pseudo-classes e Pseudo-elementos (Aula 9)",
    exercises: [
      {
        title: "Exercícios Responsividade",
        description: (
          <>
            Acesse o seguinte{" "}
            <a href="https://www.freecodecamp.org/learn/responsive-web-design-v9/">
              curso de responsividade do FreeCodeCamp
            </a>{" "}
            e faça a seção "Responsive Design"
          </>
        ),
        image: {
          src: "/assets/freecodecamp_responsive_section.png",
          alt: "Seção de design responsivo do curso FreeCodeCamp",
        },
        showResultLabel: false,
      },
      {
        title: "Exercício 1 - Estado Hover",
        description:
          "Aplique um estilo diferente ao botão quando o cursor do mouse estiver sobre ele.",
        code: `<button>Enviar</button>`,
        image: { src: "/assets/atv1-9.png", alt: "Resultado esperado do exercício 1" },
      },
      {
        title: "Exercício 2 - Primeiro Item da Lista",
        description:
          "Destaque apenas o primeiro item da lista utilizando uma pseudo-classe estrutural.",
        code: `<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>`,
        image: { src: "/assets/atv2-9.png", alt: "Resultado esperado do exercício 2" },
      },
      {
        title: "Exercício 3 - Primeira Letra",
        description:
          "Destaque visualmente apenas a primeira letra do texto apresentado.",
        code: `<p>Pseudo-elementos permitem estilizar partes específicas do conteúdo.</p>`,
        image: { src: "/assets/atv3-9.png", alt: "Resultado esperado do exercício 3" },
      },
      {
        title: "Exercício 4 - Conteúdo Antes do Elemento",
        description:
          "Insira um símbolo antes do texto do parágrafo sem alterar o HTML original.",
        code: `<p>Item importante</p>`,
        image: { src: "/assets/atv4-9.png", alt: "Resultado esperado do exercício 4" },
      },
      {
        title: "Exercício 5 - Link Visitado",
        description:
          "Aplique um estilo diferente aos links que já foram acessados pelo usuário.",
        code: `<a href="https://example.com">Visitar site</a>`,
        image: { src: "/assets/atv5-9.png", alt: "Resultado esperado do exercício 5" },
      },
    ],
  },
];
