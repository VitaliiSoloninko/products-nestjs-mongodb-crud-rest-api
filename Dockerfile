# Dockerfile for NestJS + MongoDB CRUD API
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
RUN npm run build
ENV PORT=5005
EXPOSE 5005
CMD ["npm", "run", "start:prod"]