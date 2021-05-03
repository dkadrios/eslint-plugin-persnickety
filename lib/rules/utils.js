function flattenMemberExpression(expression) {
  let result = []
  function recurse(exp) {
    if (exp.property) {
      result.push(exp.property.name)
    }

    if (exp.object) {
      if (exp.object.type === 'MemberExpression') {
        recurse(exp.object)
      } else {
        result.push(exp.object.name)
      }
    }
  }
  recurse(expression)
  return result.reverse().join('.')
}

function isMultilineJSX(jsxNode) {
  return jsxNode.loc.start.line < jsxNode.loc.end.line
}

module.exports = {
  flattenMemberExpression,
  isMultilineJSX,
}
