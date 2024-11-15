import { WebPlugin } from '@capacitor/core';
import type { AppConfigPlugin } from './definitions';
export declare class AppConfigPluginWeb extends WebPlugin implements AppConfigPlugin {
    getValue(options: {
        key: string;
    }): Promise<{
        value: string;
    }>;
}
