module.exports = function (sourceCode) {
  console.log("loader2실행", this.resourcePath.slice(56));
  return sourceCode;
};
