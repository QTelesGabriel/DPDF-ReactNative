const servicosDisponiveis = {
    "Atendimento jurídico gratuito": {
        descricao: "Oferece assistência jurídica sem custo para cidadãos em diversas áreas do direito.",
        defensorias: [
            "Defensoria Pública do DF - Famílias de Brasília",
            "Defensoria Pública do DF - Guará",
            "Defensoria Pública do DF - Riacho Fundo",
            "Defensoria Pública do DF - Brazlândia",
            "Defensoria Pública do DF - São Sebastião",
            "Defensoria Pública do DF - Ceilândia",
            "Defensoria Pública do DF - Gama",
            "Defensoria Pública do DF - Sobradinho",
            "Defensoria Pública do DF - Planaltina",
            "Defensoria Pública do DF - Taguatinga",
            "Defensoria Pública do DF - Recanto das Emas",
            "Defensoria Pública do DF - Núcleo Bandeirante",
        ],
        documentos: [
            "Documento de identificação (RG ou CNH)",
            "Comprovante de residência",
            "Documentos relacionados ao caso em questão",
        ],
    },
    "Representação em processos de família": {
        descricao: "Atua na representação de clientes em casos de direito de família, como divórcios, guarda e pensão alimentícia.",
        defensorias: [
            "Defensoria Pública do DF - Famílias de Brasília",
            "Defensoria Pública do DF - Riacho Fundo",
            "Defensoria Pública do DF - Ceilândia",
            "Defensoria Pública do DF - Gama",
            "Defensoria Pública do DF - Sobradinho",
            "Defensoria Pública do DF - Taguatinga",
            "Defensoria Pública do DF - Recanto das Emas",
        ],
        documentos: [
            "Certidão de nascimento ou casamento",
            "Documentos pessoais",
            "Provas ou documentos relacionados ao caso",
        ],
    },
    "Consultas e orientações para casos de inventários e sucessões": {
        descricao: "Oferece suporte jurídico em questões relacionadas à sucessão patrimonial e inventários.",
        defensorias: ["Defensoria Pública do DF - Famílias de Brasília"],
        documentos: [
            "Certidão de óbito",
            "Documentos dos bens a serem inventariados",
            "Documentos de identificação de herdeiros",
        ],
    },
    "Defesa criminal": {
        descricao: "Realiza a defesa de réus em processos criminais em diversas instâncias.",
        defensorias: [
            "Defensoria Pública do DF - Águas Claras & Vicente Pires",
            "Defensoria Pública do DF - Guará",
            "Defensoria Pública do DF - Brazlândia",
            "Defensoria Pública do DF - São Sebastião",
            "Defensoria Pública do DF - Ceilândia",
            "Defensoria Pública do DF - Gama",
            "Defensoria Pública do DF - Sobradinho",
            "Defensoria Pública do DF - Planaltina",
            "Defensoria Pública do DF - Taguatinga",
            "Defensoria Pública do DF - Recanto das Emas",
        ],
        documentos: [
            "Documento de identificação (RG ou CNH)",
            "Boletim de ocorrência",
            "Documentos relacionados ao caso",
        ],
    },
    "Atendimento para vítimas de violência doméstica": {
        descricao: "Fornece suporte jurídico para vítimas de violência doméstica e familiar.",
        defensorias: [
            "Defensoria Pública do DF - Águas Claras & Vicente Pires",
            "Defensoria Pública do DF - Gama",
            "Defensoria Pública do DF - Juizados Especiais de Brasília",
        ],
        documentos: [
            "Boletim de ocorrência",
            "Medida protetiva (se houver)",
            "Documentos pessoais",
        ],
    },
    "Orientação jurídica em direito de família e sucessões": {
        descricao: "Oferece orientação jurídica para questões de família, heranças e sucessões.",
        defensorias: [
            "Defensoria Pública do DF - Águas Claras & Vicente Pires",
            "Defensoria Pública do DF - Riacho Fundo",
        ],
        documentos: [
            "Documentos pessoais",
            "Certidão de casamento ou nascimento",
            "Documentos relacionados ao caso",
        ],
    },
    "Representação processual": {
        descricao: "Atua em processos judiciais, representando os interesses dos assistidos.",
        defensorias: [
            "Defensoria Pública do DF - Guará",
            "Defensoria Pública do DF - Riacho Fundo",
            "Defensoria Pública do DF - Sobradinho",
            "Defensoria Pública do DF - Núcleo Bandeirante",
        ],
        documentos: [
            "Documento de identificação",
            "Provas e documentos relacionados ao caso",
        ],
    },
    "Consultoria em direito do consumidor": {
        descricao: "Oferece orientação jurídica em questões envolvendo direito do consumidor.",
        defensorias: ["Defensoria Pública do DF - Guará"],
        documentos: [
            "Nota fiscal ou comprovante de compra",
            "Contrato ou termo de garantia (se houver)",
            "Documento de identificação",
        ],
    },
    "Acompanhamento inicial de processos": {
        descricao: "Oferece suporte no início de processos judiciais, auxiliando na análise e encaminhamento da ação.",
        defensorias: [
            "Defensoria Pública do DF - Guará",
            "Defensoria Pública do DF - Ceilândia",
            "Defensoria Pública do DF - Sobradinho",
        ],
        documentos: [
            "Documento de identificação",
            "Documentos relacionados ao caso",
            "Comprovante de residência",
        ],
    },
    "Orientação jurídica preliminar": {
        descricao: "Presta orientação inicial em questões jurídicas, ajudando na identificação das melhores alternativas legais.",
        defensorias: [
            "Defensoria Pública do DF - Águas Claras & Vicente Pires",
            "Defensoria Pública do DF - Taguatinga",
            "Defensoria Pública do DF - Gama",
        ],
        documentos: [
            "Documento de identificação",
            "Relato do caso",
        ],
    },
    "Defesa em juizados especiais criminais": {
        descricao: "Atua na defesa de réus em juizados especiais criminais, que tratam de infrações de menor potencial ofensivo.",
        defensorias: [
            "Defensoria Pública do DF - Juizados Especiais de Brasília",
            "Defensoria Pública do DF - Ceilândia",
            "Defensoria Pública do DF - Planaltina",
        ],
        documentos: [
            "Documento de identificação",
            "Notificação ou denúncia",
            "Boletim de ocorrência (se aplicável)",
        ],
    },
    "Orientação jurídica gratuita": {
        descricao: "Fornece orientações jurídicas sem custo em diversas áreas do direito.",
        defensorias: [
            "Defensoria Pública do DF - Famílias de Brasília",
            "Defensoria Pública do DF - Núcleo Bandeirante",
            "Defensoria Pública do DF - Gama",
        ],
        documentos: [
            "Documento de identificação",
            "Comprovante de residência",
            "Documentos relacionados ao caso",
        ],
    },
    "Acompanhamento de processos familiares e cíveis": {
        descricao: "Realiza o acompanhamento e suporte em ações de família e cíveis, assegurando a continuidade do processo.",
        defensorias: [
            "Defensoria Pública do DF - Famílias de Brasília",
            "Defensoria Pública do DF - Guará",
            "Defensoria Pública do DF - Taguatinga",
        ],
        documentos: [
            "Documento de identificação",
            "Documentos processuais existentes",
            "Comprovante de residência",
        ],
    },
    "Elaboração de recursos": {
        descricao: "Auxilia na formulação de recursos em processos judiciais em andamento.",
        defensorias: [
            "Defensoria Pública do DF - Guará",
            "Defensoria Pública do DF - Ceilândia",
            "Defensoria Pública do DF - Riacho Fundo",
        ],
        documentos: [
            "Documento de identificação",
            "Cópia do processo",
            "Decisão a ser contestada",
        ],
    },
    "Defesa em casos de violência doméstica": {
        descricao: "Oferece suporte jurídico a pessoas envolvidas em casos de violência doméstica, seja vítima ou acusado.",
        defensorias: [
            "Defensoria Pública do DF - Juizados Especiais de Brasília",
            "Defensoria Pública do DF - Gama",
            "Defensoria Pública do DF - São Sebastião",
        ],
        documentos: [
            "Documento de identificação",
            "Boletim de ocorrência",
            "Medida protetiva (se aplicável)",
        ],
    },
    "Orientação jurídica em processos cíveis": {
        descricao: "Presta consultoria em questões cíveis, orientando os assistidos sobre direitos e possibilidades legais.",
        defensorias: [
            "Defensoria Pública do DF - Sobradinho",
            "Defensoria Pública do DF - Taguatinga",
            "Defensoria Pública do DF - Núcleo Bandeirante",
        ],
        documentos: [
            "Documento de identificação",
            "Documentos relacionados ao caso",
            "Comprovante de residência",
        ],
    },
    "Defesa em processos criminais": {
        descricao: "Fornece suporte jurídico para a defesa de acusados em processos criminais em todas as instâncias.",
        defensorias: [
            "Defensoria Pública do DF - Guará",
            "Defensoria Pública do DF - Ceilândia",
            "Defensoria Pública do DF - Planaltina",
        ],
        documentos: [
            "Documento de identificação",
            "Cópia da denúncia ou intimação",
            "Provas ou documentos que possam ser utilizados na defesa",
        ],
    },
    "Acompanhamento em ações cíveis e de família": {
        descricao: "Fornece suporte contínuo em processos judiciais relacionados a questões cíveis e de família.",
        defensorias: [
            "Defensoria Pública do DF - Famílias de Brasília",
            "Defensoria Pública do DF - Guará",
            "Defensoria Pública do DF - Ceilândia",
        ],
        documentos: [
            "Documento de identificação",
            "Comprovante de residência",
            "Documentos do processo em andamento",
        ],
    },
    "Assistência jurídica em processos cíveis": {
        descricao: "Oferece auxílio em processos cíveis, como disputas contratuais, indenizações e outras demandas da área.",
        defensorias: [
            "Defensoria Pública do DF - Sobradinho",
            "Defensoria Pública do DF - Planaltina",
            "Defensoria Pública do DF - Núcleo Bandeirante",
        ],
        documentos: [
            "Documento de identificação",
            "Comprovante de residência",
            "Documentos relacionados ao caso",
        ],
    },
    "Assistência jurídica em processos criminais": {
        descricao: "Presta suporte jurídico em processos penais, garantindo o direito de defesa em todas as instâncias.",
        defensorias: [
            "Defensoria Pública do DF - Guará",
            "Defensoria Pública do DF - Taguatinga",
            "Defensoria Pública do DF - Ceilândia",
        ],
        documentos: [
            "Documento de identificação",
            "Intimação ou denúncia",
            "Comprovante de residência",
        ],
    },
    "Assistência jurídica em ações de família": {
        descricao: "Auxilia em processos judiciais relacionados a divórcios, guarda de filhos, pensões alimentícias e outras questões familiares.",
        defensorias: [
            "Defensoria Pública do DF - Famílias de Brasília",
            "Defensoria Pública do DF - Gama",
            "Defensoria Pública do DF - São Sebastião",
        ],
        documentos: [
            "Documento de identificação",
            "Certidão de casamento ou nascimento",
            "Comprovante de residência",
        ],
    },
    "Representação processual em casos criminais": {
        descricao: "Atua na defesa legal de acusados em processos criminais, oferecendo suporte jurídico em todas as etapas.",
        defensorias: [
            "Defensoria Pública do DF - Riacho Fundo",
            "Defensoria Pública do DF - Ceilândia",
            "Defensoria Pública do DF - Planaltina",
        ],
        documentos: [
            "Documento de identificação",
            "Denúncia ou intimação",
            "Provas ou documentos relevantes para o caso",
        ],
    },
    "Assistência jurídica gratuita em ações de violência doméstica": {
        descricao: "Oferece suporte jurídico gratuito para vítimas de violência doméstica, incluindo medidas protetivas e processos relacionados.",
        defensorias: [
            "Defensoria Pública do DF - São Sebastião",
            "Defensoria Pública do DF - Gama",
            "Defensoria Pública do DF - Núcleo Bandeirante",
        ],
        documentos: [
            "Documento de identificação",
            "Boletim de ocorrência",
            "Medida protetiva (se aplicável)",
        ],
    },
    "Acompanhamento de demandas cíveis e juizados especiais": {
        descricao: "Realiza o acompanhamento de processos em juizados especiais e ações cíveis de menor complexidade.",
        defensorias: [
            "Defensoria Pública do DF - Guará",
            "Defensoria Pública do DF - Recanto das Emas",
            "Defensoria Pública do DF - Taguatinga",
        ],
        documentos: [
            "Documento de identificação",
            "Comprovante de residência",
            "Documentos processuais existentes",
        ],
    },
    "Orientação jurídica em demandas criminais": {
        descricao: "Presta consultoria jurídica em questões penais, esclarecendo dúvidas e oferecendo alternativas legais.",
        defensorias: [
            "Defensoria Pública do DF - Águas Claras & Vicente Pires",
            "Defensoria Pública do DF - Ceilândia",
            "Defensoria Pública do DF - Planaltina",
        ],
        documentos: [
            "Documento de identificação",
            "Denúncia ou notificação",
            "Relato do caso",
        ],
    },
    "Acompanhamento de casos em juizados especiais": {
        descricao: "Fornece suporte jurídico em ações de menor complexidade nos juizados especiais cíveis e criminais.",
        defensorias: [
            "Defensoria Pública do DF - Guará",
            "Defensoria Pública do DF - Juizados Especiais de Brasília",
            "Defensoria Pública do DF - Sobradinho",
        ],
        documentos: [
            "Documento de identificação",
            "Documentos do caso",
            "Comprovante de residência",
        ],
    },
};

export default servicosDisponiveis

