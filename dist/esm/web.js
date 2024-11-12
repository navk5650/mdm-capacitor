import { WebPlugin } from '@capacitor/core';
export class AppConfigPluginWeb extends WebPlugin {
    async getValue(options) {
        // Returning an object with a `value` key to match the expected return type
        return { value: options.key };
    }
}
//# sourceMappingURL=web.js.map