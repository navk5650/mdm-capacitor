import { WebPlugin } from '@capacitor/core';

import type { AppConfigPlugin } from './definitions';

export class AppConfigPluginWeb extends WebPlugin implements AppConfigPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
