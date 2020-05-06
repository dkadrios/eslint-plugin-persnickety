/* eslint-disable global-require */

module.exports.rules = {
  'docgen-ignore-before-comment': require('./rules/docgen-ignore-before-comment'),
  'no-hardcoded-labels': require('./rules/no-hardcoded-labels'),
  'restricted-path-imports': require('./rules/restricted-path-imports'),
  'tree-shakeable-imports': require('./rules/tree-shakeable-imports'),
  'no-importing-styles': require('./rules/no-importing-styles'),
  'no-importing-act': require('./rules/no-importing-act')
}
