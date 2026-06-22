# VivaClin Saúde — 02. Seções do Site (copy completo)

> Estrutura: Home como single-page (com âncoras) + 5 páginas de especialidade independentes. Blog removido do escopo desta fase (decisão registrada na seção de Regras do Projeto). Cada seção abaixo já reflete decisões de UX fechadas ao longo do projeto (ex: bios em acordeão, sem CTA "ver mais" onde não há destino).

---

## HOME (`/`)

### 1. Header (fixo, todas as páginas)

- Logo VivaClin
- Menu: Sobre | Áreas de Atuação | Consultório *(item "Artigos" removido nesta fase — blog fora de escopo)*
- CTA fixo: botão "Agendamento" → WhatsApp

### 2. Hero

**Imagem:** foto real das duas doutoras fundadoras (Dra. Juliana Coimbra de Mendonça + Dra. Danielle Lima da Costa), já gerada e implementada via `next/image` — ambiente de consultório, luz natural, paleta terracota/bege. Prompt de geração documentado no Bloco de Stack/Regras.

**Headline:**
> Cuidar com empatia é o nosso jeito de fazer medicina

**Subheadline:**
> Humanização e dedicação em cada atendimento.

**CTAs:**
- Primário (sólido): "Falar no WhatsApp"
- Secundário (ghost): "Ver Áreas de Atuação" → rola até a âncora `#areas-de-atuacao` (decisão: não existe mais página-índice própria de áreas de atuação)

### 3. EspecialidadesGrid (`#areas-de-atuacao`)

**Título da seção:**
> Áreas de Atuação

**Texto de apoio:**
> Conheça as áreas que a VivaClin atua oferecendo acompanhamento integral em saúde – contínuo e humanizado.

**5 cards, nesta ordem, cada um linkando para sua página própria:**

| Card | Ícone | Excerto (primeira frase verbatim da introdução de cada página de especialidade) |
|---|---|---|
| Clínica Geral | Stethoscope | A Clínica Geral é considerada o ponto de partida para o cuidado com a saúde. |
| Reumatologia | Bone | As doenças reumatológicas englobam um conjunto de condições que afetam articulações, músculos, ossos e tecidos conjuntivos, além das chamadas doenças autoimunes sistêmicas. |
| Saúde Digestiva | Soup | A Saúde Digestiva é uma das áreas mais importantes da medicina. |
| Saúde do Idoso | HeartHandshake | A saúde do idoso é um segmento da medicina que acompanha as mudanças do envelhecimento, cuidando da saúde de pessoas na terceira idade de forma integral, contínua, preventiva e até paliativa. |
| Nutrição | Salad | A nutrição clínica é uma área essencial da saúde que utiliza a alimentação como ferramenta terapêutica e preventiva. |

Cada card tem link "Saiba mais →" para a rota própria da especialidade. Sem botão "ver mais áreas" (não existe destino — decisão já tomada).

### 4. SobreNos

**Texto institucional:**
> A VivaClin Saúde nasceu do desejo de oferecer um atendimento médico próximo, organizado e de qualidade para Contagem e região.
>
> Percebendo a necessidade de criar uma clínica em Contagem que proporcionasse acompanhamento contínuo e integral para os pacientes, reunimos o conhecimento de profissionais qualificados para oferecer um cuidado completo e humanizado.

**Formato de exibição (decisão fechada):** acordeão expansível. Cada card mostra resumo por padrão + botão "Ler mais" que expande para a bio completa.

**Card 1 — Dra. Juliana Coimbra de Mendonça**

Resumo (sempre visível):
- Graduada em medicina pela FAME – Faculdade de Medicina de Barbacena
- Pós-graduanda em Reumatologia e Geriatria
- Badge: Médica

Bio completa (expandida):
> A Dra. Juliana Coimbra de Mendonça é médica clínica geral pela FAME – Faculdade de Medicina de Barbacena, instituição reconhecida pela excelência no ensino e pela tradição em formar profissionais de destaque.
>
> Atualmente, segue ampliando seus conhecimentos com pós-graduação em Reumatologia e Geriatria, áreas que demandam sensibilidade, atualização constante e dedicação ao cuidado integral dos pacientes.
>
> Na VivaClin, a Dra. Juliana alia ciência e humanização no atendimento, com o objetivo de oferecer a clínica geral, acompanhamento próximo e tratamentos que respeitam as necessidades individuais. Seu compromisso é proporcionar qualidade de vida e bem-estar em todas as fases da saúde.

`[IMAGEM PENDENTE — foto da Dra. Juliana, placeholder atual: "Imagem aqui — Dra. Juliana Coimbra de Mendonça"]`

