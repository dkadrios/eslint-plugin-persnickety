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
          node,
          message: `Use <Headline /> tag instead of <${node.name.name} />`,
        })
      }
    }

    return {
      JSXOpeningElement: handleElement,
    }
  },
}
