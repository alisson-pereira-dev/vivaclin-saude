# VivaClin Saúde — 01. Design System

> Consolidado a partir da análise visual do template Framer "Dermato" cruzada com a logo oficial da VivaClin. Esta é a fonte da verdade de identidade visual do projeto.

## 1. Paleta de cores

Direção de cor confirmada com o cliente: **harmonia monocromática quente** (terracota/bege), com cor complementar fria reservada apenas para casos pontuais de contraste funcional — nunca em fotografia ou como cor de marca.

### 1.1 Cor de marca — validada pela logo oficial

A logo oficial da VivaClin usa terracota/rosé queimado como cor de assinatura. Validado por amostragem de pixel direto no arquivo da logo:

- **Hex extraído da logo:** `#B97D6E` (variação observada entre `#B97B62` e `#C28074`, dependendo da área/antialiasing da imagem)

### 1.2 Tokens de cor

| Token | Hex | Uso semântico |
|---|---|---|
| `--color-brand-dark` | `#4A1B0C` | Títulos grandes, texto de alto contraste sobre fundo claro |
| `--color-brand-primary` | `#993C1D` | Botão primário (CTA), ícones de destaque |
| `--color-brand-logo` | `#B97D6E` | Cor de assinatura extraída da logo — usar em elementos que precisam remeter diretamente à marca |
| `--color-brand-soft` | `#F0997B` | Destaques leves, hover, acentos decorativos |
| `--color-bg-section` | `#FAECE7` | Fundo de seções alternadas (bege-rosado claro) |
| `--color-bg-neutral` | `#F1EFE8` / `#FAF8F3` | Fundo neutro de respiro entre seções |
| `--color-text-body` | `#2C2C2A` | Texto de corpo sobre fundo claro |
| Branco | `#FFFFFF` | Cards, áreas de alto contraste |

### 1.3 Regras de aplicação

- Fundos sempre claros e quentes — nunca branco puro em área grande. Usar os tons bege/rosé como "branco" da marca.
- Texto escuro sempre na família terracota-escuro (`#4A1B0C`), nunca preto puro (`#000000`), para manter a calidez da paleta.
- Ritmo de alternância entre seções: usar `--color-bg-neutral` e `--color-bg-section` alternados para criar separação visual sem precisar de linhas divisórias.

### 1.4 Cor complementar (uso reservado)

Tom frio — verde-acinzentado ou teal dessaturado, complementar natural do terracota na roda de cores. `[INDEFINIDO — precisa definir o hex exato]`.

Uso permitido **apenas** em:
- Ícone de confirmação/sucesso em formulário de agendamento
- Destaque de dado importante em gráfico ou estatística
- Estado de "selecionado" em filtro interativo

Uso proibido:
- Fotografia de pessoas
- Hero
- Qualquer elemento de cor de marca

## 2. Tipografia

| Uso | Família | Característica |
|---|---|---|
| Títulos (H1, H2, headlines de hero) | Serifada fina e elegante — **Fraunces** (confirmada em uso pelo Claude Code na construção do Hero) | Alto contraste entre traços grossos e finos, estilo editorial. Usada em frases curtas e de impacto emocional |
| Corpo de texto, navegação, botões, labels | Sans-serif limpa e neutra — referências citadas: Inter, Poppins (família final não travada, mas o padrão "sans neutra" está confirmado) | Usada em parágrafos, menus, formulários, badges |

**Escala tipográfica:** `[INDEFINIDO — precisa definir tamanhos exatos em rem/px para H1, H2, H3, body, caption]`

**Padrão de peso:** a logo já estabelece um padrão de contraste de peso (bold + light na mesma composição: "VIVACLIN" em bold, "SAÚDE" em peso leve e espaçado). Replicar essa lógica de contraste de peso entre título e subtítulo em todas as seções do site.

## 3. Espaçamento

`[INDEFINIDO — precisa definir escala de espaçamento (ex: 4px/8px base, tokens de padding/margin entre seções)]`

Único dado concreto disponível no histórico: a sensação geral observada nas referências (template Dermato) é de **whitespace generoso** — espaço em branco amplo entre blocos de conteúdo, não compactado.

## 4. Tom visual em 3 adjetivos

**Elegante. Acolhedor. Editorial.**

(Derivado das decisões tomadas ao longo do projeto: escolha consciente de afastar-se do visual "frio/clínico tradicional" do site atual; preferência por composição com tipografia serifada de estilo editorial; ênfase recorrente em "acolhimento e calor humano" como sensação prioritária do Hero, acima de "autoridade clínica" ou "modernidade premium".)

## 5. Padrões de componente

### 5.1 Cards com glassmorphism (efeito vidro/blur)

Observado no card "Real results, real patients" do template de referência: fundo semitransparente com blur (frosted glass), permitindo que a imagem por trás apareça suavizada através do card. Cantos bem arredondados (raio grande — referência prática usada pelo Claude Code: `rounded-3xl`, não o `8px` padrão).

Uso recomendado: cards de depoimento sobre foto, badges de credencial, overlays de informação sobre imagens do consultório.

### 5.2 Badges/pills

Formato pill (border-radius praticamente circular nas pontas), fundo translúcido, texto curto. Usado nos nomes de especialidade nos cards do `EspecialidadesGrid`.

### 5.3 Transição "onda/arco" entre seções

Curva orgânica suave entre blocos de conteúdo, ao invés de corte reto. **Uso pontual, não em toda seção** — regra explícita já definida, para não cansar visualmente.

**Nota de implementação prática (aprendizado real do projeto):** ao implementar essa curva no componente `Consultorio.tsx`, o Claude Code identificou que a curva preenchida sozinha ficava visualmente invisível quando os tokens `--color-bg-section` e `--color-bg-neutral` são próximos em tom. Solução aplicada: adicionar um traço fino (stroke) acompanhando a curva, sem alterar nenhuma cor do design system. `[Padrão funcionou na prática, mas ainda não foi formalizado como regra obrigatória de implementação — registrar se for repetido em outras transições]`.

### 5.4 Iconografia

Ícones de linha fina (outline, não preenchidos), monocromáticos na cor de marca, estilo minimalista e levemente orgânico. Evitar ícones cheios/coloridos ou ilustrações 3D.

Ícones já mapeados por especialidade (usados pelo Claude Code no `EspecialidadesGrid`): Stethoscope (Clínica Geral), Bone (Reumatologia), Soup (Saúde Digestiva), HeartHandshake (Saúde do Idoso), Salad (Nutrição) — todos em estilo outline.

### 5.5 Botões

Dois estilos consistentes:
1. **Primário/sólido** — fundo terracota escuro, texto claro, ícone circular à esquerda dentro de um "selo" branco. Ex: "Falar no WhatsApp".
2. **Secundário/ghost** — fundo translúcido claro, outline, mesmo ícone circular. Ex: "Ver Áreas de Atuação", "Fale Conosco".

### 5.6 Ícones sociais (footer)

Círculos com fundo bege claro (não cor de marca forte), ícone de linha fina na cor terracota dentro do círculo. Hover sutil.

## 6. Referências visuais de origem

- Template Framer "Dermato" (Webestica) — demo viva em `https://dermato-wbs.framer.website/` — usado como referência de estrutura visual (não copiado literalmente; paleta adaptada para a cor de marca real da VivaClin)
- Logo oficial da VivaClin (arquivo fornecido pelo usuário) — fonte de validação da cor de marca
