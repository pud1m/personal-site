FROM node:alpine as BUILD_IMAGE
WORKDIR /app
COPY package.json yarn.lock ./

# install dependencies
RUN yarn install --frozen-lockfile
COPY . .

# build
ARG NODE_ENV
ARG NEXT_PUBLIC_BASE_URL

ENV NODE_ENV=${NODE_ENV}
ENV NEXT_PUBLIC_BASE_URL=${NEXT_PUBLIC_BASE_URL}
RUN yarn build

FROM node:alpine
WORKDIR /app

# copy from build image
COPY --from=BUILD_IMAGE /app/package.json ./package.json
COPY --from=BUILD_IMAGE /app/node_modules ./node_modules
COPY --from=BUILD_IMAGE /app/.next ./.next
COPY --from=BUILD_IMAGE /app/public ./public

EXPOSE 3000 3001
CMD ["yarn", "start"]