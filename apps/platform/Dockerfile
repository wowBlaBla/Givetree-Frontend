FROM node:18.10-slim AS build-env

RUN apt update && apt install -y git

WORKDIR /usr/src/app

COPY . .

RUN yarn add -W sharp
RUN yarn install
RUN yarn build

# COPY ./apps/platform ./apps/platform
# COPY ./apps/platform/.env.example ./apps/platform/.env

# WORKDIR /usr/src/app/apps/platform

# RUN yarn install
# RUN yarn build

# Build runtime image
# FROM node:16.17-bullseye-slim

# # Hard-bake full commit sha into container env
# ARG COMMIT_SHA
# ENV APP_COMMIT_SHA=${COMMIT_SHA}

# # Hard-bake short commit sha into container env
# ARG COMMIT_SHA_SHORT
# ENV APP_COMMIT_SHA_SHORT=${COMMIT_SHA_SHORT}

# WORKDIR /usr/src/app

# COPY --from=build-env /usr/src/app /usr/src/app
# WORKDIR /usr/src/app/apps/platform

CMD ["yarn", "start:prod"]

