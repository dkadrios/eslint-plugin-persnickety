const eslint = require('eslint')
const rule = require('../rules/jsx-multiple-props-multiple-lines')

const ruleTester = new eslint.RuleTester({
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  },
})
ruleTester.run('jsx-multiple-props-multiple-lines', rule, {
  valid: [
    `<span style={{}}>
      Label
    </span>`,

    `<span style={{}}>Label</span>`,

    `<div style={{}} />`,

    `<Provider
      value={{
        opened,
        toggleDisplay,
        Renderer,
      }}
    >
      {children}
    </Provider>`,

    `<Slider
      defaultValue={25}
      thin
      thumb="round"
    />`,
  ],
  invalid: [
    {
      code: `<Slider defaultValue={25}
        thin
        thumb="round"
      />`,
      errors: [
        {
          message:
            'When a component has a more than one prop, each must appear on their own line.',
        },
      ],
    },
  ],
})