**Card 2 — Dra. Danielle Lima da Costa**

Resumo (sempre visível):
- Graduada em medicina pela FAMINAS – Faculdade de Minas
- Pós-graduanda em Gastroenterologia – Afya Educação Médica
- Badge: Médica

Bio completa (expandida):
> A Dra. Danielle Lima da Costa é formada em Medicina pela FAMINAS – Faculdade de Minas, reconhecida por sua tradição em formar profissionais éticos e de excelência.
>
> Atualmente, aprimora seus conhecimentos com pós-graduação em Gastroenterologia pela Afya Educação Médica, área que exige precisão, atualização e atenção ao bem-estar integral do paciente.
>
> Combinando conhecimento técnico e abordagem acolhedora, a Dra. Danielle oferece acompanhamento com atendimento personalizado. Esse conjunto de fatores, aliado ao conhecimento e visão humanizada, traz para cada paciente a confiança que todo tratamento merece.

`[IMAGEM PENDENTE — foto da Dra. Danielle, placeholder atual: "Imagem aqui — Dra. Danielle Lima da Costa"]`

**Card 3 — Silvia Carvalho**

> Correção de conteúdo aplicada (bug do site antigo): ela é **nutricionista**, não médica. Nome exibido sem "Dra.", badge "Nutricionista", credencial sem a palavra "Médica".

Resumo (sempre visível):
- Formada pela PUC Minas
- Especializada em nutrição clínica e nutrição oncológica pelo Hospital Santa Casa de BH, pela Associação Brasileira de Nutrição Oncológica e pela Universidade Federal de São João Del Rei
- Badge: Nutricionista

Bio completa (expandida):
> Sou nutricionista clínica e também especialista em nutrição oncológica.
>
> Formada pela PUC Minas, me especializei no Hospital Santa Casa de BH, pela Associação Brasileira de Nutrição Oncológica e pela Universidade Federal de São João Del Rei.
>
> Ofereço suporte nutricional especializado que promove a saúde, contribui para o emagrecimento, controle da glicose, pressão arterial e colesterol, previne o câncer e fortalece os pacientes em tratamento oncológico.
>
> Minha missão é proporcionar um atendimento humanizado e acolhedor, desenvolvendo planos alimentares individualizados que respeitem as necessidades e preferências de cada paciente, adequando e equilibrando o que é necessário para promover saúde e qualidade de vida.

`[IMAGEM PENDENTE — foto da Silvia Carvalho, placeholder atual: "Imagem aqui — Silvia Carvalho"]`

**CTA da seção:** "Fale Conosco" (ghost/secundário)

### 5. Depoimentos

**Status: `[IMAGEM/CONTEÚDO PENDENTE]` — bloqueado.** Depoimentos reais ainda não foram coletados. Texto de apoio existe, mas a seção não deve ser publicada com depoimentos fictícios.

**Texto de apoio (já definido, pode ser usado quando os depoimentos reais existirem):**
> Acreditamos que o reflexo do nosso trabalho está na confiança expressa por cada paciente que passou por aqui.
>
> Cada experiência compartilhada é um motivo a mais para seguirmos firmes na nossa missão.
>
> A VivaClin, clínica em Contagem, agradece por permitir que façamos parte da sua história e da sua jornada por mais saúde.

`[CONTEÚDO PENDENTE — depoimentos reais de pacientes não levantados]`

### 6. Consultorio

**Texto institucional:**
> A VivaClin foi planejada para ser um espaço acolhedor, organizado e acessível, onde cada detalhe transmite tranquilidade e segurança.
>
> Queremos que você se sinta à vontade desde o primeiro contato, em um ambiente que entrega profissionalismo, ética e atendimento humanizado.

**Subtítulo "Aqui, nosso compromisso vai além da saúde":**
- Pontualidade e respeito pelo tempo de cada paciente
- Organização e escuta atenta
- Proximidade que torna cada consulta única

**Frase de fechamento:**
> Mais do que um local de atendimento, a VivaClin é um lugar de confiança, acolhimento e vínculo verdadeiro.

**Parágrafo extra de localização (origem: página "A Clínica" do site antigo, fundido aqui):**
> Localizado no bairro Nacional, nossa clínica médica em Contagem combina acessibilidade, conveniência e proximidade com serviços essenciais. Um ponto central que facilita sua chegada e torna cada visita mais prática. A região oferece infraestrutura completa e te espera com um atendimento de excelência.

**Galeria:** 3 fotos do consultório.

