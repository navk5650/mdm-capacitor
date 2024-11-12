(function (core) {
    'use strict';

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

})(capacitorExports);
//# sourceMappingURL=plugin.js.map
