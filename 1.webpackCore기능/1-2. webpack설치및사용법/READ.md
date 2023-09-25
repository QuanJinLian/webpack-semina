# webpack의 설치 및 사용법 {ignore}

## [toc]

---

> 웹팩 공식 웹사이트: https://webpack.js.org/
> 현재 최신 버전: webpack5

## webpack 소개

webpack은 모든 것을 모듈로 취급하는 모듈 기반 패키징(빌드) 도구임.

dev time의 entry 모듈로 시작하여 모든 종속성을 분석한 다음 일련의 프로세스(압축, 병합)를 거쳐 run time 파일을 생성함.

webpack의 특징

- **프론트엔드 엔지니어링용 제작**: webpack은 프론트엔드 엔지니어링, 특히 브라우저 측 엔지니어링의 문제를 해결하도록 설계되어 개발자는 비즈니스 코드 작성에 집중하고 엔지니어링 프로세스는 webpack에 맡길 수 있음.
- **사용 편의성**: 설정을 하나도 하지 않아도 webpack을 사용할 수 있음.
- **강력한 에코시스템**: webpack은 매우 유연하고 확장성이 뛰어남. webpack 자체에는 많은 기능이 없지만 확장할 수 있는 메커니즘을 제공하여 일부 타사 라이브러리를 webpack에 통합할 수 있음.
- **노드 기반**: webpack은 빌드 프로세스 중에 파일을 읽어야 하므로 노드 환경에서 실행됨.
- **모듈성 기반**: webpack은 모듈 임포트 문을 통해 빌드 프로세스 중 종속성을 분석하며, CommonJS, ES6 모듈을 포함하되 이에 국한되지 않는 다양한 모듈성 표준을 지원함.

## webpack의 설치

설치해야할 lib:

- webpack: webpack 빌드 프로세스에 사용되는 모든 API가 포함된 핵심 패키지임.
- webpack-cli: webpack 코어 패키지의 API를 호출하여 빌드 프로세스를 완료하는 간단한 cli 명령을 제공함.

설치

```shell
  npm i -D webpack webpack-cli
```

## 사용

```shell
webpack
```

기본적으로 웹팩은 `./src/index.js`를 entry 파일로 사용하여 종속성을 분석하고 이를 `./dist/main.js` 파일로 패키징함.

모드 옵션을 사용하면 웹팩의 패키징 결과가 실행되는 환경을 제어할 수 있음.
