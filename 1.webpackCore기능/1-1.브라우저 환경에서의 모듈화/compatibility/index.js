// // CommonJS 모듈 패턴
var fs = require("fs"); //노드에서 제공하는 fs，파일 처리할때 많이 사용
var path = require("path");
var abPath = path.resolve(__dirname, "./test.txt");

var content = fs.readFileSync(abPath, {
  encoding: "utf-8",
});

console.log(content);
