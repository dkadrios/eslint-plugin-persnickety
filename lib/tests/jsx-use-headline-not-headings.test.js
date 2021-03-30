const eslint = require('eslint')
const rule = require('../rules/jsx-use-headline-not-headings')

const ruleTester = new eslint.RuleTester({
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  },
})
ruleTester.run('jsx-use-headline-not-headings', rule, {
  valid: [
    `<div>
      some text
      <Headline>headline</Headline>
      <H3>custom h3</H3>
    </div>`,
  ],
  invalid: [
    {
      code: `<div>
              some text
              <Headline>headline</Headline>
              <h1>no h1s</h1>
              <h2>no h2s</h2>
            </div>`,
      errors: [
        {
          message: 'Use the <Headline /> tag instead of <h# />',
        },
        {
          message: 'Use the <Headline /> tag instead of <h# />',
        },
      ],
    },
  ],
})
