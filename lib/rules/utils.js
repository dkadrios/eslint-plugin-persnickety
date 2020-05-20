function isMultilineJSX(jsxNode) {
  return jsxNode.loc.start.line < jsxNode.loc.end.line
}

module.exports = {
  isMultilineJSX,
}
