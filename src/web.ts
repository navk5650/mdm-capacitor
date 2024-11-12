import { WebPlugin } from '@capacitor/core';

import type { AppConfigPluginPlugin } from './definitions';

export class AppConfigPluginWeb extends WebPlugin implements AppConfigPluginPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
