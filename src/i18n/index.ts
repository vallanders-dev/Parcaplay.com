// i18n helpers: language type, route pairs (pt <-> en), dictionary picker.
export type Lang = 'pt' | 'en';

export const routePairs: Record<string, { pt: string; en: string }> = {
  home: { pt: '/', en: '/en/' },
  news: { pt: '/novidades/', en: '/en/news/' },
  download: { pt: '/baixar/', en: '/en/download/' },
  faq: { pt: '/faq/', en: '/en/faq/' },
  privacy: { pt: '/privacidade/', en: '/en/privacy/' },
  about: { pt: '/sobre/', en: '/en/about/' },
};

export function otherLangPath(page: string, lang: Lang): string {
  const pair = routePairs[page];
  if (!pair) return lang === 'pt' ? '/en/' : '/';
  return lang === 'pt' ? pair.en : pair.pt;
}

export function pagePath(page: string, lang: Lang): string {
  const pair = routePairs[page];
  if (!pair) return '/';
  return lang === 'pt' ? pair.pt : pair.en;
}
