import { createTranslationRef } from '@backstage/core-plugin-api/alpha';

export const i18nExampleFrontendTranslationRef = createTranslationRef({
  id: 'plugin.i18n-example-frontend',
  messages: {
    'A description of your plugin goes here.':
      'A description of your plugin goes here.',
    'All content should be wrapped in a card like this.':
      'All content should be wrapped in a card like this.',
    'Information card': 'Information card',
    Lifecycle: 'Lifecycle',
    Owner: 'Owner',
    'Plugin title': 'Plugin title',
    'Welcome to {{appName}}': 'Welcome to {{appName}}',
  },
});
