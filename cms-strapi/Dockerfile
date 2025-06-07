FROM node:18-bullseye

WORKDIR /app

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn config set network-timeout 600000 -g
RUN yarn install --frozen-lockfile --no-cache

COPY . .

RUN yarn add --dev esbuild@latest
RUN rm -rf node_modules/.cache

RUN yarn build

EXPOSE 1337
CMD ["yarn", "start"]
