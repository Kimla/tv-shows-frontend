module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
    extends: ['airbnb', 'plugin:vue/recommended'],
    // required to lint *.vue files
    plugins: ['vue'],
    // add your custom rules here
    rules: {
        indent: ['error', 4],
        'vue/no-v-html': 'off',
        'vue/html-indent': ['error', 4],
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    normal: 'any',
                },
            },
        ],
        'import/no-extraneous-dependencies': [
            'error',
            { devDependencies: true, optionalDependencies: true, peerDependencies: true },
        ],
        'no-plusplus': 'off',
        'linebreak-style': 0,
    },
};
