import { createTranslationRef } from '@backstage/core-plugin-api/alpha';

import messages from './locales/app/en.json';

export const appTranslationRef = createTranslationRef({
  id: 'app-translations',
  messages,
  translations: {
    default: async () => await import('./locales/app/en.json'),
    de: async () => await import('./locales/app/de.json'),
  },
});
