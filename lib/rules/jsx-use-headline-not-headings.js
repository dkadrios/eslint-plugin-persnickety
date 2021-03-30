'use strict'

module.exports = {
  meta: {
    type: 'layout',
    schema: [],
  },

  create(context) {
    const handleElement = (node) => {
      if (/^h[1-6]$/.test(node.name.name)) {
        context.report({
          node: node,
          loc: node.loc.start,
          message: 'Use the <Headline /> tag instead of <h# />',
        })
      }
    }

    return {
      JSXOpeningElement: handleElement,
    }
  },
}
