import { createTranslationRef } from '@backstage/core-plugin-api/alpha';

import messages from './locales/app/en.json';

export const appTranslationRef = createTranslationRef({
  id: 'plugin.i18n-example-frontend',
  messages,
  translations: {
    default: async () => await import('./locales/app/en.json'),
    de: async () => await import('./locales/app/de.json'),
  },
});
