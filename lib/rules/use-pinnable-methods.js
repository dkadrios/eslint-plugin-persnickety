'use strict'

const { flattenMemberExpression } = require('./utils')

module.exports = {
  meta: {
    type: 'layout',
    schema: [],
  },

  create(context) {
    const handleStatement = (node) => {
      if (node.expression.type === 'AssignmentExpression') {
        const left = flattenMemberExpression(node.expression.left)
        if (
          left.includes('window.location') ||
          left.includes('document.location')
        ) {
          context.report({
            node: node,
            message:
              'Do not assign to `window|document.location`.  Use `{ navigate } = useNavigation()` instead.',
          })
        }
      } else if (node.expression.type === 'CallExpression') {
        const left = flattenMemberExpression(node.expression.callee)
        if (
          left.includes('location.replace') ||
          left.includes('location.assign')
        ) {
          context.report({
            node: node,
            message:
              'Do not use location methods.  Use `{ navigate } = useNavigation()` or dispatch a `redirect` action instead.',
          })
        }

        if (left.includes('history.push') || left.includes('history.replace')) {
          context.report({
            node: node,
            message:
              'Do not use history methods.  Use `{ navigate } = useNavigation()` or dispatch a `redirect` action instead.',
          })
        }
      }
    }

    return {
      ExpressionStatement: handleStatement,
    }
  },
}
