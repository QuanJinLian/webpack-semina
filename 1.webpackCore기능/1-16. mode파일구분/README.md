# 환경 구분 {ignore}

[toc]

프로덕션 환경과 개발 환경을 위해 별도의 webpack config를 작성해야 할 때가 있습니다.

이를 더 잘 수용하기 위해 webpack에서는 config가 객체뿐만 아니라 **함수**도 될 수 있습니다.

```js
module.exports = (env) => {
  return {
    // config 내용
  };
};
```

빌드를 시작할 때 webpack은 config가 함수인 경우 함수가 반환하는 객체를 config 내용으로 사용하여 함수를 호출하므로 개발자는 환경에 따라 다른 객체를 반환할 수 있습니다.

webpack 함수를 호출할 때, webpack은 함수에 인수 env를 전달하는데, 이 인수는 webpack 명령에서 env에 지정된 값에서 옵니다. 예를 들어:

```shell
npx webpack --env abc # env: "abc"

npx webpack --env.abc # env: {abc:true}
npx webpack --env.abc=1  # env： {abc:1}
npx webpack --env.abc=1 --env.bcd=2 # env: {abc:1, bcd:2}
```

이러한 방식으로 명령에 환경을 지정하고 코드에서 환경을 결정하여 환경에 따라 다른 구성 결과를 반환할 수 있습니다.
