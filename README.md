# 알고리즘 문제 풀이 프로젝트! :fire:
이 프로젝트는 다양한 알고리즘 문제를 해결하는 방법을 학습하고 기록하기 위한 공간입니다.

## 프로젝트 구조

```
메인 프로젝트 루트
||
├── problem
    ||
    ├── <<문제 번호>>
        ||
        └── <<문제.js>>
||
├── test
    ||
    ├── <<문제번호.js>>
    ├── <<문제번호.spec.js>>
    └── problem
        ||
        ├── <<문제 번호>>
            ||
            ├── input.txt
            └── answer.txt
```

## 명령어 

```
npm run test
```
- jest를 사용해 테스트코드들을 실행시킵니다.
```
npm run prob
```
- "node ./problem/9093/reverse.js" 실행하고 싶은 파일을 node를 통해 js파일을 실행시킵니다.
```
npm run clean
```
- prettier를 특정파일들에게 적용시킵니다.
