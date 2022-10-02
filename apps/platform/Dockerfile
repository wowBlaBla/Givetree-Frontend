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
FROM node:18.10-slim

# # Hard-bake full commit sha into container env
ARG COMMIT_SHA
ENV APP_COMMIT_SHA=${COMMIT_SHA}

# # Hard-bake short commit sha into container env
# ARG COMMIT_SHA_SHORT
# ENV APP_COMMIT_SHA_SHORT=${COMMIT_SHA_SHORT}

WORKDIR /usr/src/app

COPY --from=build-env /usr/src/app/.next /usr/src/app/.next
COPY --from=build-env /usr/src/app/node_modules /usr/src/app/node_modules
COPY --from=build-env /usr/src/app/public /usr/src/app/public

COPY --from=build-env /usr/src/app/.eslintrc.json /usr/src/app/.eslintrc.json
COPY --from=build-env /usr/src/app/.eslintrc.base.json /usr/src/app/.eslintrc.base.json
COPY --from=build-env /usr/src/app/next.config.js /usr/src/app/next.config.js
COPY --from=build-env /usr/src/app/package.json /usr/src/app/package.json
COPY --from=build-env /usr/src/app/eslint.js /usr/src/app/eslint.js
COPY --from=build-env /usr/src/app/tsconfig.json /usr/src/app/tsconfig.json

CMD ["yarn", "start:dist"]

