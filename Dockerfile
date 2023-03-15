FROM node:18 AS build

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json package-lock.json ./
RUN npm install

# Bundle app source
COPY . .

# Build the app
RUN npm run build

# Production image, copy all the files and run next
FROM node:18-alpine

WORKDIR /app

COPY --from=build /app /app

ENV NODE_ENV=production

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]
