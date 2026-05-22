import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://lt-20260522-042729105-career-portfolio-01-9105-92bdb5ea.pages.dev',
  output: 'static',
  vite: { plugins: [tailwindcss()] },
  integrations: [icon()]
});
