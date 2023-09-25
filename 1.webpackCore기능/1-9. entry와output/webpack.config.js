var path = require("path");

module.exports = {
  mode: "production",
  entry: {
    main: "./src/index.js", // 속성 key: chunk의 이름, 속성 value: entry 모듈(스타터 모듈)
    a: ["./src/a.js", "./src/index.js"], // 스타터 모듈이 두개
  },
  output: {
    path: path.resolve(__dirname, "target"), // 무조건 절대 경로이여야 하며, 최종 출력 위치를 의미, 기본 값은 dist.
    filename: "[name].[chunkhash:5].js", // 병합된 js파일의 이름 규칙를 설정  
  },
  devtool: "source-map",
};
