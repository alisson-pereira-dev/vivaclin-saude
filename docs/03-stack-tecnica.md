# VivaClin Saúde — 03. Stack Técnica

## 1. Tecnologias confirmadas

| Camada | Tecnologia | Status |
|---|---|---|
| Framework | Next.js (App Router) | Confirmado — decisão explícita do usuário, motivada pela necessidade de usar Motion |
| Linguagem | TypeScript | Confirmado — já em uso pelo Claude Code na implementação real (`Hero.tsx`, `SobreNos.tsx`, `FAQ.tsx`, `Consultorio.tsx`) |
| Build tool | Turbopack | Confirmado — citado no resumo do Claude Code ao iniciar o projeto |
| Estilização | Tailwind v4 | Confirmado — tokens de design (seção 1.2 do Design System) já mapeados como classes Tailwind (`bg-brand-dark`, `text-brand-primary`, `bg-bg-section`) |
| Animação | Motion (anteriormente "Framer Motion", agora desenvolvida de forma independente em motion.dev) | Confirmado — decisão explícita do usuário. Usar a sintaxe atual do pacote (`motion/react`), não imports legados de `framer-motion`, salvo se o ambiente já tiver essa dependência fixada |
| Imagens | `next/image` | Confirmado — já em uso real no `Hero.tsx` (`fill` + `sizes` responsivo + `object-cover` + `priority` por ser a imagem LCP) |
| Controle de versão | Git | **Explicitamente não iniciado por decisão do usuário** — "não quero nada de git no momento". Não inicializar repositório até indicação contrária |

## 2. Skills do Claude Code — recomendadas e proibidas

> Regra de ouro: se uma skill ou ferramenta sugerir qualquer cor, fonte, ou padrão de componente que não esteja no Design System (documento 01), a sugestão deve ser descartada em favor do que já está documentado. O Design System é a fonte da verdade — nenhuma skill deve sobrescrever, reinterpretar ou "sugerir alternativas" de paleta, tipografia ou estilo de componente.

### 2.1 Instalar

**`frontend-design` (Anthropic oficial)**
```
claude plugin add anthropic/frontend-design
```
Não impõe paleta/tipografia própria — funciona como guia de execução criativa, forçando reflexão sobre propósito/tom/diferenciação antes de codar e evitando clichês genéricos de UI gerada por IA (gradiente roxo, fontes repetidas, cards brancos previsíveis).

**`web-design-guidelines` (Vercel)**
```
git clone https://github.com/vercel-labs/agent-skills.git
cp -r agent-skills/skills/web-design-guidelines ~/.claude/skills/
```
*(Nota: como Git está desativado para este projeto por ora — ver seção 1 — essa instalação pode ser adiada ou feita fora do repositório do projeto, conforme necessário.)*

Auditoria pura de qualidade técnica: ARIA, contraste, foco de teclado, tamanho de toque, hierarquia de heading, suporte a `prefers-reduced-motion`. Não tem opinião sobre estética. Rodar **depois** que o código de cada página estiver pronto, como checagem final.

### 2.2 Não instalar neste projeto

**`UI/UX Pro Max`** (`nextlevelbuilder/ui-ux-pro-max-skill`) — apesar de ser a skill de design mais popular da comunidade no momento da pesquisa (90k+ estrelas no GitHub), seu núcleo é um gerador automático de design system que sugere paleta/tipografia/estilo por conta própria a partir da categoria do produto. Como já temos um design system fechado manualmente (paleta terracota validada contra a logo oficial), instalar essa skill cria risco real de sobrescrever ou contradizer decisões já tomadas, já que ela ativa automaticamente por palavras-chave de UI/UX.

## 3. Regras de uso — ordem de execução

> **Regra explícita do usuário**: ferramentas/skills de design devem ser usadas para *executar* o que já foi decidido, não para *decidir* de novo. Esta seção define a ordem segura de aplicação de cada camada técnica.

