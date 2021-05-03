const eslint = require('eslint')
const rule = require('../rules/use-pinnable-components')

const ruleTester = new eslint.RuleTester({
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
  },
})

ruleTester.run('no-importing-styles', rule, {
  valid: [
    "import Route from 'routing/Route'",
    "import Link from 'common/navigation/links/Link'",
    "import Redirect from 'common/navigation/links/Redirect'",
  ],
  invalid: [
    {
      code: "import Link from '@material-ui/core/Link'",
      errors: [
        {
          message:
            "Don't use Link from material-ui, use common/navigation/links/Link instead.",
        },
      ],
    },
    {
      code: "import { NavLink } from 'react-router-dom'",
      errors: [
        {
          message:
            "Don't use NavLink from react-router-dom, use common/navigation/links/Link instead.",
        },
      ],
    },
    {
      code: "import { Link } from 'react-router-dom'",
      errors: [
        {
          message:
            "Don't use Link from react-router-dom, use common/navigation/links/Link instead.",
        },
      ],
    },
    {
      code: "import { Route } from 'react-router-dom'",
      errors: [
        {
          message:
            "Don't use Route from react-router-dom, use routing/Route instead.",
        },
      ],
    },
    {
      code: "import { Redirect } from 'react-router-dom'",
      errors: [
        {
          message:
            "Don't use Redirect from react-router-dom, use common/navigation/links/Redirect instead.",
        },
      ],
    },
    {
      code: "import { SomethingElse, Link, Redirect } from 'react-router-dom'",
      errors: [
        {
          message:
            "Don't use Link from react-router-dom, use common/navigation/links/Link instead.",
        },
      ],
    },
  ],
})
