# build environment
FROM node:19.4.0-alpine AS build
WORKDIR /portfolio_bozynski_alina
ENV PATH /portfolio_bozynski_alina/node_modules/.bin:$PATH
COPY package.json /portfolio_bozynski_alina/
COPY package-lock.json /portfolio_bozynski_alina/
RUN npm i --legacy-peer-deps --loglevel=error
COPY . /portfolio_bozynski_alina/
CMD ["npm", "run", "build"]

# production environment
FROM nginx:stable
EXPOSE 5575
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d
COPY --from=build portfolio_bozynski_alina/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
