# Stocking Frontend

## 🔗 Link

 - [Stocking Service](http://52.78.111.36/)
 - [Docker hub repository](https://hub.docker.com/repository/docker/s4ng/stocking-front)

<br>

## 📃 개요

Stocking 프로젝트 Frontend 레포지토리

<br>

## 📋 문서

- __스토리보드__ : [카카오오븐](https://ovenapp.io/view/DOhZ6TnDKWFjINtQKjnj2RAulxojOZCb#3QyvB)

<br>

## ✏ 요구사항 분석 (Frontend)  

- Vue Cli 프로젝트 구조화          ( Vue 3 / Vue cli 4.x )
- API 연동                         ( axios )
- 내 주식 동적 UI 및 기능 개발
- 내 자산 UI 차트화                ( Vue3ChartJs )
- 로그인 기능 연동
- Single Page Application 구현    ( Vue Router)


<br>

## 🔨 구조

```
.
├── README.md
├── babel.config.js
├── package.json
├── .env
├── public
│   ├── favicon.ico
│   └── index.html
└── src
    ├── App.vue
    ├── main.js
    ├── api
    │   ├── api.js
    │   └── ...
    ├── assets
    │   ├── image
    │   └── ...
    ├── components 
    │   ├── Header.vue
    │   ├── Footer.vue
    │   └── ...
    ├── plugins             
    ├── routes
    │   ├── routes.js
    │   └── ...
    ├── util
    │   ├── common.js
    │   └── ...
    ├── views
    │   ├── Main.vue
    │   ├── Stock.vue
    │   ├── Asset.vue
    │   └── ...
    └── exception
        └── ...
```

<br>


### 

## 💻 Project command
```bash
# yarn 미설치시 "yarn" -> "npm run" 으로 대체


# 프로젝트 설정 (종속성 설치)
yarn

# 실행 (개발환경)
yarn serve

# 빌드
yarn build

# 도커 빌드
yarn docker-build

# 빌드 & 도커 빌드
yarn docker

## lint
yarn lint
```
