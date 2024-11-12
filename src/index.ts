import { registerPlugin } from '@capacitor/core';

import type { AppConfigPluginPlugin } from './definitions';

const AppConfigPlugin = registerPlugin<AppConfigPluginPlugin>('AppConfigPlugin', {
  web: () => import('./web').then((m) => new m.AppConfigPluginWeb()),
});

export * from './definitions';
export { AppConfigPlugin };
