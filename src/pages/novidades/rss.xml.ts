import rss from '@astrojs/rss';
import { getNews, postPath } from '../../lib/news';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getNews('pt');
  return rss({
    title: 'Parça — Novidades',
    description:
      'O que mudou no Parça, em linguagem de jogador — sem jargão de dev.',
    site: context.site ?? 'https://parcaplay.com',
    items: posts.map((post) => ({
      title: post.data.title,
      // Dates are in Brasília time (UTC-3); publish at local noon.
      pubDate: new Date(`${post.data.date}T12:00:00-03:00`),
      description: post.data.summary,
      link: postPath(post, 'pt'),
    })),
    customData: '<language>pt-BR</language>',
  });
}
