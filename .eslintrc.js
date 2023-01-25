module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    '@vue/eslint-config-typescript',
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'error'
  }
}
