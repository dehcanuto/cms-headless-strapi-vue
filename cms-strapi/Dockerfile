FROM node:18-bullseye

WORKDIR /app

RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    && rm -rf /var/lib/apt/lists/*

COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn ./.yarn

RUN corepack enable
RUN corepack prepare yarn@4.9.1 --activate

RUN yarn install --immutable
RUN cd node_modules/better-sqlite3 && yarn run build-release

COPY . .

RUN rm -rf node_modules/.cache .cache build
RUN yarn build

EXPOSE 1337

CMD ["sh", "-c", "yarn seed:posts && yarn start"]