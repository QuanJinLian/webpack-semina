# 기타 디테일 설정 {ignore}

[toc]

## context

```js
context: path.resolve(__dirname, "app");
```

이 구성은 entry 및 loaders의 분석에 영향을 미치며, entry 및 loaders의 상대 경로는 context 설정을 기반으로 하므로 구성이 CWD(current working directory )와 독립적입니다.

## output

### library

```js
library: "abc";
```

이렇게 하면 패키지 결과에서 자체 실행 함수의 결과를 abc에 노출합니다.

### libraryTarget

```js
libraryTarget: "var";
```

이 설정은 패키지의 export한 결과가 노출되는 방식을 보다 세밀하게 제어할 수 있습니다.

사용 가능한 다른 값은 다음과 같습니다.

- var: 기본값으로, 일반 변수로 노출됩니다.
- window: window의 속성으로 노출합니다.
- this: 속성을 this에 노출합니다.
- global: global에 속성을 노출합니다.
- commonjs: exports에 속성을 노출합니다.
- 기타: https://webpack.js.org/configuration/output/#outputlibrarytarget

## target

```js
target: "web"; // 기본 값
```

패키징된 결과 코드가 최종적으로 실행될 환경을 설정하며, 일반적인 값은 다음과 같습니다.

- web: 패키징된 코드가 웹 환경에서 실행됩니다.
- 노드: 패키징된 코드가 노드 환경에서 실행됩니다.
- 기타: https://webpack.js.org/configuration/target/

## module.noParse

```js
noParse: /jquery/;
```

해당 정규식과 일치하는 모듈 구문을 분석하지 않으며, **빌드 성능**을 개선하기 위해 대규모 단일 모듈 라이브러리를 무시하는 데 자주 사용됩니다.

## resolve

resolve 설정은 주로 모듈 구문 분석 프로세스를 제어하는 데 사용됩니다.

### modules

```js
modules: ["node_modules"]; // 기본 값
```

모듈을 구문 분석할 때 `require("test")`라는 import 문이 발견하면 webpack은 다음 위치에서 종속 모듈을 찾습니다.

1. 현재 디렉토리의 `node_modules` 디렉토리
2. 상위 디렉토리의 `node_modules` 디렉토리
3. ...

### extensions

```js
extensions: [".js", ".json"]; // 기본 값
```

모듈을 구문 분석할 때 `require("test")`와 같은 특정 접미사가 없는 import 문을 만나면 해당 접미사 이름을 차례로 테스트합니다.

- test.js
- test.json

### alias

```js
alias: {
  "@": path.resolve(__dirname, 'src'),
  "_": __dirname
}
```

alias을 사용하면 설정의 키 이름을 import 문에 추가할 수 있습니다(예: `require("@/abc.js")`). 그러면 webpack은 `require(절대 경로의 src + "/abc.js")`로 처리합니다.

소스 코드 구조가 깊고 복잡한 대규모 시스템에서 alias을 사용하면 종속성을 더 쉽게 가져올 수 있습니다.

## externals

```js
externals: {
    jquery: "$",
    lodash: "_"
}
```

설정된 소스 코드를 최종 번들에서 제외합니다.
예: entry 모듈은 다음과 같습니다

```js
//index.js
require("jquery");
require("lodash");
```

생성된 bundle 은：

```js
(function(){
    ...
})({
    "./src/index.js": function(module, exports, __webpack_require__){
        __webpack_require__("jquery")
        __webpack_require__("lodash")
    },
    "jquery": function(module, exports){
        //jquery의 대량 소스 코드
    },
    "lodash": function(module, exports){
        //lodash의 대량 소스 코드
    },
})
```

하지만 위의 externals 설정이 있으면 아래와 같이 됩니다.

```js
(function(){
    ...
})({
    "./src/index.js": function(module, exports, __webpack_require__){
        __webpack_require__("jquery")
        __webpack_require__("lodash")
    },
    "jquery": function(module, exports){
        module.exports = $;
    },
    "lodash": function(module, exports){
        module.exports = _;
    },
})
```

이는 타사 라이브러리를 외부 CDN에서 소싱하는 경우에 더 적합하므로 페이지에서 CDN을 사용할 수 있고 소스 코드에 영향을 주지 않고 번들을 더 작게 만들 수 있습니다.

## stats

stats는 빌드 프로세스 중 콘솔의 출력을 제어합니다.
