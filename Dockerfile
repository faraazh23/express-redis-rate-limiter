# Base image
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Copy app files
COPY package*.json ./
RUN npm install

COPY . .

# Expose port
EXPOSE 3000

# Start app
CMD ["node", "index.js"]
