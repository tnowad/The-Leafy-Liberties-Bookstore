FROM node:19-alpine3.17

WORKDIR /app

RUN chown -R 1000:1000 /app

USER 1000:1000