`[IMAGEM PENDENTE — 3 fotos da galeria do consultório, placeholders já implementados no componente Consultorio.tsx]`

Sem botão "ver mais" (decisão: as 3 fotos já são a galeria completa documentada, sem destino definido para "ver mais").

### 7. FAQ

Formato: acordeão, itens expandem/colapsam independentemente.

**1. Como posso agendar uma consulta?**
> O agendamento de consulta é prático e rápido. Você pode encontrar em contato via WhatsApp (31) 92009-0831 ou clicando no botão de "agendamento" acima.

**2. Atende convênio ou somente particular?**
> Sim! Atendemos algumas operadoras de convênio. Caso a VivaClin não esteja cadastrada no seu plano, a consulta pode ser realizada como "particular", situação em que fornecemos todos os documentos necessários para que você solicite o reembolso diretamente à operadora.

**3. O atendimento em Contagem é para pacientes de todas as idades?**
> Todas as idades. Desde crianças, jovens, adultos e idosos.

**4. A consulta é presencial ou oferece Telemedicina?**
> A depender do caso, consultas online estão disponíveis para quem busca comodidade e praticidade, ou está impossibilitado de locomoção, sem abrir mão do cuidado especializado.

**5. Que sinais é importante ficar atento para agendar a consulta e cuidar da saúde?**
> Na verdade, o cuidado com a saúde sempre deve ser preventivo. Mas é importante ficar atento às mudanças no corpo ou em hábitos do dia a dia, como dores persistentes, cansaço excessivo, alterações na digestão, no apetite, problemas nas articulações, febre recorrente ou qualquer sintoma que gere desconforto ou preocupação.

> Normalização de texto já aplicada pelo Claude Code: "Whatsapp" → "WhatsApp"; "(31)92009-0831" → "(31) 92009-0831", alinhado ao formato canônico do footer.

### 8. ArtigosPreview — **REMOVIDO DO ESCOPO DESTA FASE**

Decisão registrada: Blog/Artigos fora de escopo (ver Bloco de Regras do Projeto). Posição reservada para quando o blog for retomado: entre FAQ e CTAFinal.

### 9. CTAFinal

**Título:**
> Acolhimento e cuidado que você merece

**CTA:** "Agende sua consulta" → WhatsApp

### 10. Footer

- Logo + slogan: "Mais que cuidados – confiança para viver mais e melhor"
- Contato: (31) 92009-0831 (link WhatsApp)
- Localização: R. Sete de Setembro, 863 - Nacional, Contagem/MG (link Google Maps)
- Redes sociais: Instagram, Facebook, TikTok
- Copyright: VivaClin © 2026. Todos os Direitos Reservados

### 11. WhatsAppFloat

Botão flutuante fixo de WhatsApp, presente em todas as páginas.

---

## PÁGINAS DE ESPECIALIDADE (`/areas-de-atuacao/[slug]`)

> Template único reutilizado para as 5 especialidades. Cada uma usa o mesmo conjunto de blocos abaixo, preenchido com o conteúdo específico listado depois.

### Estrutura do template (comum às 5 páginas)

1. Header (mesmo da Home)
2. Breadcrumb: "Início » Áreas de Atuação » [Nome]"
3. HeroEspecialidade — H1 + parágrafo de introdução
4. OQueTrata — lista de condições/funções tratadas
5. QuandoProcurar — lista de sinais/sintomas
6. Prevencao — bloco de prevenção
7. AtendimentoHumanizado — bloco de diferencial humanizado
8. PorQueVivaClin — bloco "Por que escolher a VivaClin"
9. CTAAgendamento — bloco final de agendamento específico
10. CrossLinkEspecialidades — links para as outras 4 especialidades
11. Footer (mesmo da Home)

`[IMAGEM PENDENTE em todas as 5 — HeroEspecialidade não usa foto de pessoa; ver sugestão de cena por especialidade no Bloco de Stack/Regras]`

---

### Página: Clínica Geral

**H1:** Clínica Geral em Contagem: a porta de entrada para a saúde da sua família

**Introdução:**
> A Clínica Geral é considerada o ponto de partida para o cuidado com a saúde. O clínico geral é o profissional preparado para avaliar de forma ampla o estado de saúde do paciente, realizar diagnósticos iniciais, solicitar exames e orientar o tratamento adequado ou encaminhar para especialistas, quando necessário.
>
> Na VivaClin Saúde, clínica médica situada na cidade de Contagem, em Minas Gerais, o serviço de Clínica Geral é pensado para oferecer um cuidado próximo, acessível e humanizado. Nosso objetivo é acompanhar desde crianças até idosos, promovendo prevenção, diagnóstico precoce e qualidade de vida para toda a família.
>
> Mais do que consultas pontuais, a Clínica Geral representa o elo de confiança entre paciente e equipe médica, garantindo acompanhamento contínuo e integral.

