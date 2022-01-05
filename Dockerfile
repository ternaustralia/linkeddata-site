FROM docker.io/node:16.13.1-alpine3.14 AS builder

COPY ./ $HOME/src/

WORKDIR $HOME/src/

RUN yarn; yarn build


FROM docker.io/nginx:1.21.5-alpine

COPY --from=builder $HOME/src/build /usr/share/nginx/content
COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 8000
