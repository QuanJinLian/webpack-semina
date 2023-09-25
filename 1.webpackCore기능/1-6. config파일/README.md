# config 파일

웹팩에서 제공하는 CLI는 `--mode`와 같은 많은 매개변수를 지원하지만, 더 유연한 config 파일을 사용하여 웹팩의 동작을 제어하는 경우가 많습니다.

기본적으로 웹팩은 `webpack.config.js` 파일을 config 파일로 읽지만, CLI 파라미터 `--config`를 사용하여 config 파일을 지정할 수 있습니다.

구성 파일은 다양한 웹팩 구성에 해당하는 다양한 속성을 가진 객체를 CommonJS 모듈을 통해 내보냅니다.

**참고: config 파일의 코드는 유효한 노드 코드여야 합니다.**

CLI 매개변수와 config 파일의 구성이 충돌하는 경우 CLI 매개변수가 우선합니다.

**기본 설정：**

1. mode: [default: `production`]컴파일 모드, development 또는 production 값을 취하는 문자열로, 컴파일된 코드가 실행될 환경을 지정하며, 웹팩이 컴파일된 코드의 서식을 처리하는 방식에 영향을 줍니다.
2. entry: [default: `src/index.js`]엔트리, 문자열(나중에 자세히 설명), 엔트리 파일을 지정합니다.
3. output: [default: `src/index.js`]출력, 객체(나중에 자세히 설명), 컴파일 결과 파일을 지정합니다.

**공식 문서：**
[config 설정 관련 문서](https://webpack.js.org/configuration/)
