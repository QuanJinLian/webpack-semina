// 이 객체는 경로 처리를 위한 많은 함수를 제공합니다.

var path = require("path"); // 객체를 export합니다.

var result = path.resolve(__dirname, "src");
console.log("result--", result);

var result1 = path.resolve("./", "child", "abc", "123");
console.log("result1--", result1);
