var loaderUtil = require("loader-utils");

function loader(buffer) {
  // buffer 받음
  console.log("파일 데이터 크기: (바이트)", buffer.byteLength);
  var { limit = 1000, filename = "[contenthash].[ext]" } =
    loaderUtil.getOptions(this);


    
  if (buffer.byteLength >= limit) {
    var content = getFilePath.call(this, buffer, filename);
  } else {
    var content = getBase64(buffer);
  }
  return `module.exports = \`${content}\``;
}

loader.raw = true; // 이 loader는 원시 데이터를 처리하기 위한 것입니다.

module.exports = loader;

function getBase64(buffer) {
  return "data:image/png;base64," + buffer.toString("base64");
}

function getFilePath(buffer, name) {
  var filename = loaderUtil.interpolateName(this, name, {
    content: buffer,
  });
  this.emitFile(filename, buffer);
  return filename;
}
