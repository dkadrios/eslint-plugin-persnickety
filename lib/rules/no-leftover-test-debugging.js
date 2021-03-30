'use strict'

module.exports = {
  meta: {
    type: 'layout',
    schema: [],
  },

  create(context) {
    const handleStatement = (node) => {
      if (node.expression.callee) {
        const name = node.expression.callee.name
        if (['fdescribe', 'fit', 'xdescribe', 'xit'].includes(name)) {
          context.report({
            node: node,
            message: `Remove ${name} before committing`,
          })
        }
      }
    }

    return {
      ExpressionStatement: handleStatement,
    }
  },
}
