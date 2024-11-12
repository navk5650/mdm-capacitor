import { WebPlugin } from '@capacitor/core';

import type { AppConfigPlugin } from './definitions';

export class AppConfigPluginWeb extends WebPlugin implements AppConfigPlugin {
  async getValue(options: { key: string }): Promise<{ value: string }> {
    // Returning an object with a `value` key to match the expected return type
    return { value: options.key };
  }
}
