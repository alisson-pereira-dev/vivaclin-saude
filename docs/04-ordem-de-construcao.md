# VivaClin Saúde — 04. Ordem de Construção

> Sequência de construção, seção por seção, para o Claude Code seguir uma a cada vez — agora apoiada por mockup/imagem de referência visual em cada etapa, conforme nova abordagem de direcionamento.

## Status atual do projeto (checkpoint)

| # | Seção/Componente | Rota | Status | Observação |
|---|---|---|---|---|
| 1 | Setup do projeto (Next.js + TS + Tailwind v4 + Motion) | — | ✅ Concluído | Turbopack confirmado, lint e type-check passando limpos |
| 2 | Header | `/` | ✅ Concluído (junto com Hero) | Item "Artigos" removido do menu |
| 3 | Hero | `/` | ✅ Concluído | Imagem real implementada via `next/image`; validado em 3 breakpoints |
| 4 | EspecialidadesGrid | `/` | ✅ Concluído | 5 cards com ícone, sem imagem de foto (uso só de ícone, por especificação) |
| 5 | SobreNos | `/` | ✅ Concluído | Acordeão funcionando; correção do título da Silvia Carvalho aplicada; fotos das 3 profissionais em placeholder |
| 6 | Depoimentos | `/` | ⏸️ Bloqueado | Depoimentos reais não coletados — não construir com conteúdo fictício |
| 7 | Consultorio | `/` | ✅ Concluído | Galeria em placeholder; resolvido problema de visibilidade da curva orgânica com stroke |
| 8 | FAQ | `/` | ✅ Concluído | Acordeão funcionando; normalização de texto aplicada |
| 9 | ArtigosPreview | `/` | ❌ Fora de escopo nesta fase | Blog removido do projeto por decisão do usuário — ver documento 05, Regras do Projeto |
| 10 | CTAFinal | `/` | 🔲 Não iniciado | Próximo item estrutural da Home |
| 11 | Footer | `/` | 🔲 Não iniciado | — |
| 12 | WhatsAppFloat | Todas | 🔲 Não iniciado | — |
| 13 | Páginas de especialidade (5x, mesmo template) | `/areas-de-atuacao/[slug]` | 🔲 Não iniciado | — |
| 14 | Blog (listagem + post) | `/artigos`, `/artigos/[slug]` | ❌ Fora de escopo nesta fase | Retomar em fase futura |

**Avaliação qualitativa registrada pelo usuário:** o resultado visual obtido até o item 8 (FAQ) foi considerado "pobre" — estrutura e conteúdo corretos, mas sem a textura visual rica documentada no Design System (glassmorphism, sombras, profundidade). Diagnóstico: a abordagem de só passar o documento de texto para o Claude Code interpretar livremente não está gerando o resultado visual esperado.

## Nova abordagem a partir de agora

Cada seção da lista abaixo será construída com o apoio de **mockup ou imagem de referência visual concreta** anexada ao prompt daquela seção, em vez de depender só da descrição textual do Design System. O objetivo é direcionar posicionamento de elementos, hierarquia visual e textura (sombras, blur, profundidade) de forma muito mais explícita do que o texto permite.

## Ordem de construção recomendada (retomando a partir do checkpoint)

1. **CTAFinal** (`/`) — pendente, é o próximo item estrutural da Home na sequência original
2. **Footer** (`/`) — pendente
3. **WhatsAppFloat** (todas as páginas) — pendente
4. **Rodada de refinamento visual da Home completa** — momento sugerido para revisar, com apoio de mockup, os componentes já construídos (Hero, EspecialidadesGrid, SobreNos, Consultorio, FAQ) e aplicar a textura visual que ficou "pobre" (glassmorphism, sombras, profundidade, curva orgânica em mais pontos se fizer sentido) — `[INDEFINIDO — esta rodada de refinamento não foi formalmente decidida pelo usuário ainda, sugerida aqui como ponto lógico de checagem antes de avançar para as páginas de especialidade]`
5. **Depoimentos** — retomar somente quando houver depoimentos reais coletados
6. **Páginas de especialidade** (5x — Clínica Geral, Reumatologia, Saúde Digestiva, Saúde do Idoso, Nutrição), mesma estrutura de template, uma por vez
7. **Blog** — fora de escopo desta fase, retomar em fase futura conforme decisão registrada

## Princípio de execução (por seção, daqui para frente)

Para cada seção da lista acima, o fluxo de trabalho passa a ser:

1. Usuário fornece mockup/imagem de referência visual da seção específica
2. Usuário (ou este documento) fornece o copy completo da seção (documento 02) e as regras de stack/responsividade/animação aplicáveis (documento 03)
3. Claude Code constrói o componente seguindo o mockup como guia de posicionamento e textura visual, e o copy/regras como guia de conteúdo e comportamento técnico
4. Validação em pelo menos 3 breakpoints (375px, 768px, 1024px ou 1440px) antes de considerar a seção concluída
5. Usuário visualiza rodando `npm run dev` localmente e aprova ou pede ajuste antes de seguir para a próxima seção
