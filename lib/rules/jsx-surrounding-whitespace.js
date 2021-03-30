'use strict'

module.exports = {
  meta: {
    type: 'layout',
    fixable: 'code',
    schema: [],
  },

  create(context) {
    const handleElement = (node) => {
      const children = node.children
      let currentIsInline = false
      let previousIsInline = false

      if (!children) {
        return
      }

      // TODO: needs work
      for (let i = 0; i < children.length; i++) {
        currentIsInline = isInline(children[i])
        if (previousIsInline && currentIsInline) {
          context.report({
            node,
            message: ERROR,
          })
          return
        }
        previousIsInline = currentIsInline
      }
    }

    return {
      JSXElement: handleElement,
      // JSXOpeningFragment: handleElement,
      // Literal: handleElement,
      // JSXText: handleElement,
    }
  },
}
