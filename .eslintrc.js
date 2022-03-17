module.exports = {
  env: {
    browser: true,
    es2021: true,
    'vue/setup-compiler-macros': true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    'vue/html-self-closing': ['error', {
      html: {
        void: 'any',
        normal: 'any',
        component: 'any'
      },
      svg: 'always',
      math: 'always'
    }],
    'vue/multi-word-component-names': 'off'
  },
  overrides: [
    {
      files: ['src/api/**/*.ts', 'src/types/**/*.ts'],
      rules: {
        camelcase: 'off'
      }
    }
  ]
}
