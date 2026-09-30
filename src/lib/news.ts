import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/index';

export type NewsEntry = CollectionEntry<'news'>;

// Posts are stored under src/content/news/pt/... and src/content/news/en/...
export async function getNews(lang: Lang): Promise<NewsEntry[]> {
  const all = await getCollection('news');
  const dir = lang === 'pt' ? 'pt/' : 'en/';
  return all
    .filter((e) => e.id.startsWith(dir))
    .sort((a, b) => {
      const byDate = b.data.date.localeCompare(a.data.date);
      if (byDate !== 0) return byDate;
      // Same day: newest version first, unversioned entries last.
      const va = a.data.version;
      const vb = b.data.version;
      if (!va && !vb) return 0;
      if (!va) return 1;
      if (!vb) return -1;
      return vb.localeCompare(va, undefined, { numeric: true });
    });
}

export function postSlug(entry: NewsEntry): string {
  // id looks like "pt/v0-1-0-a-beta-comeca.md" -> slug "v0-1-0-a-beta-comeca"
  return entry.id.replace(/^(pt|en)\//, '').replace(/\.md$/, '');
}

export function postPath(entry: NewsEntry, lang: Lang): string {
  const slug = postSlug(entry);
  return lang === 'pt' ? `/novidades/${slug}/` : `/en/news/${slug}/`;
}

const MONTHS_PT = [
  'jan.', 'fev.', 'mar.', 'abr.', 'mai.', 'jun.',
  'jul.', 'ago.', 'set.', 'out.', 'nov.', 'dez.',
];
const MONTHS_EN = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

export function formatDate(ymd: string, lang: Lang): string {
  const [y, m, d] = ymd.split('-').map(Number);
  if (lang === 'pt') {
    return `${d} de ${MONTHS_PT[m - 1]} de ${y}`;
  }
  return `${MONTHS_EN[m - 1]} ${d}, ${y}`;
}
