FROM node:latest as NodeMenor
WORKDIR /api
COPY . .
ENTRYPOINT npm install && npm run migrate \
            && npm run seed \
            && npm run dev
EXPOSE 3000