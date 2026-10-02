import { defineConfig } from 'astro/config';
import { ogImage } from './src/integrations/og-image';

export default defineConfig({
  site: 'https://parcaplay.com',
  integrations: [ogImage()],
  // Static output, no adapters. Deploy dist/ to any static host on apex + www.
  // api.parcaplay.com is the product server and must never be pointed at this site.
  output: 'static',
  // i18n is manual: pt-BR pages at the root (/), English pages under /en/.
  // hreflang + language switch are handled in src/layouts/Base.astro
  // and src/components/Header.astro.
});
