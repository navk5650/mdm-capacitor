'use strict';

var core = require('@capacitor/core');

core.registerPlugin('AppConfigPlugin', {
    web: () => Promise.resolve().then(function () { return web; }).then((m) => new m.AppConfigPluginWeb()),
});

class AppConfigPluginWeb extends core.WebPlugin {
    async getValue(options) {
        // Returning an object with a `value` key to match the expected return type
        return { value: options.key };
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AppConfigPluginWeb: AppConfigPluginWeb
});
//# sourceMappingURL=plugin.cjs.js.map
