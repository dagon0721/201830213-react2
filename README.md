# 2024-09-11 수업 내용

npm i -g create-react-app ## 처음 생성시

npx create-next-app@latest

## 왜 SWC(Speedy)를 사용해야 하는가?
1. Babel의 단점
(1) Babel로 변환된 코드를 이해하기 어렵다
(2) 원 코드에 비해 변환 코드의 길이가 늘어난다.
(3) 변환에 시간이 많이 걸린다.

2. SWC의 장점
(1) 별도의 설정 없이 SWC 사용 가능, Next.js에 내장
(2) Rust의 WASM(webAssembly)지원으로 어떤 종류의 플랫폼에서도 Next js 개발 가능

## SWC를 프로젝트에 적용하려면
(1) 12버전 이후로는 상관없이 설치시 자동으로 설치되어 사용가능
(2) 12이전 버전의 프로젝트에 적용하려면 npm install next@12
(3) 그리고 Babel을 설정했다면 설정 파일(.bablrc 또는 babel.config.js)를 삭제

02. 렌더링 전략
02-1 서버 사이드 렌더링(SSR)
02-2 클라이언트 사이드 렌더링(CSR)
02-3 정적 사이트 생성(SSG)

## 렌더링 전략
(1) 렌더링 전략이란 웹 페이지 또는 웹 애플리케이션을 웹 브라우저에 제공하는 방법을 의미한다.
(2) 정적인 페이지 제작에는 Gatsby를 추천
(3) 서버 사이드 렌더링 전략을 원한다면 다른 프레임워크를 검토
(4) 그런데 Next.js에서 이 모든 방법을 완전히 새로운 수준으로 제공
(5) 어떤 페이지는 빌드 시점에 정적으로 생성하고, 어떤 페이지는 실행 시점에 동적으로 생성할지 쉽게 정할 수 있다.
(6) 또한 특정 페이지에 대한 요청이 있을 때마다 페이지를 다시 생성할 수도 있다.
(7) 그리고 반드시 클라이언트에서 렌더링해야 할 컴포넌트도 지정할 수 있어 개발이 쉽다.


# 02-1 서버 사이드 렌더링(SSR)
(1) 웹 페이지를 제공하는 가장 흔한 방법
(2) APM을 이용하는 일반적인 웹 페이지 생성
(3) 여기에 자바 스큽립트 코드가 적재되면 동적으로 페이지 내용을 렌더링 함
(4) Next.js 도 이와 같이 동적으로 페이지를 렌더링할 수 있다.
(5) 스크립트 코드를 집어 넣어서 나중에 웹 페이지를 동적으로 처리할 수도 있는데 이를 하이드레이션이라고 한다.
(6) EX) 어떤 사람이 작성한 블로그 글을 한 페이지에 모아서 작성해야 한다면 SSR을 이용하는 것이 적당하다.
(7) 서버 사이드 렌더링 -> 자바스크립트가 하이드레이션된 페이지를 전송 -> 클라이언트에서 DOM위에 각 스크립트 코드를 하이드레이션 : 페이지 새로 고침 없이 사용자와 웹페이지 간 상호 작용을 가능하게 한다.