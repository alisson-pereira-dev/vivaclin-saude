# VivaClin Saúde — 05. Regras do Projeto

> Decisões e restrições fechadas ao longo do projeto. O Claude Code (ou qualquer pessoa/ferramenta trabalhando neste projeto) deve seguir estas regras sempre, sem reinterpretação.

## 1. Regra de ouro — fonte da verdade

Em caso de conflito entre estes documentos e qualquer suposição própria, skill instalada, ou padrão genérico de mercado, **estes documentos prevalecem**. Nenhuma skill ou ferramenta deve sobrescrever decisões já tomadas de cor, fonte, conteúdo ou arquitetura.

## 2. Arquitetura de informação

- Home em formato **single-page com âncoras**, não múltiplas páginas para o conteúdo institucional.
- As 5 especialidades médicas (Clínica Geral, Reumatologia, Saúde Digestiva, Saúde do Idoso, Nutrição) são a **única exceção**: cada uma mantém página própria (`/areas-de-atuacao/[slug]`), por motivo de SEO local — cada uma visa ranquear para buscas específicas por especialidade + cidade.
- Não existem rotas próprias para "Quem somos" e "A Clínica" no novo site — esse conteúdo foi fundido nas seções `SobreNos` e `Consultorio` da Home, eliminando a duplicação que existia no site antigo.
- Não existe mais página-índice `/areas-de-atuacao/` — no site antigo, essa página tinha links quebrados (4 de 5 cards apontavam para URL errada). No site novo, o botão "Ver Áreas de Atuação" do Hero rola direto até a âncora `#areas-de-atuacao` na Home.

## 3. Blog — fora de escopo nesta fase

**Decisão explícita do usuário:** o Blog (`/artigos`, `/artigos/[slug]`, e o componente `ArtigosPreview` da Home) foi removido do escopo da fase atual de construção. Motivo: o conteúdo de blog ainda não tem artigos completos nem fonte de dados/CMS definida — existem apenas título e trecho de 3 posts de exemplo, extraídos do site antigo durante a pesquisa inicial.

- Não construir nenhum componente ou rota de blog nesta fase.
- O item "Artigos" foi removido do menu do Header.
- A especificação original do blog está preservada no documento 02 (seções "ArtigosPreview — REMOVIDO DO ESCOPO DESTA FASE") para retomar quando houver conteúdo real e fonte de dados definida.

## 4. Depoimentos — bloqueado, não usar conteúdo fictício

**Regra explícita:** depoimentos reais de pacientes ainda não foram coletados. **Nunca publicar ou construir a seção `Depoimentos` com depoimentos fictícios ou de exemplo.** O texto de apoio institucional da seção já existe e pode ser usado, mas os depoimentos individuais em si são um bloqueador real até serem levantados (sugestão prática já registrada: prints de avaliações reais do Google ou Instagram da clínica).

## 5. Correções de conteúdo aplicadas (bugs do site antigo, corrigidos no novo)

- **Silvia Carvalho é nutricionista, não médica.** O site antigo a chamava de "médica" em alguns blocos por engano. No novo site: nome sem "Dra.", badge "Nutricionista", credencial "Formada pela PUC Minas" sem a palavra "Médica".
- **Bio da Silvia Carvalho não deve ser duplicada** (no site antigo aparecia duas vezes, idêntica, na página "Quem somos" — bug a não repetir).
- **Links da antiga página-índice de Áreas de Atuação estavam quebrados** (resolvido pela mudança de arquitetura — ver seção 2 deste documento).
- **Normalização de formato de texto:** "Whatsapp" → "WhatsApp"; "(31)92009-0831" → "(31) 92009-0831" (alinhado ao formato canônico usado no footer e em todo o site).

## 6. Identidade visual — regras inegociáveis

- A cor de marca (terracota/rosé, `#B97D6E` extraído por amostragem de pixel da logo oficial) é a direção de cor confirmada para todo o site — **não é uma referência estética solta, é validada contra a logo real da cliente.**
- Harmonia monocromática quente (terracota/bege) é a regra para 95%+ do material visual do site, incluindo toda a fotografia (regra de color grading cinema 60-30-10, documento 03, seção 6).
- A cor complementar fria (tom não travado em hex ainda) é reservada **exclusivamente** para elementos de interface funcionais (confirmação, destaque de dado, estado selecionado) — **nunca em fotografia de pessoas, nunca no Hero, nunca como cor de marca.**
- Texto escuro nunca em preto puro (`#000000`) — sempre na família terracota-escuro, para manter a calidez da paleta.
- Fundos nunca em branco puro em área grande — usar os tons bege/rosé como "branco" da marca.

## 7. Stack técnica — decisões travadas

