module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    '@vue/eslint-config-typescript',
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'standard',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'error',
    'no-unused-vars': 'error',
    'vue/no-v-html': 0
  }
}
