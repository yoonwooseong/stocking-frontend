# node 빌드
FROM node as build-stage
# 작업 디렉토리 설정
WORKDIR /
ADD . .
RUN yarn install
RUN yarn build

# 빌드 이미지 설정
FROM nginx:stable as product-stage

# 설정파일 복사
RUN rm -rf /etc/nginx/conf.d
COPY nginx /etc/nginx/conf.d

COPY --from=build-stage ./dist ./usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]