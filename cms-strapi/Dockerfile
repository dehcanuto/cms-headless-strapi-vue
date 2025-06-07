FROM node:18-bullseye

WORKDIR /app

COPY package.json yarn.lock .yarnrc.yml ./

COPY .yarn ./.yarn

RUN corepack enable
RUN corepack prepare yarn@4.9.1 --activate

RUN yarn install --immutable

COPY . .

RUN rm -rf node_modules/.cache
RUN rm -rf .cache build

RUN yarn build

EXPOSE 1337

CMD ["sh", "-c", "yarn seed:posts && yarn start"]
