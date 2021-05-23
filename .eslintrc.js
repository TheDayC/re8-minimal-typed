module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:import/errors', 'plugin:import/warnings', 'plugin:import/typescript', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: ['react', '@typescript-eslint', 'import'],
    ignorePatterns: ['tsconfig.json', 'yarn.lock', 'README.md', 'package.json', '.gitignore', 'eslintrc.js', '.eslintcache'],
    rules: {
        'linebreak-style': ['error', 'unix'],
        '@typescript-eslint/typedef': [
            'error',
            {
                arrowParameter: false,
                parameter: true,
                propertyDeclaration: true,
                memberVariableDeclaration: true,
                variableDeclarationIgnoreFunction: true
            }
        ],
        '@typescript-eslint/explicit-module-boundary-types': [
            'error',
            {
                allowDirectConstAssertionInArrowFunctions: true
            }
        ],
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        'react/prop-types': 0,
        'import/order': [
            'error',
            {
                groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index'], 'object']
            }
        ],
        'comma-dangle': ['error', 'never']
    },
    settings: {
        react: {
            version: '17.0.1'
        }
    }
};