**O que faz a clínica geral?**
> A clínica geral é o segmento base da medicina, responsável por uma avaliação global da saúde, capaz de identificar problemas em diferentes sistemas do corpo humano. Entre as funções desse especialista estão:
- Realizar consultas preventivas e de rotina (check-up anual)
- Investigar sintomas inespecíficos como fadiga, febre, dores no corpo e alterações de apetite, infecções e inflamações
- Acompanhar doenças crônicas, como hipertensão, diabetes, colesterol alto e obesidade
- Avaliar alterações nos exames laboratoriais e de imagem
- Prescrever tratamentos iniciais e monitorar a evolução clínica
- Encaminhar para outras especialidades, quando necessário, de forma organizada e com acompanhamento integrado
>
> Essa visão generalizada torna a Clínica Geral sua aliada em Contagem, fundamental para organizar o cuidado em saúde e garantir que o paciente não se perca em consultas isoladas, sem acompanhamento contínuo.

**Quando procurar a Clínica Geral em Contagem?**
> Muitas pessoas acreditam que só devem buscar o atendimento quando estão doentes. No entanto, a Clínica Geral é a especialidade ideal para consultas periódicas, mesmo sem sintomas aparentes. É recomendado procurar quando:
- Você deseja realizar um check-up preventivo
- Sente sintomas inespecíficos como cansaço, tontura, febre recorrente, dores no corpo ou mudanças no apetite
- Precisa de acompanhamento de doenças crônicas como diabetes, hipertensão ou colesterol
- Busca orientações sobre hábitos saudáveis, nutrição e prática de exercícios
- Precisa de um médico de confiança para centralizar seu histórico de saúde
>
> O atendimento precoce ajuda a diagnosticar doenças em fases iniciais, momento em que todo tratamento tem maior eficácia e é menos invasivo.

**Clínica Geral e a importância da prevenção**
> A medicina moderna é cada vez mais voltada para a prevenção. E o clínico geral tem papel essencial nesse processo. Na VivaClin Saúde, em Contagem e região da Grande BH, incentivamos nossos pacientes a manter consultas periódicas, mesmo em ausência de queixas. Com esse acompanhamento, é possível:
- Detectar alterações silenciosas em exames laboratoriais
- Reduzir riscos cardiovasculares
- Prevenir complicações de doenças crônicas
- Estimular a adoção de hábitos saudáveis
- Monitorar vacinas e calendário de imunização
>
> Prevenir é sempre mais seguro e econômico do que tratar complicações que chegam por falta de cuidados prévios.

**Por que escolher a VivaClin Saúde em Contagem?**
> Na VivaClin, sua Clínica Geral em Contagem é marcada pelo compromisso com o paciente. Nossas consultas são realizadas com escuta atenta, respeito ao tempo de cada pessoa e clareza nas explicações. Nossos diferenciais incluem:
- Atendimento humanizado e individualizado
- Consultas organizadas e sem pressa
- Ambiente acolhedor e acessível
- Comunicação clara e próxima com o paciente
- Integração com outras especialidades médicas quando necessário
- Atendimento para pacientes de todas as idades
- Presencial e telemedicina, quando possível

**Agende sua consulta**
> Liderada pela Dra. Juliana Mendonça e pela Dra. Danielle Costa, a clínica reúne diferentes áreas da saúde em um mesmo espaço, como Clínica Geral, doenças reumatológicas, saúde digestiva e do idoso, oferecendo um atendimento completo. Nosso ambiente foi planejado para transmitir tranquilidade e confiança, permitindo que cada consulta seja uma experiência acolhedora. O agendamento é simples e rápido. Envie uma mensagem via WhatsApp (31) 92009-0831 ou clique no botão de agendamento disponível em nosso site. Atendemos tanto consultas particulares quanto convênios. E para facilitar ainda mais, também oferecemos a opção de consulta à distância quando o caso permite.

---

### Página: Saúde Digestiva

**H1:** Saúde Digestiva em Contagem: cuidado para o sistema digestivo

