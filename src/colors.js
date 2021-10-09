/**
 * Default colors for all supported value types
 */
module.exports = {
  base: noColor,
  date: noColor,
  error: noColor,
  fn: noColor,
  symbol: noColor,
  string: noColor,
  number: noColor,
  boolean: noColor,
  null: noColor,
  undefined: noColor,
};

/**
 * @params {string}
 * @returns {string}
 */
function noColor (value) {
  return value;
}
