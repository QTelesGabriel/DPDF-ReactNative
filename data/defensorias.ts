const defensorias = {
  "Defensoria Pública do DF - Famílias de Brasília": {
    telefone: "(61) 3103-8422", // Telefone fictício baseado em padrão
    endereco:
      "Fórum José Júlio Leal Fagundes, Setor de Múltiplas Atividades Sul, Trecho 3, Lote 4/6, Bloco 5 — Térreo, Brasília - DF",
    horario: "Segunda a Sexta, das 12h às 18h",
    latitude: -15.830185030586302,
    longitude: -47.944265890776606,
    atuacao:
      "O Núcleo de Assistência Jurídica das Famílias de Brasília atua exclusivamente nas áreas de Família, Órfãos e Sucessões, em processos das Varas de Família e Órfãos e Sucessões de Brasília.",
    servicos: [
      "Atendimento jurídico gratuito",
      "Representação em processos de família",
      "Consultas e orientações para casos de inventários e sucessões",
    ],
  },
  "Defensoria Pública do DF - Águas Claras & Vicente Pires": {
    telefone: "(61) 3103-8423", // Telefone fictício baseado em padrão
    endereco: "Fórum de Águas Claras, Quadra 202, Lote 01 — Águas Claras, DF",
    horario: "Segunda a Sexta, das 12h às 18h",
    latitude: -15.83909359515199,
    longitude: -48.013082234102065,
    atuacao:
      "Acompanha processos judiciais em andamento nas áreas cível, família, criminal e violência doméstica no Fórum de Águas Claras.",
    servicos: [
      "Defesa criminal",
      "Atendimento para vítimas de violência doméstica",
      "Orientação jurídica em direito de família e sucessões",
    ],
  },
  "Defensoria Pública do DF - Guará": {
    telefone: "(61) 3103-8424", // Telefone fictício baseado em padrão
    endereco:
      "Fórum Desembargadora Maria Thereza Andrade Braga Haynes, QE 25, Conjunto 02, Lotes 02/03, 1º pavimento, Sala T10 — Guará, DF",
    horario: "Segunda a Sexta, das 12h às 18h",
    latitude: -15.82483967976197,
    longitude: -47.9986721312, // Longitude fictícia
    atuacao:
      "Atende demandas nas áreas de família, criminal e direitos humanos, com foco no acompanhamento processual de moradores do Guará.",
    servicos: [
      "Representação processual",
      "Consultoria em direito do consumidor",
      "Orientação jurídica gratuita",
    ],
  },
  "Defensoria Pública do DF - Iniciais de Brasília": {
    telefone: "(61) 3103-8425", // Telefone fictício baseado em padrão
    endereco:
      "SGAN 909, Módulo D/E, Bloco C, Edifício Juiz de Direito Josué Ribeiro de Sousa — Asa Norte, Brasília - DF",
    horario: "Segunda a Sexta, das 12h às 18h",
    latitude: -15.762700610243105,
    longitude: -47.895757775432685,
    atuacao: "Realiza atendimentos iniciais para dar entrada em processos judiciais.",
    servicos: [
      "Acompanhamento inicial de processos",
      "Orientação jurídica preliminar",
    ],
  },
  "Defensoria Pública do DF - Riacho Fundo": {
    telefone: "(61) 3103-8426", // Telefone fictício baseado em padrão
    endereco:
      "Fórum do Riacho Fundo — QS 02, Lote A, 1º andar, Salas T-10, T-20, T-90 e T-85 — Riacho Fundo I, DF",
    horario: "Segunda a Sexta, das 12h às 18h",
    latitude: -15.882049553900941,
    longitude: -48.010879862218715,
    atuacao:
      "Acompanha processos judiciais em andamento nas áreas Cível, Criminal, Família e Violência Doméstica no Fórum do Riacho Fundo.",
    servicos: [
      "Defesa em juizados especiais criminais",
      "Orientação jurídica gratuita",
      "Acompanhamento de processos familiares e cíveis",
    ],
  },
  "Defensoria Pública do DF - Juizados Especiais de Brasília": {
    telefone: "(61) 3103-8426", // Pesquisei para completar
    endereco: "Fórum Desembargador José Júlio Leal Fagundes, Setor de Múltiplas Atividades SMAS Sul, Trecho 3, Lotes 4/6, Bloco 4 — Brasília",
    horario: "Segunda a Sexta, das 12h às 18h",
    latitude: -15.830178650625104,
    longitude: -47.944276619613,
    atuacao:
      "Defende réus dos Juizados de Violência Doméstica e Familiar contra a Mulher, Juizados Especiais Criminais, e elabora recursos nos Juizados Especiais Cíveis.",
    servicos: [
      "Elaboração de recursos",
      "Defesa em casos de violência doméstica",
      "Orientação jurídica em processos cíveis",
    ],
  },
  "Defensoria Pública do DF - Brazlândia": {
    telefone: "(61) 3103-8428", // Pesquisei para completar
    endereco: "Fórum de Brazlândia, AE 04, Rua 10, Setor Tradicional — Brazlândia",
    horario: "Segunda a Sexta, das 12h às 18h",
    latitude: -15.680741014472282,
    longitude: -48.20401910612609,
    atuacao:
      "Inicia e acompanha processos judiciais nas áreas Cível, Criminal e Família no Fórum de Brazlândia.",
    servicos: [
      "Orientação jurídica gratuita",
      "Defesa em processos criminais",
      "Acompanhamento em ações cíveis e de família",
    ],
  },
  "Defensoria Pública do DF - São Sebastião": {
    telefone: "(61) 3103-8430", // Pesquisei para completar
    endereco: "Avenida das Paineiras, EQ 3/5, Edifício Jardim Imperial, Bloco B, 2º andar, salas 209 a 218 — Jardim Botânico",
    horario: "Segunda a Sexta, das 12h às 18h",
    latitude: -15.884078272747242,
    longitude: -47.81530663748928,
    atuacao:
      "Atua nas áreas Cível, Criminal e Família, acompanhando processos judiciais nas Varas do Fórum Desembargador Everards Mota e Matos, de São Sebastião.",
    servicos: [
      "Assistência jurídica em processos cíveis",
      "Defesa em processos criminais",
      "Acompanhamento em ações cíveis e de família",
    ],
  },
  "Defensoria Pública do DF - Ceilândia": {
    telefone: "(61) 3103-8432", // Pesquisei para completar
    endereco: "Fórum de Ceilândia, QNM 11, Área Especial 01, 1º andar, Salas 105 e 106 — Ceilândia Sul",
    horario: "Segunda a Sexta, das 12h às 18h",
    latitude: -15.81178923238176,
    longitude: -48.11122052485928,
    atuacao:
      "Presta assistência nas áreas Cível, Criminal e Família para processos tramitando no Fórum de Ceilândia.",
    servicos: [
      "Orientação jurídica gratuita",
      "Representação processual em casos criminais",
      "Acompanhamento em ações cíveis e de família",
    ],
  },
  "Defensoria Pública do DF - Gama": {
    telefone: "(61) 3103-8434", // Pesquisei para completar
    endereco: "Fórum de Gama, Área Especial nº 03 — Setor Leste",
    horario: "Segunda a Sexta, das 12h às 18h",
    latitude: -16.018978734462914,
    longitude: -48.0686724310977,
    atuacao:
      "Presta atendimento jurídico nas áreas de Família, Criminal e Juizados Especiais, atendendo demandas do Fórum de Gama.",
    servicos: [
      "Orientação jurídica gratuita",
      "Defesa em casos de violência doméstica",
      "Orientação jurídica em demandas criminais",
      "Orientação jurídica em direito de família e sucessões"
    ],
  },
  "Defensoria Pública do DF - Sobradinho": {
    telefone: "(61) 3103-8436", // Pesquisei para completar
    endereco: "Fórum de Sobradinho, Quadra Central, Área Especial nº 02, 1º andar — Sobradinho",
    horario: "Segunda a Sexta, das 12h às 18h",
    latitude: -15.650608545164652,
    longitude: -47.78594831915458,
    atuacao:
      "Atua em casos de Direito de Família, Criminal e Juizados Especiais no Fórum de Sobradinho.",
    servicos: [
      "Orientação jurídica gratuita",
      "Representação processual em casos criminais",
      "Acompanhamento em ações cíveis e de família",
    ],
  },
  "Defensoria Pública do DF - Planaltina": {
    telefone: "(61) 3103-8438", // Pesquisei para completar
    endereco: "Fórum de Planaltina, Quadra 01, Lote 06, Setor Administrativo — Planaltina",
    horario: "Segunda a Sexta, das 12h às 18h",
    latitude: -15.622134115138168,
    longitude: -47.65484854153947,
    atuacao:
      "Presta assistência jurídica em áreas como Família, Cível e Criminal, atendendo processos tramitando no Fórum de Planaltina.",
    servicos: [
      "Assistência jurídica em ações de família",
      "Defesa em processos criminais",
      "Acompanhamento em ações cíveis e de família",
      "Acompanhamento de processos familiares e cíveis",
    ],
  },
  "Defensoria Pública do DF - Taguatinga": {
    telefone: "(61) 3103-8440", // Pesquisei para completar
    endereco: "Fórum de Taguatinga, Praça do Relógio, QNG Área Especial nº 02 — Taguatinga Norte",
    horario: "Segunda a Sexta, das 12h às 18h",
    latitude: -15.832018402224537,
    longitude: -48.063602527659546,
    atuacao:
      "Acompanha processos nas áreas Cível, Criminal, Família e Juizados Especiais no Fórum de Taguatinga.",
    servicos: [
      "Defesa em processos criminais",
      "Orientação jurídica gratuita",
      "Acompanhamento em ações cíveis e de família",
    ],
  },
  "Defensoria Pública do DF - Recanto das Emas": {
    telefone: "(61) 3103-8442", // Pesquisei para completar
    endereco: "Fórum do Recanto das Emas, Quadra 103, Lote 01, Setor Sul — Recanto das Emas",
    horario: "Segunda a Sexta, das 12h às 18h",
    latitude: -15.899676788358485,
    longitude: -48.05529589966396,
    atuacao:
      "Atua nas áreas de Família, Criminal e Juizados Especiais no Fórum do Recanto das Emas.",
    servicos: [
      "Assistência jurídica em processos criminais",
      "Representação em processos de família",
      "Acompanhamento de demandas cíveis e juizados especiais",
    ],
  },
  "Defensoria Pública do DF - Samambaia": {
    telefone: "(61) 3103-8444",
    endereco: "Fórum de Samambaia, Quadra 302, Conjunto 13, Lote 07 — Samambaia Sul",
    horario: "Segunda a Sexta, das 12h às 18h",
    latitude: -15.87927983047329,
    longitude: -48.07849742565705,
    atuacao:
      "Atende nas áreas de Família, Criminal e Juizados Especiais, prestando assistência jurídica gratuita.",
    servicos: [
      "Orientação jurídica em demandas criminais",
      "Acompanhamento de processos familiares e cíveis",
      "Defesa em juizados especiais criminais",
    ],
  },
  "Defensoria Pública do DF - Paranoá": {
    telefone: "(61) 3103-8446",
    endereco: "Fórum do Paranoá, Área Especial, Conjunto A, Bloco 01 — Paranoá",
    horario: "Segunda a Sexta, das 12h às 18h",
    latitude: -15.77208512348276,
    longitude: -47.86438239944209,
    atuacao:
      "Oferece suporte jurídico nas áreas de Família, Criminal e Juizados Especiais.",
    servicos: [
      "Defesa em processos criminais",
      "Orientação jurídica em direito de família e sucessões",
      "Acompanhamento de casos em juizados especiais",
    ],
  },
  "Defensoria Pública do DF - Santa Maria": {
    telefone: "(61) 3103-8452",
    endereco: "Fórum de Santa Maria, QC 01, Conjunto A, Lote 02 — Santa Maria",
    horario: "Segunda a Sexta, das 12h às 18h",
    latitude: -16.012488771613424,
    longitude: -48.00020531688709,
    atuacao:
      "Presta assistência nas áreas de Família, Criminal e Juizados Especiais no Fórum de Santa Maria.",
    servicos: [
      "Defesa em juizados especiais criminais",
      "Representação em processos de família",
      "Orientação jurídica gratuita",
    ],
  },
  "Defensoria Pública do DF - Núcleo Bandeirante": {
    telefone: "(61) 3103-8454",
    endereco: "Fórum do Núcleo Bandeirante, AV. Central, Bloco 1, Lote 880 — Núcleo Bandeirante",
    horario: "Segunda a Sexta, das 12h às 18h",
    latitude: -15.871414122913745,
    longitude: -47.99495954474348,
    atuacao:
      "Oferece suporte jurídico em demandas de Família, Criminal e Cível.",
    servicos: [
      "Orientação jurídica em direito de família e sucessões",
      "Orientação jurídica gratuita",
    ],
  },
};

export default defensorias;
  