**Introdução:**
> A Saúde Digestiva é uma das áreas mais importantes da medicina. Compreende o diagnóstico e tratamento das doenças que afetam o aparelho digestivo, incluindo esôfago, estômago, intestino, fígado, vesícula biliar e pâncreas.
>
> Na VivaClin Saúde, em Contagem, Minas Gerais, oferecemos atendimento em Saúde Digestiva para a Grande BH com foco no cuidado integral do paciente. Nosso objetivo não é tratar apenas sintomas, mas compreender as causas dos problemas digestivos e propor soluções personalizadas que promovam saúde, bem-estar e qualidade de vida em qualquer fase da vida.

**O que trata a saúde digestiva?**
> Dra. Danielle Costa atua em sua clínica em Contagem com cuidados à saúde digestiva, no diagnóstico, prevenção e tratamento de diversas condições relacionadas ao sistema digestório. Entre as principais estão:
- Refluxo gastroesofágico (azia e queimação)
- Doenças do fígado como hepatite, esteatose (gordura no fígado) e cirrose
- Síndrome do intestino irritável e doenças inflamatórias intestinais
- Úlceras e gastrite
- Doença celíaca (intolerância ao glúten)
- Intolerância à lactose e outras dificuldades de digestão
- Pedras na vesícula biliar e problemas pancreáticos
- Constipação intestinal e diarreias persistentes
- Rastreamento e prevenção do câncer de estômago, cólon e reto
>
> Além do tratamento clínico, a Dra. Danielle solicita exames específicos – como endoscopia, colonoscopia e ultrassonografias – que permitem investigar com precisão alterações do trato digestivo.

**Quando procurar a clínica de saúde digestiva em Contagem?**
> Muitos pacientes convivem por anos com sintomas digestivos acreditando que são "normais" ou "passageiros". Porém, sinais recorrentes não devem ser ignorados. Agende sua consulta se você apresenta:
- Azia e queimação frequentes
- Dor ou desconforto abdominal persistente
- Alterações no hábito intestinal (prisão de ventre ou diarreia)
- Presença de sangue nas fezes
- Náuseas, vômitos ou perda de apetite
- Perda de peso inexplicável
- Cansaço constante relacionado a problemas no fígado ou intestino

**A importância da prevenção em Saúde Digestiva**
> Na VivaClin Saúde, acreditamos que prevenção é sinônimo de qualidade de vida. A consulta em Saúde Digestiva não deve ser buscada apenas diante de sintomas graves, mas também como estratégia de rastreamento. A Dra. Danielle Costa atua na prevenção de cânceres do aparelho digestivo, como o de cólon e reto, que têm grandes chances de cura quando diagnosticados precocemente. Além disso, orienta sobre:
- Hábitos alimentares adequados
- Controle do consumo de álcool
- Manejo de intolerâncias alimentares
- Importância da atividade física para regular o funcionamento intestinal
- Prevenção de doenças do fígado e da vesícula

**O que esperar da consulta de Saúde Digestiva?**
> Durante a consulta, o paciente passa por uma avaliação detalhada que inclui histórico clínico, hábitos alimentares e exame físico. Dependendo do caso, podem ser solicitados exames complementares, como:
- Endoscopia digestiva alta
- Colonoscopia
- Exames laboratoriais para avaliação hepática e digestiva
- Ultrassonografias abdominais
>
> A partir dos resultados, é elaborado um plano terapêutico personalizado, que pode incluir mudanças no estilo de vida, ajustes alimentares, prescrição de medicamentos ou encaminhamento para procedimentos específicos. Nosso compromisso é oferecer tratamento eficaz e seguro, reduzindo sintomas e prevenindo complicações.

**Saúde Digestiva humanizada na VivaClin Saúde**
> Problemas gastrointestinais não afetam apenas o corpo – eles comprometem a rotina, a alimentação, a produtividade e até mesmo o bem-estar emocional. Um dos diferenciais da VivaClin é o atendimento humanizado. Sabemos que problemas digestórios podem causar muito impacto no dia a dia, afetando desde a alimentação até o convívio social. Por isso, oferecemos consultas detalhadas, com tempo adequado para escuta, exame clínico e orientações. Nossa clínica médica em Contagem foi planejada para proporcionar tranquilidade e confiança, em um ambiente organizado e acessível. Além disso, quando necessário, o paciente conta com o apoio integrado de outros cuidados médicos presentes na clínica, favorecendo um cuidado global e contínuo.
>
> A Dra. Danielle Lima da Costa, médica atuante em saúde digestiva, oferece atendimento atualizado e direcionado às necessidades individuais de cada paciente. Seu atendimento une conhecimento técnico, experiência e acolhimento, trazendo segurança em todas as etapas do cuidado.
>
> Agendar sua consulta de Saúde Digestiva na VivaClin Saúde é simples: entre em contato pelo WhatsApp (31) 92009-0831 ou utilize o botão de agendamento disponível em nosso site. Atendemos consultas presenciais e, em casos selecionados, também disponibilizamos a opção de telemedicina, para maior comodidade.

