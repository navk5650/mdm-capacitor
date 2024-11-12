import { registerPlugin } from '@capacitor/core';

import type { AppConfigPlugin } from './definitions';

const AppConfigPlugin = registerPlugin<AppConfigPlugin>('AppConfigPlugin', {
  web: () => import('./web').then((m) => new m.AppConfigPluginWeb()),
});

export * from './definitions';
export { AppConfigPlugin };
