FROM node:12.16.1-alpine As builder

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN mkdir node_modules

RUN npm install

RUN npm link @angular/cli

COPY . .

RUN npm run build --prod

FROM nginx:1.15.8-alpine

COPY --from=builder /usr/src/app/dist/eventplanner/ /usr/share/nginx/html