- **React/Next.js confirmado**, motivado especificamente pela necessidade de usar a biblioteca Motion para microinterações.
- **Motion (ex-Framer Motion)** é a biblioteca de animação oficial do projeto — usar a sintaxe atual do pacote, não imports legados.
- **Site precisa ser responsivo com cuidado especial em mobile** — regra explícita do usuário, não apenas "boa prática" genérica. Mobile-first é o princípio de desenvolvimento.
- **Git não deve ser inicializado neste momento** — decisão explícita do usuário ("não quero nada de git no momento"). Não inicializar repositório até indicação contrária.
- **Skill `UI/UX Pro Max` não deve ser instalada** neste projeto — risco de sobrescrever o Design System já fechado manualmente (ver documento 03, seção 2.2, para o racional completo).

## 8. Regra de placeholder de imagem

Nenhum componente deve ficar bloqueado por falta de imagem real.

- Onde faltar imagem, usar placeholder com **cor sólida de um dos tokens de fundo do Design System** (nunca cinza genérico de framework) + **texto centralizado** indicando o que falta (ex: "Imagem aqui — Hero", "Imagem aqui — Dra. Juliana").
- Manter exatamente as mesmas dimensões/aspect-ratio e o mesmo wrapper técnico (`fill`, `sizes`, `object-cover`) que a imagem real vai ocupar depois — a troca pela imagem definitiva deve ser puramente a substituição do `src`, sem alterar layout, CSS ou estrutura do componente.
- Quando a imagem real for fornecida, remover o placeholder por completo — não deixar comentado ou em fallback condicional desnecessário.
- **Fluxo de entrega de imagens:** o usuário gera as imagens externamente (ferramenta de geração de IA, usando os prompts do documento 03) e envia os arquivos diretamente ao Claude Code, que decide onde salvar e como conectar ao componente — o usuário não precisa saber a estrutura de pastas do projeto.
- Imagens geradas por IA representam pessoas de forma **ilustrativa/genérica**, não são fotos reais das profissionais da clínica — isso foi alinhado explicitamente: se a cliente quiser transparência total (mostrar as médicas reais), o caminho correto é sessão de fotos profissional, não imagem gerada.

## 9. Autonomia do Claude Code — o que pode decidir sozinho vs. o que deve sinalizar

**Pode decidir e aplicar sem perguntar antes:**
- Correções de formato/consistência de texto (normalização de capitalização, espaçamento de telefone, etc.)
- Ajustes técnicos de implementação que não mudam decisão de design já tomada (ex: resolver problema de visibilidade de uma curva orgânica com stroke, sem alterar cores)
- Estrutura de pastas e organização de arquivos do projeto

**Deve sinalizar explicitamente no resumo de entrega, mesmo decidindo sozinho:**
- Omissão de um CTA ou elemento do conteúdo original quando não há destino/rota definida para ele
- Escolha de variante de layout responsivo quando a especificação permite mais de uma opção (ex: lista vertical vs. carrossel no mobile)
- Qualquer decisão de UX que se desvie, ainda que sutilmente, do que está escrito nos documentos de referência

**Não deve decidir sozinho — sempre perguntar antes:**
- Mudança de paleta de cor, tipografia, ou qualquer token do Design System
- Construção de seções marcadas como bloqueadas (Depoimentos, Blog) com conteúdo de placeholder/fictício permanente
- Inicialização de Git ou qualquer mudança de stack técnica não documentada aqui

## 10. Regra de construção por seção — obrigatória

Estas três regras são inegociáveis e se sobrepõem a qualquer outra instrução ou iniciativa própria do Claude Code:

- **NUNCA construir duas seções ao mesmo tempo.** Uma seção por vez, na ordem definida no documento 04.
- **NUNCA adicionar animação antes do layout estático estar aprovado pelo usuário.** O componente deve estar visualmente correto e responsivo primeiro — animações são a última camada.
- **SEMPRE perguntar antes de avançar.** Ao concluir uma seção, perguntar explicitamente: *"Seção [X] concluída. Posso avançar para [Y]?"* — nunca iniciar a próxima seção sem confirmação.

## 11. Nova abordagem de direcionamento visual (em vigor a partir de agora)

**Diagnóstico do usuário:** deixar a construção exclusivamente nas mãos do Claude Code, guiado apenas pelo documento de texto, não produziu o resultado visual esperado — o resultado ficou estruturalmente correto mas visualmente "pobre", sem a textura rica (sombras, profundidade, glassmorphism) que o Design System documenta.

**Mudança de processo:** a partir de agora, cada seção a ser construída ou refinada deve ser acompanhada de **mockup ou imagem de referência visual concreta**, fornecida junto ao prompt daquela seção, para guiar posicionamento de elementos e estilo visual de forma muito mais explícita do que a descrição em texto permite. Os documentos deste pacote (01 a 05) continuam valendo como fonte da verdade de conteúdo, regras técnicas e arquitetura — a mudança é especificamente na forma de direcionar a execução visual fina.
