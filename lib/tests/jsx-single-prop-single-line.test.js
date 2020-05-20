const eslint = require('eslint')
const rule = require('../rules/jsx-single-prop-single-line')

const ruleTester = new eslint.RuleTester({
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  },
})
ruleTester.run('jsx-single-prop-single-line', rule, {
  valid: [
    `<span style={{}}>
      Label
    </span>`,
    `<span style={{}}>Label</span>`,
    `<div style={{}} />`,
  ],
  invalid: [
    {
      code: `<span
        style={{}}
      >
        Label
      </span>`,
      errors: [
        {
          message:
            'When a component has a single prop, it must appear on the same line as the opening tag.',
        },
      ],
    },
    {
      code: `<span
        style={{}}>
        Label
      </span>`,
      errors: [
        {
          message:
            'When a component has a single prop, it must appear on the same line as the opening tag.',
        },
      ],
    },
  ],
})
