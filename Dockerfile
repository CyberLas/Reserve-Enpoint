FROM node:16
WORKDIR /usr/src/app
COPY [".env", "package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .
EXPOSE 80
EXPOSE 5432
EXPOSE 4000
ENV NODE_ENV=production
CMD [ "npm", "run", "dev" ]
