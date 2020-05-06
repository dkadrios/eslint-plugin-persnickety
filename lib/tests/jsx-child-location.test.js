const eslint = require('eslint')
const rule = require('../rules/jsx-child-location')

const ruleTester = new eslint.RuleTester({
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  },
})
ruleTester.run('jsx-child-location', rule, {
  valid: [
    `<button
  data-next-button
  type="button"
>
  Label
</button>`,
    `<button
data-next-button
type="button"
>
  <span>Label</span>
</button>`,
  ],
  invalid: [
    {
      code: `<button
  data-next-button
  type="button"
><span>Label</span>
</button>`,
      errors: [
        {
          message:
            'Child nodes should be on their own lines when contained in a parent with more than one prop.',
        },
      ],
    },
    {
      code: `<button
  data-next-button
  type="button"
>   <span>Label</span>
</button>`,
      errors: [
        {
          message:
            'Child nodes should be on their own lines when contained in a parent with more than one prop.',
        },
      ],
    },
    {
      code: `<button
  data-next-button
  type="button"
>Label
</button>`,
      errors: [
        {
          message:
            'Child nodes should be on their own lines when contained in a parent with more than one prop.',
        },
      ],
    },
    {
      code: `<button
  data-next-button
  type="button"
>  Label
</button>`,
      errors: [
        {
          message:
            'Child nodes should be on their own lines when contained in a parent with more than one prop.',
        },
      ],
    },
  ],
})