---

### Página: Saúde do Idoso

**H1:** Saúde do Idoso em Contagem: envelhecer é melhor com saúde e autonomia

**Introdução:**
> A saúde do idoso é um segmento da medicina que acompanha as mudanças do envelhecimento, cuidando da saúde de pessoas na terceira idade de forma integral, contínua, preventiva e até paliativa.
>
> Diferente de outras áreas da Medicina, a médica que se dedica aos cuidados do idoso não foca apenas em tratar doenças, mas em promover qualidade de vida, prevenir complicações e preservar a autonomia pelo maior tempo possível.
>
> Na VivaClin Saúde, clínica médica em Contagem, Minas Gerais, acreditamos que o processo de envelhecer pode e deve ser vivido com bem-estar.
>
> Nosso atendimento focado na saúde do idoso é humanizado e acolhedor, sempre voltado às necessidades específicas de cada paciente e também ao suporte da família.

**Como cuidar da saúde do idoso?**
> Esta é uma atuação que oferece cuidado integral ao idoso. Suas principais funções incluem:
- Avaliação global de saúde: física, mental, emocional e social
- Diagnóstico e tratamento de doenças crônicas comuns na terceira idade, como hipertensão, diabetes, osteoporose, artrite e doenças cardiovasculares
- Manejo seguro da polimedicação, reduzindo riscos de interações entre remédios
- Investigação e acompanhamento de perda de memória e transtornos cognitivos, incluindo Alzheimer e outras demências
- Avaliação da capacidade funcional, prevenindo quedas e preservando a independência
- Apoio a familiares e cuidadores com orientações práticas sobre os cuidados diários
- Indicação de exames preventivos e acompanhamento de rotina
- Orientação sobre cuidados e hábitos na terceira idade

**Quando procurar cuidados com a Saúde do Idoso em Contagem?**
> É comum que famílias só busquem este cuidado quando o idoso já apresenta limitações significativas. No entanto, o acompanhamento precoce faz toda a diferença. Preste atenção aos sinais e agende sua consulta:
- Presença de múltiplas doenças crônicas
- Uso de diversos medicamentos de forma contínua
- Queixas de memória, atenção ou mudanças no comportamento
- Dificuldades de locomoção ou quedas frequentes
- Perda de peso sem explicação ou cansaço excessivo
- Necessidade de orientação para familiares sobre os cuidados com o idoso

**O papel da prevenção na Saúde do Idoso**
> Alcançar a longevidade não é somente sobre viver mais, é sobre manter a qualidade de vida e a autonomia em uma fase que o corpo sente o passar dos anos. Na VivaClin Saúde, entendemos que envelhecer com qualidade depende de prevenção. Como ações preventivas, temos:
- Monitoramento da pressão arterial, colesterol e glicemia
- Avaliação da saúde óssea para prevenção e tratamento da osteoporose
- Exames periódicos para rastreamento de câncer e outras condições prevalentes
- Avaliação da mobilidade e orientações para evitar quedas dentro de casa
- Estímulo à atividade física adaptada para manter força, equilíbrio e energia
- Orientação nutricional personalizada, com foco em massa muscular, memória e imunidade
- Avaliação cognitiva periódica para detecção precoce de transtornos de memória
- Análise de necessidades ao cuidado emocional
>
> A prevenção garante que o idoso viva mais tempo, mas sobretudo, que viva melhor.

**Atendimento humanizado em Saúde do Idoso**
> Um dos diferenciais da VivaClin Saúde é o cuidado próximo e acolhedor. Sabemos que cada idoso tem sua história, suas fragilidades e suas potencialidades. Por isso, nossas consultas são conduzidas com escuta ativa, paciência e respeito, valorizando tanto a experiência do paciente quanto a participação da família. O ambiente da clínica foi planejado para transmitir acessibilidade e conforto para idosos e todos os pacientes. Além disso, nosso trabalho em equipe multiprofissional permite que o paciente seja acompanhado de forma integrada por outras especialidades médicas quando necessário, fortalecendo a visão global da saúde.

**Especialista em Saúde do Idoso em Contagem e região da Grande BH**
> Estar em Contagem, Minas Gerais, possibilita à VivaClin atender também pacientes da Grande BH, oferecendo acompanhamento integral à saúde do idoso para toda a região. Nosso objetivo é garantir que o público 60+ receba não apenas tratamento, mas também orientações práticas para o dia a dia, apoio emocional e estratégias de prevenção que tragam mais vitalidade e independência.

