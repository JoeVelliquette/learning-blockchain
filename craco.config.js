const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    modifyVars: {
                        '@primary-color': '#1DA57A',
                        '@layout-body-background': '#f9f9f9',
                    },
                    javascriptEnabled: true,
                },
            },
        },
    ],
};
