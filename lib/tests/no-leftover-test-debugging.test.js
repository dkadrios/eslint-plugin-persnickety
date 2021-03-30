const eslint = require('eslint')
const rule = require('../rules/no-leftover-test-debugging')

const ruleTester = new eslint.RuleTester({
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
  },
})
ruleTester.run('no-leftover-test-debugging', rule, {
  valid: [
    `it('dfsdfsdfsdf', () => {
    })

    const myFunc = () => {}

    describe('dfsdfsdfsdf', () => {
    })`,
  ],
  invalid: [
    {
      code: `fit('dfsdfsdfsdf', () => {
            })

            xdescribe('dfsdfsdfsdf', () => {
            })`,
      errors: [
        {
          message: 'Remove fit before committing',
        },
        {
          message: 'Remove xdescribe before committing',
        },
      ],
    },
  ],
})
