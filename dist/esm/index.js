import { registerPlugin } from '@capacitor/core';
const AppConfigPlugin = registerPlugin('AppConfigPlugin', {
    web: () => import('./web').then((m) => new m.AppConfigPluginWeb()),
});
export * from './definitions';
//# sourceMappingURL=index.js.map