FROM node:18-alpine

WORKDIR /app

RUN npm install -g yarn

COPY . .

RUN yarn install

CMD ["yarn", "develop"]
