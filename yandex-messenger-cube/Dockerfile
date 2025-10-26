FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

#dependencies
RUN npm install --production

COPY src/ ./src/

LABEL maintainer="SourceCraft Dev Team"
LABEL description="Yandex Messenger notification cube for CI/CD"
LABEL version="1.0.0"

# Run cube
CMD ["node", "src/index.js"]