FROM node:20 as baseImage
WORKDIR /api
COPY . .


FROM node:20-alpine
WORKDIR /api
COPY --from=baseImage /api .
COPY . .
ENTRYPOINT npm install && npm run migrate \
            && npm run seed \
            && npm run dev
EXPOSE 3000