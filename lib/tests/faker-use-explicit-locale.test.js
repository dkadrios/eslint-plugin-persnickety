const eslint = require('eslint')
const rule = require('../rules/faker-use-explicit-locale')

const ruleTester = new eslint.RuleTester({
  parserOptions: { sourceType: 'module', ecmaVersion: 6 },
})
ruleTester.run('faker-use-explicit-locale', rule, {
  valid: [
    "import { lorem } from 'faker/locale/en'",
    "import { random } from 'faker/locale/en'",
    "import { datatype, random } from 'faker/locale/en'",
  ],
  invalid: [
    {
      code: "import { lorem } from 'faker'",
      errors: [
        {
          message:
            'Explicitly import from a faker locale, rather than including them all.',
        },
      ],
      output: "import { lorem } from 'faker/locale/en'",
    },
    {
      code: "import { random } from 'faker'",
      errors: [
        {
          message:
            'Explicitly import from a faker locale, rather than including them all.',
        },
      ],
      output: "import { random } from 'faker/locale/en'",
    },
    {
      code: "import { datatype, random } from 'faker'",
      errors: [
        {
          message:
            'Explicitly import from a faker locale, rather than including them all.',
        },
      ],
      output: "import { datatype, random } from 'faker/locale/en'",
    },
  ],
})
