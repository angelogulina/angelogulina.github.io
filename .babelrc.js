module.exports = {
    plugins: ['@babel/plugin-proposal-export-default-from'],
    presets: [
        [
            'babel-preset-gatsby',
            {
                targets: {
                    browsers: ['>0.25%', 'not dead'],
                },
            },
        ],
    ],
};
