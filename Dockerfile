FROM node:18

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json package-lock.json ./
RUN npm install

# Bundle app source
COPY . .

# Build the app
RUN npm run build

# Run the app
CMD [ "npm", "start" ]