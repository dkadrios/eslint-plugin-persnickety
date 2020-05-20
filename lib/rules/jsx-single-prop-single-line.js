'use strict'

const { isMultilineJSX } = require('./utils')

module.exports = {
  meta: {
    type: 'layout',
    schema: [],
  },

  create(context) {
    const handleElement = (node) => {
      if (
        node.attributes.length === 1 &&
        isMultilineJSX(node) &&
        !isMultilineJSX(node.attributes[0])
      ) {
        context.report({
          node: node,
          loc: node.loc.start,
          message:
            'When a component has a single prop, it must appear on the same line as the opening tag.',
        })
        return
      }
    }

    return {
      // JSXElement: handleElement,
      JSXOpeningElement: handleElement,
      // JSXOpeningFragment: handleElement,
      // Literal: handleElement,
      // JSXText: handleElement,
    }
  },
}
