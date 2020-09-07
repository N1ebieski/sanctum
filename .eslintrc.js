module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        '@nuxtjs',
        'plugin:nuxt/recommended'
    ],
    plugins: [
    ],
    // add your custom rules here
    rules: {
        // 'object-shorthand': ['warn', 'never'],
        'space-before-function-paren': ['error', {
            anonymous: 'always',
            named: 'ignore'
        }],
        indent: ['warn', 4],
        'vue/html-indent': ['warn', 4]
    }
}
