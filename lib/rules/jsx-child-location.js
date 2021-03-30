'use strict'

module.exports = {
  meta: {
    type: 'layout',
    fixable: 'code',
    schema: [],
  },

  create(context) {
    const handleElement = (node) => {
      if (!node.children || !node.children.length) return

      if (node.loc.start.line === node.loc.end.line) return

      if (String(node.children[0].raw).startsWith('\n')) return

      context.report({
        node: node,
        loc: node.loc.start,
        message:
          'Child nodes should be on their own lines when contained in a parent with more than one prop.',
        fix: (fixer) => fixer.insertTextBefore(node.children[0], '\n'),
      })
    }

    return {
      JSXElement: handleElement,
      // JSXOpeningFragment: handleElement,
      // Literal: handleElement,
      // JSXText: handleElement,
    }
  },
}
