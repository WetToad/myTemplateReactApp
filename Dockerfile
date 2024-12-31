FROM node:22.12.0 as DEV_IMAGE

# Where in the container should the app be installed
WORKDIR /usr/src/app

COPY ./package.json .
COPY ./package-lock.json .

RUN npm install

# Copies all remaining files, ignores files in .dockerignore
COPY . .

EXPOSE 5173

CMD [ "npm", "run", "dev-local-network" ]