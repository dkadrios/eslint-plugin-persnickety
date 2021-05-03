const eslint = require('eslint')
const rule = require('../rules/use-pinnable-methods')

const ruleTester = new eslint.RuleTester({
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
  },
})
ruleTester.run('use-pinnable-methods', rule, {
  valid: [
    `
    import { createElement, useEffect } from 'react'
    import { addons } from '@storybook/addons'
    import { CHANNEL_NAME } from './themePicker'

    const Decorator = ({ children, ...rest }) => {
      useEffect(() => {
        const handleChange = (name) => {
          // changeTheme(user, name)
          localStorage.setItem('theme', name)
        }
        addons.getChannel().addListener(CHANNEL_NAME, handleChange)

        return () => {
          addons.getChannel().removeListener(CHANNEL_NAME, handleChange)
        }
      }, [])

      return createElement(
        'div',
        rest,
        createElement('div', {}, children),
      )
    }

    export default Decorator
    `,
  ],
  invalid: [
    {
      code: 'document.location = "something"',
      errors: [
        {
          message:
            'Do not assign to `window|document.location`.  Use `{ navigate } = useNavigation()` instead.',
        },
      ],
    },
    {
      code: 'window.location = "something"',
      errors: [
        {
          message:
            'Do not assign to `window|document.location`.  Use `{ navigate } = useNavigation()` instead.',
        },
      ],
    },
    {
      code: 'window.document.location = "something"',
      errors: [
        {
          message:
            'Do not assign to `window|document.location`.  Use `{ navigate } = useNavigation()` instead.',
        },
      ],
    },
    {
      code: 'page1.window.document.location.replace("something")',
      errors: [
        {
          message:
            'Do not use location methods.  Use `{ navigate } = useNavigation()` or dispatch a `redirect` action instead.',
        },
      ],
    },
    {
      code: 'page1.window.document.location.assign("something")',
      errors: [
        {
          message:
            'Do not use location methods.  Use `{ navigate } = useNavigation()` or dispatch a `redirect` action instead.',
        },
      ],
    },
    {
      code: 'history.push("something")',
      errors: [
        {
          message:
            'Do not use history methods.  Use `{ navigate } = useNavigation()` or dispatch a `redirect` action instead.',
        },
      ],
    },
    {
      code: 'history.replace("something")',
      errors: [
        {
          message:
            'Do not use history methods.  Use `{ navigate } = useNavigation()` or dispatch a `redirect` action instead.',
        },
      ],
    },
  ],
})
