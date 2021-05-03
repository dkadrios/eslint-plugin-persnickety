const last = (A) => A[A.length - 1]

const rules = [
  (folders) => {
    return folders.length > 1 &&
      folders[0] === '@material-ui' &&
      last(folders) === 'Link'
      ? {
          message:
            "Don't use Link from material-ui, use common/navigation/links/Link instead.",
          fixed: "import Link from 'common/navigation/links/Link'",
        }
      : undefined
  },

  (folders, { specifiers }) => {
    if (folders.length === 1 && folders[0] === 'react-router-dom') {
      let result = undefined
      specifiers.find((specifier) => {
        const component = specifier.local.name
        if (component === 'Route') {
          result = {
            message:
              "Don't use Route from react-router-dom, use routing/Route instead.",
            fixed: "import Route from 'routing/Route'",
          }
          return true
        }
        if (component === 'Redirect') {
          result = {
            message:
              "Don't use Redirect from react-router-dom, use common/navigation/links/Redirect instead.",
            fixed: "import Redirect from 'common/navigation/links/Redirect'",
          }
          return true
        }
        if (['NavLink', 'Link'].includes(component)) {
          result = {
            message: `Don't use ${component} from react-router-dom, use common/navigation/links/Link instead.`,
            fixed: "import Link from 'common/navigation/links/Link'",
          }
          return true
        }
      })

      return result
    }
  },
]

module.exports = {
  meta: {
    docs: {},
    fixable: 'code',
    schema: [],
  },

  create: (context) => {
    return {
      ImportDeclaration(node) {
        const { source } = node
        const folders = source.value.split('/')
        const rule = rules.find((check) => check(folders, node))

        if (rule) {
          const { message, fixed } = rule(folders, node)
          context.report({
            node,
            message,
            fix: (fixer) => fixer.replaceText(node, fixed),
          })
        }
      },
    }
  },
}
