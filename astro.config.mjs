// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  adapter: netlify({
    devFeatures: {
      edgeFunctions: false,
    },
  }),
  // URLs do site legado (HTML estático) redirecionadas para as novas rotas.
  redirects: {
    '/home.html': '/',
    '/activity.html': '/aulas/4',
    '/activity2.html': '/aulas/5',
    '/activity3.html': '/aulas/6',
    '/activity4.html': '/aulas/7',
    '/activity5.html': '/aulas/8',
    '/activity6.html': '/aulas/9',
  },
});