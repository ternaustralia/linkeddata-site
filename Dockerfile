FROM docker.io/node:16.13.1-alpine3.14 AS builder

ARG REACT_APP_GIT_VERSION

COPY ./ $HOME/src/

WORKDIR $HOME/src/

RUN npm install; npm run build


FROM docker.io/nginx:1.21.5-alpine

COPY --from=builder $HOME/src/build /usr/share/nginx/content
COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 8000
