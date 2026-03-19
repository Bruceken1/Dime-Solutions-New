FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npx vite build && ls -la dist/ && ls -la dist/assets/

EXPOSE 3000

CMD ["node", "server.js"]
