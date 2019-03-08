const postcssPresetEnv = require('postcss-preset-env');
const tailwindcss = require('tailwindcss');
const calc = require("postcss-calc");

module.exports = {
    plugins: [
        postcssPresetEnv({
            stage: 0,
            preserve: false,
            importFrom: 'assets/css/variables.css',
        }),
        calc(),
        tailwindcss('./tailwind.js'),
        require("autoprefixer")
    ]
};
