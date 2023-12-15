FROM node:latest as NodeMenor
WORKDIR /api
COPY . .
RUN npm install
ENTRYPOINT npm run migrate \
            && npm run seed \
            && npm run dev
EXPOSE 3000