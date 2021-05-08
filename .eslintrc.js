module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        'import/no-unresolved': 'off', // turn off due to false errors caused by webpack aliases
        'react/state-in-constructor': 'off',
        'react/jsx-filename-extension': 'off',
        'react/no-direct-mutation-state': 'error',
        'react/prefer-stateless-function': 'off',
        // 'react/destructuring-assignment': [
        //   'error',
        //   'always',
        //   { ignoreClassFields: true },
        // ],
        // 'no-confusing-arrow': 'off',
        // 'jsx-quotes': ['error', 'prefer-single'],
        // 'arrow-body-style': 'off',
    },
};