**A Saúde do Idoso com a marca VivaClin Saúde**
> A VivaClin Saúde nasceu do desejo das médicas Dra. Juliana Mendonça e Dra. Danielle Costa de criar um espaço em que a saúde de toda a família fosse acompanhada de maneira integrada. No cuidado com o público 60+, a atuação da Dra. Juliana Mendonça é muito mais que uma consulta de rotina: é acolhimento e cuidado humanizado contínuo e personalizado.
>
> Agendar sua consulta na VivaClin Saúde é simples e rápido: pelo WhatsApp (31) 92009-0831, com atendimento ágil e direto, ou pelo site da clínica, através do botão de agendamento online. Além das consultas presenciais, também oferecemos a opção de telemedicina, quando indicada, para pacientes que têm dificuldade de locomoção.

---

### Página: Reumatologia

**H1:** Reumatologia em Contagem: cuidado especializado para articulações, músculos e ossos

**Introdução:**
> As doenças reumatológicas englobam um conjunto de condições que afetam articulações, músculos, ossos e tecidos conjuntivos, além das chamadas doenças autoimunes sistêmicas. O diagnóstico, o tratamento e o acompanhamento dessas doenças são essenciais para preservar a mobilidade, reduzir a dor e melhorar a qualidade de vida dos pacientes.
>
> Problemas como dores articulares persistentes, rigidez matinal, fadiga inexplicável, inchaço em articulações ou alterações inflamatórias precisam ser investigados.
>
> Muitas vezes, esses sintomas são confundidos com sinais comuns do envelhecimento ou de atividades do dia a dia, mas podem indicar doenças reumatológicas que, se tratadas precocemente, preservam qualidade de vida e evitam complicações.
>
> Na VivaClin Saúde, clínica médica localizada em Contagem, você encontra atendimento reumatológico humanizado, acessível e próximo, garantindo cuidado integral para pacientes de todas as idades.

**Como tratar as Doenças Reumatológicas?**
> Entre as doenças reumatológicas mais comuns acompanhadas estão:
- **Artrite reumatoide** — doença autoimune que causa inflamação crônica nas articulações, gerando dor, deformidades e perda de mobilidade
- **Artrose (osteoartrite)** — desgaste da cartilagem que reveste as articulações, muito frequente em joelhos, quadris e mãos
- **Lúpus eritematoso sistêmico** — condição autoimune que pode afetar articulações, pele, rins e outros órgãos
- **Fibromialgia** — síndrome caracterizada por dores musculares generalizadas, distúrbios do sono e fadiga
- **Espondiloartrite anquilosante** — inflamação crônica que afeta principalmente a coluna vertebral
>
> A missão da médica que trata as doenças reumatológicas é oferecer desde medicamentos até orientações sobre estilo de vida, fisioterapia e acompanhamento multidisciplinar.

**Quando procurar uma médica para tratar doenças reumatológicas em Contagem?**
> É fundamental buscar avaliação médica ao notar sinais como:
- Dor persistente em articulações, músculos ou ossos
- Rigidez matinal que dura mais de 30 minutos
- Inchaço ou vermelhidão nas articulações
- Cansaço extremo sem causa aparente
- Histórico familiar de doenças autoimunes ou reumatológicas
>
> O diagnóstico precoce pode fazer toda a diferença, permitindo iniciar o tratamento de forma eficaz e preservar a qualidade de vida do paciente.

**Reumatologia preventiva: cuidando antes dos sintomas**
> Pessoas com fatores de risco – como histórico familiar de artrite, lúpus ou outras doenças autoimunes – podem se beneficiar de consultas periódicas. A prevenção também inclui orientações sobre alimentação equilibrada, prática de atividade física, controle do peso e acompanhamento de exames específicos para monitorar inflamações e a saúde óssea.

**Atendimento humanizado em Reumatologia**
> Nosso compromisso vai além do diagnóstico: oferecemos acolhimento e acompanhamento contínuo. Cada paciente é visto de forma individualizada, levando em consideração sua história, rotina e necessidades específicas. Priorizamos:
- Escuta ativa e consulta detalhada
- Explicações claras sobre o diagnóstico e o tratamento
- Propostas terapêuticas personalizadas e modernas
- Acompanhamento integrado com outras especialidades, quando necessário

**Por que escolher a VivaClin Saúde em Contagem?**
> Sob a liderança da Dra. Juliana Mendonça e da Dra. Danielle Costa, a clínica médica se tornou referência em cuidado contínuo em saúde para toda a família. O espaço foi planejado para transmitir tranquilidade e segurança, garantindo que cada paciente se sinta acolhido desde a recepção até o acompanhamento pós-consulta.

