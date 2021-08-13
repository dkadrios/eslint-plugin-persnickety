module.exports = {
  meta: {
    docs: {},
    fixable: 'code',
    schema: [],
  },

  create: (context) => ({
    ImportDeclaration(node) {
      const { source } = node
      const found = source.value === 'faker'
      if (found) {
        context.report({
          node,
          message: `Explicitly import from a faker locale, rather than including them all.`,
          fix: (fixer) => {
            const sourceCode = context.getSourceCode().getText(node)
            return fixer.replaceText(
              node,
              sourceCode.replace("'faker'", "'faker/locale/en'")
            )
          },
        })
      }
    },
  }),
}
