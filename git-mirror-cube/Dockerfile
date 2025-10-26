FROM node:18-alpine

RUN apk add --no-cache git openssh-client

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY src/ ./src/

LABEL maintainer="SourceCraft Dev Team"
LABEL description="Git repository mirroring cube for CI/CD"
LABEL version="1.0.0"

# Run cube
CMD ["node", "src/index.js"]