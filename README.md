# Stocking Frontend

## 🔗 Link

 - [Stocking Service](http://52.78.111.36/)
 - [Docker hub repository](https://hub.docker.com/repository/docker/s4ng/stocking-front)

<br>

## 📃 개요

Stocking 프로젝트 Frontend 레포지토리

<br>

## 📋 문서

<br>

## ✏ 요구사항 분석 (Frontend)  

<br>

## 🔨 구조

```
.
├── README.md
├── babel.config.js
├── package.json
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
