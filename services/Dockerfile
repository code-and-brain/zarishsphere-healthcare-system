FROM golang:1.22-alpine AS build
WORKDIR /app
COPY . .
RUN go build -o zarish-care-service ./cmd/main.go

FROM alpine:latest
WORKDIR /app
COPY --from=build /app/zarish-care-service .
EXPOSE 8080
CMD ["./zarish-care-service"]