**Como agendar sua consulta**
> Você pode entrar em contato diretamente pelo WhatsApp (31) 92009-0831 ou clicar no botão de agendamento disponível em nosso site. Além de consultas presenciais, oferecemos também telemedicina, quando o caso permite.

---

### Página: Nutrição

**H1:** Nutrição em Contagem: saúde, equilíbrio e prevenção através da alimentação

**Introdução:**
> A nutrição clínica é uma área essencial da saúde que utiliza a alimentação como ferramenta terapêutica e preventiva. Uma orientação nutricional qualificada contribui para o emagrecimento saudável, controle de doenças crônicas (como diabetes, hipertensão e colesterol alto), fortalecimento do sistema imunológico, prevenção do câncer e suporte durante tratamentos oncológicos.
>
> Muitas pessoas convivem com sinais como fadiga, alterações intestinais, ganho de peso, perda de massa muscular, retenção de líquidos, náuseas ou mudanças no apetite sem saber que podem estar relacionados a deficiências nutricionais ou desequilíbrios metabólicos.
>
> Na VivaClin Saúde, clínica localizada em Contagem, oferecemos acompanhamento nutricional humanizado, acessível e personalizado, considerando a individualidade de cada paciente e sua rotina.

**Como a Nutrição Clínica atua?**
> Entre as áreas mais comuns atendidas na Nutrição Clínica estão:
- Emagrecimento saudável
- Controle da glicose para prevenção e manejo do diabetes
- Redução da pressão arterial
- Controle de colesterol e triglicerídeos
- Suporte imunológico
- Nutrição oncológica
- Acompanhamento de sintomas digestivos, manejo alimentar para refluxo, gastrite, intestino preso, diarreia, intolerâncias e doenças intestinais

**Quando procurar uma nutricionista em Contagem?**
> É recomendada em diversos cenários, como:
- Ganho ou perda de peso sem explicação
- Cansaço frequente
- Dificuldade em controlar colesterol, glicose ou pressão
- Problemas gastrointestinais recorrentes
- Alterações no apetite
- Queda de imunidade ou doenças frequentes
- Acompanhamento durante quimioterapia ou radioterapia
- Necessidade de readequação alimentar para doenças crônicas
- Busca por envelhecimento saudável
- Prevenção de câncer e doenças metabólicas
>
> O acompanhamento precoce melhora resultados e reduz complicações futuras.

**Nutrição: cuidando antes dos sintomas**
> A nutrição clínica não deve ser buscada apenas quando surgem sintomas, mas também para melhorar hábitos alimentares:
- Prevenir doenças metabólicas, cardiovasculares e oncológicas
- Fortalecer o sistema imunológico
- Manter o peso saudável ao longo dos anos
- Promover saúde intestinal
- Apoiar o envelhecimento saudável
>
> A missão da nutricionista é promover saúde, prevenir agravos e melhorar a qualidade de vida através de planos alimentares individualizados, educação nutricional e acompanhamento contínuo.

**Atendimento humanizado em Nutrição**
> Mais do que montar dietas, nosso compromisso é oferecer acolhimento, educação alimentar e suporte contínuo. Priorizamos:
- Escuta ativa e visão integral do paciente
- Planos alimentares personalizados, considerando preferências, rotina e restrições
- Acompanhamento regular para ajustes e evolução
- Integração com outras especialidades, como clínica médica, cardiologia, reumatologia e gastroenterologia
- Orientação prática, com metas reais e sustentáveis

**Por que escolher a VivaClin Saúde em Contagem?**
> Espaço moderno, acessível e humanizado, reunindo diferentes especialidades em um único local. Planejado para transmitir tranquilidade e segurança, com atendimento próximo, acolhedor e baseado em evidências científicas.

---

## Elementos globais (presentes em todas as páginas)

**Contato:** WhatsApp (31) 92009-0831 — link direto: `https://wa.me/5531920090831?text=Olá, acessei o site e gostaria de mais informações!`

**Endereço:** R. Sete de Setembro, 863 - Nacional, Contagem/MG

**Redes sociais:** Instagram @vivaclin.saude | Facebook Vivaclin Saúde | TikTok @vivaclin.saude

**Slogan institucional (footer):** "Mais que cuidados – confiança para viver mais e melhor"

**CTAs recorrentes:** "Fale Conosco" (secundário) | "Agendamento" (botão fixo do header) | "Agende sua consulta" (CTA final de página)
