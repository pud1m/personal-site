FROM node:slim

ENV NODE_ENV production
WORKDIR /app

COPY . .
RUN yarn install

CMD [ "yarn", "socket" ]
EXPOSE 8080