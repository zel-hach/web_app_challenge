FROM node:20-alpine AS build
WORKDIR "/app"
COPY . .
RUN npm install && npm install @react-three/fiber && npm install styled-components
EXPOSE 5173
CMD ["npm","run","dev"]