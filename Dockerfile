FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Remove any pre-committed dist folder, then build fresh
RUN rm -rf dist && npx vite build

# Confirm build output exists
RUN ls -la dist/assets/

EXPOSE 3000

CMD ["node", "server.js"]
