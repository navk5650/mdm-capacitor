'use strict';

var core = require('@capacitor/core');

core.registerPlugin('AppConfigPlugin', {
    web: () => Promise.resolve().then(function () { return web; }).then((m) => new m.AppConfigPluginWeb()),
});

class AppConfigPluginWeb extends core.WebPlugin {
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AppConfigPluginWeb: AppConfigPluginWeb
});
//# sourceMappingURL=plugin.cjs.js.map
