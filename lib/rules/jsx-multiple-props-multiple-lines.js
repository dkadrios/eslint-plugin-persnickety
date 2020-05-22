'use strict'

module.exports = {
  meta: {
    type: 'layout',
    schema: [],
    fixable: 'code',
  },

  create(context) {
    const handleElement = (node) => {
      if (
        node.attributes.length > 1 &&
        node.loc.start.line === node.attributes[0].loc.start.line
      ) {
        context.report({
          node: node,
          loc: node.loc.start,
          message:
            'When a component has a more than one prop, each must appear on their own line.',
          fix: (fixer) => fixer.insertTextBefore(node.attributes[0], '\n'),
        })
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
