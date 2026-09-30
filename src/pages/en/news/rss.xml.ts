import rss from '@astrojs/rss';
import { getNews, postPath } from '../../../lib/news';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getNews('en');
  return rss({
    title: 'Parça — News',
    description:
      'What changed in Parça, in player language — no dev jargon.',
    site: context.site ?? 'https://parcaplay.com',
    items: posts.map((post) => ({
      title: post.data.title,
      // Dates are in Brasília time (UTC-3); publish at local noon.
      pubDate: new Date(`${post.data.date}T12:00:00-03:00`),
      description: post.data.summary,
      link: postPath(post, 'en'),
    })),
    customData: '<language>en</language>',
  });
}
