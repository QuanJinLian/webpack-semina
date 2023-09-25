module.exports = class MyPlugin {
  constructor(name = "name") {
    this.name = name;
  }
  apply(compiler) {
    // 여기에 콜백 함수 등록
    compiler.hooks.done.tap("MyPlugin-done", function (compilation) {
      //이벤트 처리 함수
      console.log("컴파일 완성 - ", compilation);
      console.log("컴파일 완성 - ", this.name);
    });
  }
};
