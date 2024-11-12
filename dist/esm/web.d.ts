import { WebPlugin } from '@capacitor/core';
import type { AppConfigPlugin } from './definitions';
export declare class AppConfigPluginWeb extends WebPlugin implements AppConfigPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
