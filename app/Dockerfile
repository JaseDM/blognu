FROM node:20-bookworm-slim

WORKDIR /opt/app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

ENV NODE_ENV=production
RUN npm prune --omit=dev && npm cache clean --force

EXPOSE 1337

CMD ["npm", "run", "start"]
