FROM golang:1.17 as gomenor
WORKDIR /app
COPY . ./
RUN go build -o /fullcycle

FROM scratch
WORKDIR /
COPY --from=gomenor /fullcycle /fullcycle
ENTRYPOINT [ "/fullcycle" ]