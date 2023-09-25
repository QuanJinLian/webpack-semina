(function runCore(modules) {
  var moduleExports = {};

  function require(moduleId) {
    if (moduleExports[moduleId]) {
      return moduleExports[moduleId];
    }

    var func = modules[moduleId];
    var module = {
      exports: {},
    };

    func(module, module.exports, require);

    var result = module.exports;
    moduleExports[moduleId] = result;
    return result;
  }

  require("./src/index.js");
})({
  "./src/a.js": function (module, exports) {
    console.log("module a");
    module.exports = "a";
  },

  "./src/index.js": function (module, exports, require) {
    console.log("index module");
    var a = require("./src/a.js"); // 통일된 path로 바꿔 줌
    console.log(a);
  },
});
