
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./


RUN npm ci


COPY . .


RUN if [ ! -f "private.key" ]; then echo "Error: private.key file not found" && exit 1; fi


EXPOSE 80


CMD ["npm", "run", "dev"]
