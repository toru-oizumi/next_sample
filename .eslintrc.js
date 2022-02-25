module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks', // reactのhooksの設定は別れているので別途入れます
    'plugin:@typescript-eslint/recommended', // typescriptの推奨設定を入れます
    'plugin:@typescript-eslint/recommended-requiring-type-checking', // typescriptの型チェックをします
    'plugin:@next/next/core-web-vitals', // Next.jsとCore Web Vitalsのチェック
    'prettier', // prettierと競合するESLintのルールを無効化します],
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    project: './tsconfig.json', // plugin:@typescript-eslint/recommended-requiring-type-checkingの参照するtsconfig
  },
  plugins: ['react', '@typescript-eslint', 'import'],

  rules: {
    // console.log();OK
    'no-console': 'off',
    // hush no-use-before-define error in "import React from 'react';"
    // see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md#how-to-use
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],

    // omit .ts .tsx in import statement
    // see https://stackoverflow.com/questions/59265981/typescript-eslint-missing-file-extension-ts-import-extensions
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],

    // allow named exports without default export
    'import/prefer-default-export': 'off',

    // allow importing storybooks from devDependencies
    // see https://github.com/storybookjs/storybook/issues/1992#issuecomment-335001056
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['.storybook/**', '**/*.stories.tsx'],
      },
    ],

    // allow jsx in .tsx
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],

    // nextjs does not need React in every file
    'react/react-in-jsx-scope': 'off',

    // use this pattern for default props
    //
    // interface Props {
    //   prop1?: boolean;
    // }
    // const Component1: FC<Props> = ({ prop1 = false }: Props) => (
    //   <Component1 prop1={prop1} />
    // );
    'react/require-default-props': 'off',

    // allow <App {...props} />
    'react/jsx-props-no-spreading': 'off',

    // typescriptと2重になるのでチェックしない
    // 厳密にはチェックした方が良いかもだが
    // https://github.com/Microsoft/TypeScript/issues/4833
    'react/prop-types': 'off',

    // アロー関数だけで事足りるはず
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],

    // Next.js の Link コンポーネント対策
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        aspects: ['invalidHref', 'preferButton'],
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
      },
    ],
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: { order: 'asc', caseInsensitive: true },
        pathGroups: [
          { pattern: 'src/domain/**', group: 'internal', position: 'before' },
          {
            pattern: 'src/application/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'src/interface/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'src/infrastructure/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'src/components/**',
            group: 'internal',
            position: 'before',
          },
          { pattern: 'src/pages/**', group: 'internal', position: 'before' },
          { pattern: 'src/styles/**', group: 'internal', position: 'before' },
          { pattern: 'src/library/**', group: 'internal', position: 'before' },
        ],
      },
    ],
  },
  settings: {
    // typescriptのaliasがエラーにならないように
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
};