1. **Estrutura e conteúdo primeiro.** Construir o componente com o copy real (documento 02), layout funcional, e responsividade básica antes de aplicar qualquer polimento visual fino (sombras, blur, glassmorphism, curvas decorativas).
2. **Placeholder de imagem nunca bloqueia.** Nenhum componente deve ficar parado esperando uma imagem real. Onde faltar imagem, usar placeholder com cor sólida de um dos tokens de fundo do Design System (nunca cinza genérico de framework) + texto centralizado indicando o que falta (ex: "Imagem aqui — Hero"). Manter exatamente as mesmas dimensões/aspect-ratio e o mesmo wrapper (`fill`, `sizes`, `object-cover`) que a imagem real vai ocupar depois — a troca deve ser puramente a substituição do `src`, sem alterar layout ou CSS.
3. **Animações só depois do layout aprovado.** *(Princípio geral derivado da forma como o projeto foi conduzido até aqui — Hero, EspecialidadesGrid, SobreNos e FAQ foram todos estruturados com conteúdo e responsividade primeiro, com a microinteração Motion specificada e aplicada já na mesma entrega, mas sempre como camada final sobre uma estrutura já funcional. `[Esse princípio nunca foi formalizado como regra obrigatória explícita pelo usuário — registrado aqui como padrão observado, não como restrição confirmada]`)*
4. **Toda animação deve respeitar `prefers-reduced-motion`**, via hook `useReducedMotion` do Motion. Mandatório, não opcional — alinhado à auditoria da skill `web-design-guidelines`.
5. **Correções de conteúdo identificadas durante a construção** (ex: normalização de "Whatsapp" → "WhatsApp", correção do título profissional da nutricionista Silvia Carvalho) podem ser aplicadas pelo Claude Code sem necessidade de aprovação prévia, desde que sejam correções de formato/consistência e não alterações de conteúdo substantivo.
6. **Decisões de UX que afetam estrutura** (ex: omitir um CTA "ver mais" sem destino definido, decidir formato de exibição mobile de um grid) podem ser tomadas pelo Claude Code de forma autônoma quando alinhadas aos princípios já documentados, mas devem ser **sinalizadas explicitamente no resumo de entrega** para validação posterior — não silenciosamente.

## 4. Responsividade — regra mobile-first

> Regra explícita do usuário: "o site precisa ser responsivo, ter todo cuidado para que funcione em mobile."

- Desenvolver mobile-first: estilo base pensado para a tela pequena, breakpoints adicionam complexidade para telas maiores.
- Breakpoints de referência: 375px (mobile pequeno), 768px (tablet), 1024px (desktop pequeno), 1440px (desktop grande). Testar nessas quatro larguras no mínimo. *(Validado na prática pelo Claude Code em pelo menos 3 desses breakpoints em cada componente entregue até aqui.)*
- Header: menu colapsa em hambúrguer abaixo de 768px. CTA "Agendamento" permanece visível mesmo no menu colapsado.
- Hero: composição lado a lado (imagem + texto) empilha verticalmente em mobile/tablet — imagem acima, texto e CTA abaixo. Vira lado a lado a partir de `lg` (1024px). *(Confirmado implementado e validado pelo Claude Code.)*
- EspecialidadesGrid: 1 coluna (lista vertical) no mobile, 2 colunas no tablet, 5 colunas em uma linha no desktop. *(Decisão tomada pelo Claude Code: lista vertical em vez de carrossel horizontal no mobile — avaliada e aprovada.)*
- WhatsAppFloat: respeitar área seguro do mobile (não cobrir barra de navegação do sistema operacional).
- Formulários: campos com altura mínima de toque de 44px; teclado numérico/telefone deve abrir automaticamente em campos de telefone.
- Tabelas e listas longas nunca devem forçar scroll horizontal em mobile.

## 5. Microinterações com Motion — aplicação por componente

Animações devem ser sutis e funcionais, reforçando a sensação de acolhimento e elegância do Design System — nunca chamativas ou que pareçam "efeito de template genérico". Princípio de moderação: nem todo componente precisa de animação própria.

| Componente | Microinteração | Tipo de animação Motion | Status |
|---|---|---|---|
| Hero | Fade-in + leve translação ascendente no texto/CTA ao carregar | `initial`/`animate` com `opacity` e `y` | Implementado |
| EspecialidadesGrid | Appear effect em cascata (stagger) conforme cards entram no viewport | `whileInView` com `staggerChildren` | Implementado |
| Cards com glassmorphism | Leve elevação/scale no hover ("respirar"), nunca brusco | `whileHover` com `scale: 1.02` | `[INDEFINIDO — ainda não implementado em nenhum componente entregue]` |
| Botões primário/secundário | Feedback de toque/clique | `whileTap` com `scale: 0.97` | `[INDEFINIDO — não confirmado se já implementado]` |
| Acordeão (bios SobreNos, FAQ) | Expansão/colapso suave de altura | `AnimatePresence` + `layout` | Implementado em ambos os componentes |
| Badges/pills | Sem animação de entrada própria — herdam o stagger do container pai | — | Por princípio, não se aplica |
| Transição de página entre rotas | Fade suave entre páginas, sem slide ou efeitos dramáticos | `AnimatePresence` com `mode="wait"` | `[INDEFINIDO — ainda não há múltiplas páginas navegáveis testadas]` |
| CTAFinal | Nenhuma animação de entrada chamativa — prioridade é legibilidade e conversão | — | Ainda não construído |

## 6. Padrão fotográfico — prompt de geração de imagem

> Direção de cor confirmada: harmonia monocromática quente (terracota/bege) como regra geral, seguindo lógica de color grading de cinema 60-30-10. Cor complementar fria reservada para casos pontuais de contraste em UI, nunca em fotografia.

