# ! This Dockerfile will only run successfully as part of a Kubernetes cluster
# See git:rbc-k8s for helm charts, and skaffold.dev for dev setup

# * Dev stage
FROM node:16-alpine AS development

# https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine
RUN apk add --no-cache libc6-compat

# Setting NODE_ENV helps Skaffold know this is a node app
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

# Copy package.json and package-lock.json to /usr/src/app
# ! Currently Nx doesn't give us a lock file :(
COPY ./dist/apps/api/package.json ./
# We need to manually set the main value in the package.json
# ! As it is currently set incorrectly within package.json
RUN sed -i 's/main\.js/apps\/api\/main\.js/g' package.json

# ! Nx also doesn't currently include devDependencies in package.json
# When they do, this whole section can be removed
RUN npm install && \
  npm install typescript @nestjs/cli @nestjs/schematics ts-node -g && \
  npm install tsconfig-paths ts-loader @types/node source-map-support \
  webpack-node-externals run-script-webpack-plugin webpack

COPY ./dist/apps/api ./dist/apps/api
COPY ./dist/libs ./dist/libs

COPY [ \
  "./tsconfig.base.json", \
  "./webpack-hmr.config.js", \
  "./apps/api/nest-cli.json", \
  "./apps/api/entrypoint.sh", \
  "./" \
  ]
COPY ./libs ./libs
COPY ./apps/api ./apps/api

RUN chmod +x entrypoint.sh
CMD [ "sh", "entrypoint.sh" ]

# * Production stage
FROM node:16-alpine AS production

RUN apk add --no-cache libc6-compat

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY --from=development /usr/src/app/package.json ./

# There is no need for --production flag, as NODE_ENV is set
RUN npm install

# Copy the pre-built files from local
COPY ./dist/apps/api ./dist/apps/api
COPY ./dist/libs ./dist/libs

# TODO This needs to be tested, as to whether or not permissions are correct
COPY --from=development /usr/src/app/entrypoint.sh ./

CMD [ "sh", "entrypoint.sh" ]
