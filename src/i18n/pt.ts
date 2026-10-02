// Brazilian Portuguese copy — primary language of parcaplay.com
export const pt = {
  htmlLang: 'pt-BR',
  skip: 'Pular para o conteúdo',
  nav: {
    home: 'Início',
    news: 'Novidades',
    download: 'Baixar',
    faq: 'FAQ',
    privacy: 'Privacidade',
    about: 'Sobre',
    join: 'Entrar na beta',
    menu: 'Abrir menu',
    langLabel: 'Idioma / Language',
    beta: 'beta',
  },
  footer: {
    tagline: 'Seu parça gamer, que responde por voz.',
    site: 'Site',
    legal: 'Legal',
    madeIn: 'Feito no Brasil.',
    contactLabel: 'E-mail de contato',
    fine: '© 2026 Parça · Site estático, sem rastreadores e sem cookies.',
  },

  home: {
    title: 'Parça — seu parça gamer, que responde por voz',
    description:
      'Parça é um companheiro gamer por voz para PC com Windows. Aperte F8, pergunte em voz alta e ele responde falando — sem alt-tab, sem digitar, sem abrir wiki.',
    eyebrow: 'Beta fechada · PC com Windows',
    h1: 'Seu parça gamer, que responde por voz.',
    lead: 'Aperte F8, pergunte em voz alta e o Parça responde falando — sem alt-tab, sem digitar, sem abrir wiki.',
    sub: 'Ele olha só a janela do jogo, entende onde você está e fala a resposta em segundos.',
    whyTitle: 'Porque tem jogo que não ensina nada',
    whyLead:
      'Alguns jogos te jogam no mundo e não ensinam nada: nem como kitar o inimigo, nem como funciona o chefe. O Parça explica enquanto você joga, sem você sair do jogo.',
    quote:
      '"O jogo não te explica NADA! É tudo na tentativa e erro. Então o Parça ajuda bastante."',
    quoteAttr: 'Hugario, beta tester · Don\'t Starve Together',
    ctaPrimary: 'Quero entrar na beta',
    ctaSecondary: 'Como funciona',
    orbCaption: 'A orbe do Parça, rodando pelos estados',
    orbStates: [
      { color: 'grey', name: 'Cinza', desc: 'pronto' },
      { color: 'green', name: 'Verde', desc: 'ouvindo' },
      { color: 'amber', name: 'Âmbar', desc: 'pensando' },
      { color: 'coral', name: 'Coral', desc: 'falando' },
    ],
    orbLegendTitle: 'A orbe mostra o que ele está fazendo',
    orbLegendText:
      'Uma orbezinha brilhante no canto da tela mostra o estado do Parça — e quantas perguntas você ainda tem hoje.',
    orbDemo: {
      appLabel: 'No app',
      connected: 'Conectado',
      questionsToday: 'Perguntas hoje',
      questionsLeft: '312 restantes de 400',
      illustrationNote:
        'Ilustração: no jogo, a orbe mostra quantas perguntas restam no seu dia.',
    },

    howTitle: 'Como funciona',
    how: [
      {
        title: 'Aperte F8',
        text: 'No controle, segurar BACK + LB faz a mesma coisa. É só chamar — sem sair do jogo.',
      },
      {
        title: 'Pergunte em voz alta',
        text: '“Onde acho diamante?”, “como derroto esse boss?”, “minha base fica atrás da cachoeira”. Vale perguntar de tudo.',
      },
      {
        title: 'Ouça a resposta',
        text: 'Ele tira uma foto só da janela do jogo, acha a resposta e começa a falar em segundos. Pode interromper a qualquer hora.',
      },
    ],

    featuresTitle: 'Feito pra jogar junto',
    features: [
      {
        title: 'Pergunta por voz com F8',
        text: 'Aperte F8 e fale. O Parça fotografa só a janela do jogo pra entender onde você está, busca a resposta e responde por voz — a fala começa assim que a primeira frase está pronta.',
      },
      {
        title: 'Anotações com F6',
        text: 'Diga “minha base fica atrás da cachoeira”. Ele repete a anotação e só salva depois do seu “sim” bem claro — e lembra disso pra você mais tarde.',
      },
      {
        title: 'Funciona no controle',
        text: 'Segurar BACK + LB no controle faz o mesmo que F8. Sem teclado por perto, sem problema.',
      },
      {
        title: 'Interrompa à vontade',
        text: 'Apertou F8 ou F6 no meio da fala? Ele para na hora e já ouve seu próximo comando.',
      },
      {
        title: '“Valeu, Parça”',
        text: 'Diga “valeu, Parça” e ele encerra a conversa com educação. Simples assim.',
      },
      {
        title: 'Sabe que jogo é',
        text: 'Ele reconhece o jogo sozinho — da própria lista, mais os nomes da sua biblioteca Steam e Epic. Se não souber, ele pergunta qual é.',
      },
      {
        title: 'App de PC de verdade',
        text: 'Janela principal, ícone na bandeja do Windows, pausar, ajustes e sair. Do jeito que um app de PC deve ser.',
      },
      {
        title: '5 vozes, 2 idiomas',
        text: 'Raquel e Yuri em português; Lily, Ivanna e Hale em inglês. O idioma que você escolhe é o idioma da conversa inteira.',
      },
    ],

    seesTitle: 'O que o Parça vê — e o que ele não vê',
    seesYesTitle: 'Ele vê (só quando você chama)',
    seesYes: [
      'Sua pergunta em voz alta, quando você aperta F8 ou F6',
      'Uma foto só da janela do jogo, naquele momento',
      'O nome do jogo — da lista dele ou da sua biblioteca Steam e Epic',
    ],
    seesNoTitle: 'Ele não vê — e não faz',
    seesNo: [
      'Nunca a tela inteira: só a janela do jogo, e só na hora da pergunta',
      'Não lê nem modifica os arquivos ou a memória do jogo — não é cheat',
      'Suas anotações ficam só na sua conta; ninguém mais vê',
    ],
    anticheatTitle: 'E sobre ban?',
    anticheat:
      'Ele não toca no jogo: só escuta as próprias teclas de atalho e olha a tela, como um amigo olhando por cima do seu ombro. Mesmo assim, não dá pra prometer que nenhum sistema anti-cheat vai implicar — o que dá pra afirmar é que ele não mexe nos arquivos nem na memória do jogo.',

    gamesTitle: 'Os jogos que ele manja',
    gamesIntro:
      'O Parça tem conhecimento montado à mão e revisado para nove jogos. Para qualquer outro, ele pesquisa na hora na web — demora um pouquinho mais, e ele avisa que está pesquisando.',
    curatedTitle: 'Conhecimento profundo',
    curated: [
      { name: 'Minecraft', note: 'de longe o mais profundo: biomas, Nether, End, sobrevivência, construção e exploração' },
      { name: 'Don\'t Starve Together', note: 'sobrevivência, estações, chefes e como kitar cada inimigo' },
      { name: 'The Witcher 3: Wild Hunt', note: '' },
      { name: 'Elden Ring', note: '' },
      { name: 'Cyberpunk 2077', note: '' },
      { name: 'Red Dead Redemption 2', note: '' },
      { name: 'God of War (2018)', note: '' },
      { name: 'God of War Ragnarök', note: '' },
      { name: 'Disco Elysium', note: '' },
    ],
    othersTitle: 'E os outros jogos?',
    othersText:
      'Para qualquer outro jogo ele responde pesquisando na web ao vivo. Essas respostas demoram um pouco mais — e ele diz que está pesquisando enquanto trabalha. Sem papo de “manja de todos os jogos”: o conhecimento profundo e revisado é desses nove.',

    storyTitle: 'História se respeita',
    storyIntro:
      'The Witcher 3, Cyberpunk 2077, Red Dead Redemption 2, Disco Elysium, os dois God of War — e Elden Ring, pela lore e pelos finais — são jogos em que a história É a experiência. Um companheiro não pode estragar isso.',
    storyCarefulTitle: 'Cuidadoso com spoilers, por padrão',
    storyCareful:
      'O Parça ajuda com onde ir, como vencer e o que uma escolha muda — sem contar como as quests terminam, quem vive ou morre, ou qual final você vai pegar.',
    storyChecks:
      'Cada resposta passa por duas checagens de spoiler separadas antes de ser falada.',
    storyHonest:
      'Isso é cuidado de propósito, não promessa: não dá pra garantir que ele nunca vai soltar um spoiler.',
    storyOverrideTitle: 'Quer saber de tudo mesmo?',
    storyOverride:
      'É só pedir — “sem rodeios” em português — e dali em diante ele responde abertamente para aquele jogo.',
    storyMinecraftTitle: 'O contraste: Minecraft e Don\'t Starve Together',
    storyMinecraft:
      'Minecraft e Don\'t Starve Together são sandbox: sobrevivência, construção e exploração. Ali a ajuda é direta, sem filtro de spoiler.',

    voicesTitle: 'Cinco vozes',
    voicesIntro:
      'Escolha quem fala com você. O idioma escolhido é o idioma da conversa inteira: ele entende você e responde naquele idioma.',
    voices: [
      { name: 'Raquel', tag: 'Português', desc: 'Voz em português brasileiro.', file: 'raquel' },
      { name: 'Yuri', tag: 'Português', desc: 'Voz em português brasileiro.', file: 'yuri' },
      { name: 'Lily', tag: 'Inglês · britânico', desc: 'Voz em inglês com sotaque britânico.', file: 'lily' },
      { name: 'Ivanna', tag: 'Inglês · americano', desc: 'Voz em inglês com sotaque americano.', file: 'ivanna' },
      { name: 'Hale', tag: 'Inglês · americano', desc: 'Voz em inglês com sotaque americano.', file: 'hale' },
    ],
    sampleLabel: 'Ouvir amostra',

    ctaTitle: 'Bora jogar junto?',
    ctaText: 'O Parça está em beta fechada. Peça seu convite e teste com a gente.',
    ctaButton: 'Pedir convite pra beta',
  },

  download: {
    title: 'Baixar o Parça — comece a jogar junto',
    description:
      'Baixe o instalador do Parça para Windows 10/11. Requisitos, aviso do SmartScreen e dicas para jogar tranquilo.',
    h1: 'Baixar o Parça',
    intro:
      'O Parça está em beta fechada: você precisa de um token de testador para usar. Se já tem o seu, baixe e instale abaixo.',
    reqTitle: 'O que você precisa',
    reqs: [
      'Windows 10 ou 11',
      'Um microfone',
      'Conexão com a internet',
    ],
    installerTitle: 'Instalador',
    installerText:
      'Um arquivo só, o Parca-Setup.exe (uns 70 MB), direto da página de releases no GitHub. A instalação leva menos de um minuto — e as atualizações se instalam sozinhas.',
    installerButton: 'Baixar o instalador',
    installerNote: 'Parca-Setup.exe · Windows 10/11',
    stepsTitle: 'Como instalar',
    steps: [
      'Baixe e abra o Parca-Setup.exe.',
      'Se o Windows mostrar o aviso de proteção, siga a etapa abaixo — é nela que muita gente trava.',
      'Marque a caixa do ícone na área de trabalho, se quiser. Não pede senha de administrador.',
      'O Parça abre e pede seu token de testador. Pronto.',
    ],
    oldInstallerNote:
      'Usava o instalador antigo? É só rodar o novo por cima — token e configurações são mantidos.',
    uninstallNote:
      'Para desinstalar: Configurações do Windows → Aplicativos → Parça, como qualquer programa.',
    smartscreenTitle: 'O Windows mostrou um aviso?',
    smartscreen:
      'O programa ainda não é assinado, então o Windows pode dizer “O Windows protegeu o computador”. Clique em “Mais informações” e depois em “Executar assim mesmo”.',
    tipsTitle: 'Dicas pra jogar tranquilo',
    tips: [
      'Jogue em modo borderless (tela cheia em janela): funciona melhor.',
      'Se o jogo roda como administrador, o Parça também precisa rodar como administrador — ele detecta isso e oferece pra reiniciar sozinho com um clique.',
      'Apertou F8 sem querer? Aperte de novo pra interromper e seguir jogando.',
    ],
  },

  faq: {
    title: 'FAQ — perguntas frequentes sobre o Parça',
    description:
      'É grátis? Funciona no console? Quais idiomas? O Parça responde: preço da beta, idiomas, anti-cheat e privacidade da tela.',
    h1: 'Perguntas frequentes',
    items: [
      {
        q: 'É grátis?',
        a: 'Sim — grátis durante a beta fechada. Cada testador ganha uma cota diária de perguntas (atualmente 400 por dia).',
      },
      {
        q: 'E para jogos que não explicam nada?',
        a: 'É onde o Parça brilha. Tem jogo que te joga no mundo e não ensina nada — cada inimigo tem um jeito próprio de ser kitar, os chefes mudam de forma, e ninguém te conta isso. O Parça explica enquanto você joga, sem sair do jogo. Como disse o Hugario, um dos nossos testadores, jogando Don\'t Starve Together: “O jogo não te explica NADA! É tudo na tentativa e erro. Então o Parça ajuda bastante.”',
      },
      {
        q: 'Funciona no console?',
        a: 'Ainda não. Uma versão de celular para quem faz stream de console na Twitch está em testes iniciais — vem depois.',
      },
      {
        q: 'Quais idiomas ele fala?',
        a: 'Português e inglês. São cinco vozes: Raquel e Yuri em português; Lily (britânica), Ivanna (americana) e Hale (americano) em inglês. O idioma que você escolhe é o idioma da conversa inteira.',
      },
      {
        q: 'Vou tomar ban?',
        a: 'O Parça não é cheat: ele não lê nem modifica os arquivos ou a memória do jogo — só escuta as próprias teclas de atalho e olha a tela, como um amigo olhando por cima do seu ombro. Mesmo assim, não dá pra prometer que nenhum sistema anti-cheat vai implicar.',
      },
      {
        q: 'Ele vê minha tela?',
        a: 'Só a janela do jogo — e só quando você aperta F8 ou F6 pra perguntar. Nunca a tela inteira, nunca em outro momento.',
      },
    ],
  },

  privacy: {
    title: 'Privacidade — Parça',
    description: 'Rascunho da política de privacidade do Parça: o que é enviado, para onde vai e o que nunca acontece.',
    h1: 'Privacidade',
    draftTitle: 'Rascunho — aguardando revisão',
    draftText:
      'Este texto é um rascunho para a dona revisar com um advogado antes de publicar. Não é a política final.',
    intro:
      'O que o Parça faz com a sua voz, a imagem do jogo e as suas anotações — só com os fatos, sem enrolação:',
    points: [
      'Só quando você aperta F8 ou F6, o Parça envia aquela gravação de voz e uma foto da janela do jogo para o servidor do Parça em São Paulo, Brasil.',
      'O servidor usa serviços de IA de terceiros para processar: ElevenLabs (transcrever a fala e gerar a voz), Kimi da Moonshot AI (entender a pergunta, ler a imagem, escrever a resposta, pesquisar na web) e TypeSafe (a checagem de spoiler).',
      'Anotações salvas com F6 ficam guardadas no servidor só para a sua conta e nunca aparecem para outros jogadores.',
      'Registros de uso contam perguntas por testador por dia e registram sobre qual jogo foi a pergunta. Não guardam o texto da pergunta.',
      'Sem anúncios — e o programa não vende dados.',
    ],
    outro:
      'Este site não usa rastreadores, analytics nem cookies.',
  },

  about: {
    title: 'Sobre o Parça — peça seu convite pra beta',
    description:
      'O que é o Parça e como pedir um convite para a beta fechada. Formulário em breve — nenhum dado é coletado por enquanto.',
    h1: 'Sobre o Parça',
    aboutText:
      'O Parça é um companheiro gamer por voz para PC com Windows, feito no Brasil. “Parça” é gíria para parceiro, colega — e é exatamente esse o espírito: um parça do seu lado enquanto você joga, que responde sem você precisar largar o controle.',
    formTitle: 'Pedir convite pra beta',
    formDraftTitle: 'Formulário ainda não ativo',
    formDraftText:
      'O e-mail de contato já está definido (contato@parcaplay.com), mas o sistema de envio do formulário ainda não. Por isso o formulário abaixo continua desativado e nenhum dado é coletado por enquanto.',
    formName: 'Nome',
    formEmail: 'E-mail',
    formGame: 'Qual seu jogo favorito no momento? (opcional)',
    formWhy: 'Por que quer testar o Parça? (opcional)',
    formSubmit: 'Enviar pedido',
    formTodo: 'TODO: definir o destino do formulário (provedor) e aprovar o texto de privacidade antes de ativar.',
    contactTitle: 'Prefere e-mail?',
    contactText: 'Manda um e-mail pra gente — é assim que a lista de espera funciona por enquanto:',
    contactCta: 'Quero entrar na beta',
    contactSubject: 'Quero entrar na beta do Parça',
    contactEmail: 'contato@parcaplay.com',
  },

  news: {
    title: 'Novidades — o que mudou no Parça',
    description:
      'Changelog do Parça em linguagem de jogador: cada versão da beta, o que mudou e o que isso significa pra você. Com feed RSS.',
    h1: 'Novidades',
    intro:
      'O que mudou no Parça, em linguagem de jogador — sem jargão de dev. Assine o feed RSS pra acompanhar.',
    rssLabel: 'Feed RSS',
    backToNews: '← Todas as novidades',
    publishedOn: 'Publicado em',
  },
};
