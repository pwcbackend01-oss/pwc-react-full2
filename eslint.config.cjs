module.exports = [
  // Ignore build and node modules
  {
    ignores: ["node_modules/**", "dist/**"]
  },
  // Apply to JS/TS and JSX/TSX files
  {
    files: ["**/*.{js,cjs,mjs,ts,cts,mts,jsx,tsx}"],
    languageOptions: {
      parser: require('@typescript-eslint/parser'),
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true }
      }
    },
    plugins: {
      react: require('eslint-plugin-react'),
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin')
    },
    settings: {
      react: { version: 'detect' }
    },
    // Use a minimal rule set; plugins are loaded above. You can extend
    // shareable configs by requiring them and merging if desired.
    rules: {
      'react/react-in-jsx-scope': 'off'
    }
  }
]
