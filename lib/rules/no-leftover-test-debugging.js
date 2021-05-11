'use strict'

module.exports = {
  meta: {
    type: 'layout',
    schema: [],
  },

  create(context) {
    const handleStatement = (node) => {
      if (['fdescribe', 'fit', 'xdescribe', 'xit'].includes(node.name)) {
        context.report({
          node: node,
          message: `Remove ${node.name} before committing`,
        })
      }
    }

    return {
      Identifier: handleStatement,
    }
  },
}
