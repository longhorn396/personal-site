import js from '@eslint/js'
import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import prettierPlugin from 'eslint-plugin-prettier/recommended'

export default defineConfig([
  js.configs.recommended,
  ...nextTs,
  ...nextVitals,
  prettierPlugin,
  {
    rules: {
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: false,
          printWidth: 120,
        },
      ],
      '@next/next/no-html-link-for-pages': 'off',
      'react-hooks/rules-of-hooks': 'off',
      'import/no-anonymous-default-export': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      'sort-imports': [
        'error',
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
        },
      ],
      // 'import/order': [
      //   1,
      //   {
      //     groups: ['external', 'builtin', 'internal', 'sibling', 'parent', 'index'],
      //     pathGroups: [
      //       {
      //         pattern: 'env',
      //         group: 'internal',
      //       },
      //       {
      //         pattern: 'theme',
      //         group: 'internal',
      //       },
      //       {
      //         pattern: 'public/**',
      //         group: 'internal',
      //         position: 'after',
      //       },
      //     ],
      //     pathGroupsExcludedImportTypes: ['internal'],
      //     alphabetize: {
      //       order: 'asc',
      //       caseInsensitive: true,
      //     },
      //   },
      // ],
      'react-hooks/set-state-in-effect': 'off',
      'no-restricted-imports': [
        'off', // Note: this would increase development loading times if we didn't enable an experimental option in Next's config
        {
          patterns: [{ regex: '^@mui/[^/]+$' }],
        },
      ],
    },
  },
  globalIgnores(['.*/**', 'next-env.d.ts', 'sst-env.d.ts', '']),
])
