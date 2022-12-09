FROM node:alpine

WORKDIR /usr/src/app

USER root

RUN apk update

COPY ["package.json", "yarn.lock"]

RUN yarn

COPY prisma ./prisma/

COPY . .

EXPOSE 8080

ENV DATABASE_URL=postgresql://postgres:postgres@postgres:5432/courier?connect_timeout=300

CMD ["yarn", "run", "server"]