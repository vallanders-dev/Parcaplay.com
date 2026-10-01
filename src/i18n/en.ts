// English copy — second language of parcaplay.com
export const en = {
  htmlLang: 'en',
  skip: 'Skip to content',
  nav: {
    home: 'Home',
    news: 'News',
    download: 'Download',
    faq: 'FAQ',
    privacy: 'Privacy',
    about: 'About',
    join: 'Join the beta',
    menu: 'Open menu',
    langLabel: 'Language / Idioma',
    beta: 'beta',
  },
  footer: {
    tagline: 'Your gaming buddy that answers by voice.',
    site: 'Site',
    legal: 'Legal',
    madeIn: 'Made in Brazil.',
    contactLabel: 'Contact email',
    fine: '© 2026 Parça · Static site, no trackers and no cookies.',
  },

  home: {
    title: 'Parça — your gaming buddy that answers by voice',
    description:
      'Parça is a voice-driven gaming companion for Windows PC. Press F8, ask out loud and it answers by voice — no alt-tabbing, no typing, no wiki tabs.',
    eyebrow: 'Closed beta · Windows PC',
    h1: 'Your gaming buddy that answers by voice.',
    lead: 'Press F8, ask out loud, and Parça answers by voice — no alt-tabbing, no typing, no wiki tabs.',
    sub: 'It looks only at the game window, figures out where you are, and speaks the answer back in seconds.',
    ctaPrimary: 'Join the beta',
    ctaSecondary: 'How it works',
    orbCaption: "Parça's orb, cycling through its states",
    orbStates: [
      { color: 'grey', name: 'Grey', desc: 'ready' },
      { color: 'green', name: 'Green', desc: 'listening' },
      { color: 'amber', name: 'Amber', desc: 'thinking' },
      { color: 'coral', name: 'Coral', desc: 'speaking' },
    ],
    orbLegendTitle: 'The orb shows what it is doing',
    orbLegendText:
      'A small glowing orb in the corner of the screen shows what Parça is up to — and how many questions you have left today.',
    orbDemo: {
      appLabel: 'In the app',
      connected: 'Connected',
      questionsToday: 'Questions today',
      questionsLeft: '312 remaining of 400',
      illustrationNote:
        'Illustration: in-game, the orb shows how many questions you have left today.',
    },

    howTitle: 'How it works',
    how: [
      {
        title: 'Press F8',
        text: 'On controller, holding BACK + LB does the same thing. Just call — no leaving the game.',
      },
      {
        title: 'Ask out loud',
        text: '“Where do I find diamonds?”, “how do I beat this boss?”, “my base is behind the waterfall”. Ask anything.',
      },
      {
        title: 'Hear the answer',
        text: 'It snaps a picture of just the game window, finds the answer and starts speaking in seconds. Interrupt anytime.',
      },
    ],

    featuresTitle: 'Built to play alongside you',
    features: [
      {
        title: 'Voice questions with F8',
        text: 'Press F8 and speak. Parça photographs only the game window to understand where you are, looks up the answer and speaks it back — talking starts as soon as the first sentence is ready.',
      },
      {
        title: 'Personal notes with F6',
        text: 'Say “my base is behind the waterfall”. It reads the note back and only saves it after your clear “yes” — then remembers it for you later.',
      },
      {
        title: 'Works on controller',
        text: 'Holding BACK + LB on the controller does the same as F8. No keyboard nearby, no problem.',
      },
      {
        title: 'Interrupt freely',
        text: 'Pressed F8 or F6 mid-sentence? It stops immediately and listens to your next command.',
      },
      {
        title: '“Thanks, Parça”',
        text: 'Say “thanks” and it politely wraps up the conversation. That simple.',
      },
      {
        title: 'Knows which game it is',
        text: 'It recognizes the game on its own — from its own list, plus the game names in your Steam and Epic libraries. If it can’t tell, it asks you which game it is.',
      },
      {
        title: 'A real PC app',
        text: 'Main window, Windows tray icon, pause, settings and quit. The way a PC app should be.',
      },
      {
        title: '5 voices, 2 languages',
        text: 'Raquel and Yuri in Portuguese; Lily, Ivanna and Hale in English. The language you pick is the language of the whole conversation.',
      },
    ],

    seesTitle: 'What Parça sees — and what it doesn’t',
    seesYesTitle: 'It sees (only when you call it)',
    seesYes: [
      'Your spoken question, when you press F8 or F6',
      'A picture of just the game window, at that moment',
      'The game’s name — from its own list or your Steam and Epic libraries',
    ],
    seesNoTitle: 'It doesn’t see — and doesn’t do',
    seesNo: [
      'Never the whole screen: only the game window, and only when you ask',
      'Doesn’t read or modify the game’s files or memory — it’s not a cheat',
      'Your notes stay on your account only; nobody else sees them',
    ],
    anticheatTitle: 'What about bans?',
    anticheat:
      'It doesn’t touch the game: it only listens to its own hotkeys and looks at the screen, like a friend watching over your shoulder. Even so, we can’t promise no anti-cheat system will ever flag it — what we can say is that it doesn’t touch the game’s files or memory.',

    gamesTitle: 'The games it knows well',
    gamesIntro:
      'Parça has hand-built, fact-checked knowledge for eight games. For any other game, it searches the web live — that takes a little longer, and it says it’s searching while it works.',
    curatedTitle: 'Deep knowledge',
    curated: [
      { name: 'Minecraft', note: 'by far the deepest: biomes, the Nether, the End, survival, building and exploring' },
      { name: 'The Witcher 3: Wild Hunt', note: '' },
      { name: 'Elden Ring', note: '' },
      { name: 'Cyberpunk 2077', note: '' },
      { name: 'Red Dead Redemption 2', note: '' },
      { name: 'God of War (2018)', note: '' },
      { name: 'God of War Ragnarök', note: '' },
      { name: 'Disco Elysium', note: '' },
    ],
    othersTitle: 'What about other games?',
    othersText:
      'For any other game it answers by searching the web live. Those answers take a little longer — and it says it’s searching while it works. No “knows every game” talk: the deep, fact-checked knowledge is these eight.',

    storyTitle: 'Stories deserve respect',
    storyIntro:
      'The Witcher 3, Cyberpunk 2077, Red Dead Redemption 2, Disco Elysium, both God of War games — and Elden Ring, for its lore and endings — are games where the story IS the experience. A companion must not ruin that.',
    storyCarefulTitle: 'Spoiler-careful by default',
    storyCareful:
      'Parça helps with where to go, how to beat something and what a choice affects — without revealing how quests or the story end, who lives or dies, or which ending you’ll get.',
    storyChecks:
      'Every answer passes through two separate spoiler checks before it is spoken.',
    storyHonest:
      'That’s careful by design, not a promise: we can’t guarantee it will never spoil anything.',
    storyOverrideTitle: 'Want the full details?',
    storyOverride:
      'Just ask — “tell me everything” in English — and from then on it answers openly for that game.',
    storyMinecraftTitle: 'The contrast: Minecraft',
    storyMinecraft:
      'Minecraft is a sandbox: survival, building and exploring. There the help is direct, with no spoiler filter.',

    voicesTitle: 'Five voices',
    voicesIntro:
      'Pick who talks to you. The language you pick is the language of the whole conversation: it understands you and answers in that language.',
    voices: [
      { name: 'Raquel', tag: 'Portuguese', desc: 'Voice in Brazilian Portuguese.', file: 'raquel' },
      { name: 'Yuri', tag: 'Portuguese', desc: 'Voice in Brazilian Portuguese.', file: 'yuri' },
      { name: 'Lily', tag: 'English · British', desc: 'English voice with a British accent.', file: 'lily' },
      { name: 'Ivanna', tag: 'English · American', desc: 'English voice with an American accent.', file: 'ivanna' },
      { name: 'Hale', tag: 'English · American', desc: 'English voice with an American accent.', file: 'hale' },
    ],
    sampleLabel: 'Play sample',

    ctaTitle: 'Come play together?',
    ctaText: 'Parça is in closed beta. Request your invite and test it with us.',
    ctaButton: 'Request a beta invite',
  },

  download: {
    title: 'Download Parça — start playing together',
    description:
      'Download the Parça installer for Windows 10/11. Requirements, the SmartScreen warning and tips for smooth play.',
    h1: 'Download Parça',
    intro:
      'Parça is in closed beta: you need a tester token to use it. If you already have yours, download and install below.',
    reqTitle: 'What you need',
    reqs: [
      'Windows 10 or 11',
      'A microphone',
      'An internet connection',
    ],
    installerTitle: 'Installer',
    installerText:
      'A single file, Parca-Setup.exe (about 70 MB), straight from the releases page on GitHub. Installing takes under a minute — and updates install themselves.',
    installerButton: 'Download the installer',
    installerNote: 'Parca-Setup.exe · Windows 10/11',
    stepsTitle: 'How to install',
    steps: [
      'Download and open Parca-Setup.exe.',
      'If Windows shows its protection warning, follow the step below — that’s where most people get stuck.',
      'Tick the desktop icon checkbox if you want it. No administrator password needed.',
      'Parça opens and asks for your tester token. Done.',
    ],
    oldInstallerNote:
      'Used the old installer? Just run the new one over it — your token and settings are kept.',
    uninstallNote:
      'To uninstall: Windows Settings → Apps → Parça, like any other app.',
    smartscreenTitle: 'Windows showed a warning?',
    smartscreen:
      'The program isn’t signed yet, so Windows may say “Windows protected your PC”. Click “More info” and then “Run anyway”.',
    tipsTitle: 'Tips for smooth play',
    tips: [
      'Play in borderless (windowed fullscreen) mode: it works best.',
      'If the game runs as administrator, Parça must run as administrator too — it detects that and offers a one-click relaunch.',
      'Hit F8 by accident? Press it again to interrupt and keep playing.',
    ],
  },

  faq: {
    title: 'FAQ — Parça questions, answered',
    description:
      'Is it free? Does it work on consoles? Which languages? Parça answers: beta pricing, languages, anti-cheat and screen privacy.',
    h1: 'Frequently asked questions',
    items: [
      {
        q: 'Is it free?',
        a: 'Yes — free during the closed beta. Each tester gets a daily allowance of questions (currently 400 per day).',
      },
      {
        q: 'Does it work on consoles?',
        a: 'Not yet. A phone version for console streamers who stream on Twitch is in early testing — coming later.',
      },
      {
        q: 'Which languages does it speak?',
        a: 'Portuguese and English. Five voices: Raquel and Yuri in Portuguese; Lily (British), Ivanna (American) and Hale (American) in English. The language you pick is the language of the whole conversation.',
      },
      {
        q: 'Will I get banned?',
        a: 'Parça is not a cheat: it doesn’t read or modify the game’s files or memory — it only listens to its own hotkeys and looks at the screen, like a friend watching over your shoulder. Even so, we can’t promise no anti-cheat system will ever flag it.',
      },
      {
        q: 'Does it see my screen?',
        a: 'Only the game window — and only when you press F8 or F6 to ask. Never the whole screen, never at any other time.',
      },
    ],
  },

  privacy: {
    title: 'Privacy — Parça',
    description: 'Draft of Parça’s privacy policy: what gets sent, where it goes, and what never happens.',
    h1: 'Privacy',
    draftTitle: 'Draft — pending review',
    draftText:
      'This text is a draft for the owner to review with a lawyer before publishing. It is not the final policy.',
    intro:
      'What Parça does with your voice, the game screenshot and your notes — just the facts, no waffle:',
    points: [
      'Only when you press F8 or F6, Parça sends that one voice recording and a picture of the game window to the Parça server in São Paulo, Brazil.',
      'The server uses third-party AI services to process it: ElevenLabs (speech-to-text and the voice), Moonshot AI’s Kimi (understanding the question, reading the screenshot, writing the answer, web search) and TypeSafe (the spoiler check).',
      'Notes you save with F6 are stored on the server for your account only and are never shown to other players.',
      'Usage records count questions per tester per day and record which game was asked about. They do not store the question text.',
      'There are no ads, and the software does not sell data.',
    ],
    outro:
      'This site uses no trackers, no analytics and no cookies.',
  },

  about: {
    title: 'About Parça — request your beta invite',
    description:
      'What Parça is and how to request an invite to the closed beta. Form coming soon — no data is collected for now.',
    h1: 'About Parça',
    aboutText:
      'Parça is a voice-driven gaming companion for Windows PC, made in Brazil. “Parça” is Brazilian slang for buddy or pal — and that’s exactly the spirit: a buddy next to you while you play, answering without you ever leaving the controller.',
    formTitle: 'Request a beta invite',
    formDraftTitle: 'Form not active yet',
    formDraftText:
      'The contact email is set (contato@parcaplay.com), but the form submission backend isn’t. So the form below stays disabled and no data is collected for now.',
    formName: 'Name',
    formEmail: 'Email',
    formGame: 'Your favorite game right now? (optional)',
    formWhy: 'Why do you want to test Parça? (optional)',
    formSubmit: 'Send request',
    formTodo: 'TODO: decide the form destination (provider) and approve the privacy text before enabling.',
    contactTitle: 'Prefer email?',
    contactText: 'Email us — that’s how the waitlist works for now:',
    contactCta: 'I want beta access',
    contactSubject: 'I want Parça beta access',
    contactEmail: 'contato@parcaplay.com',
  },

  news: {
    title: 'News — what changed in Parça',
    description:
      'Parça’s changelog in player language: each beta version, what changed and what it means for you. With RSS feed.',
    h1: 'News',
    intro:
      'What changed in Parça, in player language — no dev jargon. Subscribe to the RSS feed to follow along.',
    rssLabel: 'RSS feed',
    backToNews: '← All news',
    publishedOn: 'Published on',
  },
};