### 6.1 Prompt principal — Hero (já utilizado, imagem já gerada e implementada)

```
Professional editorial photograph of two Brazilian female doctors standing
together in a warm, modern medical clinic reception area, both smiling
naturally at each other or softly toward camera, conveying genuine warmth
and partnership — not a posed corporate stock photo. One doctor in her
mid-30s, one in her late 20s/early 30s, both wearing simple white or cream
medical coats over soft neutral-toned clothing, no aggressive branding,
no visible logos. Soft natural window light from the left, gentle shadows,
shallow depth of field with the background softly out of focus. The clinic
interior is minimal and elegant — warm cream walls, light wood accents,
a small green plant softly blurred in the background.

Color grading: warm monochromatic cinema LUT, dominant cream and beige
tones (60%), secondary warm terracotta and soft rose-brown midtones (30%),
small accent of deep burnt terracotta (10%) appearing only in a tiny detail
such as a stethoscope, a clipboard edge, or fabric trim — never as a large
block of color. Skin tones natural and warm, not orange or oversaturated.
No cold blue or green color casts anywhere in the image.

Photographic style: ultra-realistic, shot on a full-frame camera, 50mm
lens, soft diffused lighting, film-like subtle grain, natural skin texture
preserved (no over-smoothing), color grading reminiscent of a warm
editorial healthcare campaign — calm, human, trustworthy, never clinical
or cold, never sterile blue-white hospital lighting.

Composition: horizontal wide aspect ratio (16:9), doctors positioned
slightly off-center to the right or left third of the frame, leaving
negative space on one side for text overlay (headline and CTA button).
Eye-level camera angle, no dramatic or low angles.

Avoid: stock-photo stiffness, exaggerated smiles, surgical masks, blue
scrubs, cold hospital lighting, clutter, visible text or logos, fisheye
distortion, plastic-looking skin, oversaturated colors, green or blue
color cast.
```

**Prompt negativo (caso a ferramenta aceite negative prompt separado):**
```
cold lighting, blue tones, green tint, oversaturated, stock photo stiffness,
fake smile, surgical mask, blue scrubs, sterile hospital look, cluttered
background, visible logos, text overlay baked into image, fisheye lens,
plastic skin, harsh shadows, low-angle shot, symmetrical centered composition
```

### 6.2 Template reaproveitável para as demais imagens do site

```
[DESCRIÇÃO DA CENA — sujeito e ação específicos]

Color grading: warm monochromatic cinema LUT, dominant cream and beige
tones (60%), secondary warm terracotta and soft rose-brown midtones (30%),
small accent of deep burnt terracotta (10%) appearing only in a small detail
— never as a large block of color. Natural warm skin tones. No cold blue
or green color casts.

Photographic style: ultra-realistic, full-frame camera look, soft diffused
lighting, subtle film grain, natural skin texture, calm and human editorial
healthcare tone — never sterile or cold.

[COMPOSIÇÃO — ângulo, enquadramento, espaço negativo se houver texto]
```

### 6.3 Cenas sugeridas por imagem pendente

| Local | Cena sugerida |
|---|---|
| HeroEspecialidade — Clínica Geral | Mãos de uma médica anotando em prontuário sobre mesa de madeira clara, paciente fora de foco no fundo |
| HeroEspecialidade — Reumatologia | Close suave em mãos entrelaçadas de paciente e médica sobre a mesa, tom de empatia |
| HeroEspecialidade — Saúde Digestiva | Ambiente de consultório com luz suave, sem necessidade de close clínico explícito |
| HeroEspecialidade — Saúde do Idoso | Médica conversando com paciente idoso, ambos sorrindo, luz lateral suave |
| HeroEspecialidade — Nutrição | Mesa com elementos naturais (fruta, prancheta, copo d'água) em tons bege/terracota, sem pessoa necessariamente |
| Consultorio — galeria (3 fotos) | Ambiente vazio da sala de espera/recepção, mesma paleta, transmitindo organização e calma |
| SobreNos — fotos individuais das 3 profissionais | `[INDEFINIDO — não foi definida cena específica; provavelmente retrato individual em estilo consistente com o Hero]` |

## 7. Nova abordagem de direcionamento (decisão recente do usuário)

> "O site deixando exclusivamente com o Claude Code não funcionou como eu esperava. Vou ter que direcionar utilizando de exemplos como mockups e imagens de telas."

A partir desta decisão, o fluxo de trabalho muda: ao invés de o Claude Code interpretar livremente o Design System em texto, cada seção será construída com o apoio de **mockup ou imagem de referência visual concreta**, fornecida junto ao prompt daquela seção específica, para direcionamento de posicionamento de elementos e estilo visual. Os documentos 01-05 deste pacote continuam como a fonte da verdade de conteúdo e regras, mas a direção visual fina de cada seção passa a ser apoiada por referência de imagem, não apenas descrição textual.
