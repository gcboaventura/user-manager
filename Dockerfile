FROM node:14.19.3

WORKDIR /usr/src/user-manager

COPY ./package.json .

RUN yarn install --only=prod

COPY . /usr/src/user-manager

RUN yarn build

EXPOSE 3000

CMD yarn start
