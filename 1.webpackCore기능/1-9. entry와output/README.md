# 입구와 출구

![Alt text](assets/%EC%B4%9D%EA%B3%BC%EC%A0%951.png)

> node내부 모듈 - path: https://nodejs.org/dist/latest-v18.x/docs/api/path.html

**출구**
여기서 말하는 출구는 리소스 목록의 파일 이름 또는 경로를 구성하는 것입니다.

출구는 output을 통해 설정됩니다.

**입구**

**입구는 실제로 chunk를 설정함**

입구는 entry을 통해 설정됩니다.

규칙：

- name: chunkname
- hash: 일반적으로 캐싱 문제를 해결하는데 사용되는 총 리소스 hash입니다.
- chunkhash: chunkhash 사용
- id: chunkid 사용, 권장하지 않음

문서:https://webpack.js.org/configuration/output/#template-strings
