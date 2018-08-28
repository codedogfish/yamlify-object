module.exports = function errorToString (error, prefix) {
  const { stack } = error;

  return stack
    .replace(/(\r\n|\n|\r)\s+/gm, `\n${prefix}`);
};
