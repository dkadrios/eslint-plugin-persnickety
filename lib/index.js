/* eslint-disable global-require */

module.exports.rules = {
  'jsx-child-location': require('./rules/jsx-child-location'),
  'jsx-multiple-props-multiple-lines': require('./rules/jsx-multiple-props-multiple-lines'),
  'jsx-single-prop-single-line': require('./rules/jsx-single-prop-single-line'),
  'jsx-use-headline-not-headings': require('./rules/jsx-use-headline-not-headings'),
  'no-leftover-test-debugging': require('./rules/no-leftover-test-debugging'),
  'use-pinnable-components': require('./rules/use-pinnable-components'),
  'use-pinnable-methods': require('./rules/use-pinnable-methods'),
}
