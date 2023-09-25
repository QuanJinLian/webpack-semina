module.exports = function (sourceCode) {
  console.log("loader1실행", this.resourcePath.slice(56));
  return sourceCode;
};
