module.exports = {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
        '@babel/plugin-proposal-export-default-from',
        '@babel/plugin-proposal-class-properties',
        ['@babel/plugin-transform-runtime', { regenerator: true }],
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        [
            'import',
            {
                libraryName: 'antd',
                style: true,
                libraryDirectory: 'lib'
            }
        ]
    ]
};
