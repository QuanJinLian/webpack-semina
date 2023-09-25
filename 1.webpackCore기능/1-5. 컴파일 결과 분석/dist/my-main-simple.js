// 두개의 모듈 merge

// 해당 객체는 모든 모듈 및 모듈내 코드를 저장하는 용도
var modules = {
  "./src/a.js": function (myModule, myExports) {
    console.log("module a");
    myModule.myExports = "a";
  },

  "./src/index.js": function (myModule, myExports, myRequire) { 
      var a = myRequire( "./src/a.js"); 
      console.log("index module");
      a.abc(); // Error날 예정
      console.log(a);
  },
};

var runCore = (modules) => {
  // 모듈 캐시
  var moduleExports = {};

  // require함수 실행은 해당 모듈을 실행하고 export하는 결과물을 얻어내는 것과 같다고 보면 됨
  // entry js파일 실행을 위해 require함수 기능 구현
  function require(moduleId) {
    // 캐시에서 먼저 찾기
    if (moduleExports[moduleId]) {
      return moduleExports[moduleId];
    }

    // moduleId 는 modules의 key 값
    var func = modules[moduleId]; // 해당 모듈의 함수
    var module = {
      exports: {},
    };

    func(module, module.exports, require); //해당 함수 실행 완료후 각 모듈에서 export하는 값은 module.exports에 저장됨

    // module.exports에 저장된 값을 캐시에 저장 하고 해당 값은 return 함
    var result = module.exports;
    moduleExports[moduleId] = result;
    return result;
  }

  // entry js파일 실행
  require("./src/index.js");
};

runCore(modules);
