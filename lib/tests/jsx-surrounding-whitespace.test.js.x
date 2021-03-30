const eslint = require('eslint')
const rule = require('../rules/jsx-surrounding-whitespace')

const ruleTester = new eslint.RuleTester({
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  },
})
ruleTester.run('jsx-surrounding-whitespace', rule, {
  valid: [
    `<div>

      <span>test</span>

    </div>`,
    `<div>
      literal
    </div>`,
    `<div>
      {variable}
    </div>`,
  ],
  invalid: [
    {
      code: `<div>

      <span>test</span>

    </div>`,
      errors: [
        {
          message: 'Child nodes must be surrounded by blank lines.',
        },
      ],
    },
  ],
})
