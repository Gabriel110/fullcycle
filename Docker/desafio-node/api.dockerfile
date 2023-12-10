FROM node:latest as NodeMenor
COPY . /var/www
WORKDIR /var/www
RUN npm install
ENTRYPOINT npm run migrate \
            && npm run seed \
            && npm run dev
EXPOSE 3000