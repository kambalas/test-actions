# Stage 1
FROM alpine:latest AS build

# Install the Hugo go app.
RUN apk add --update --no-cache tzdata
ENV TZ=Europe/Vilnius

WORKDIR /opt/HugoApp

# Copy Hugo config into the container Workdir.
COPY ./public ./public


# Stage 2
FROM nginx:1.29-alpine
COPY ./server/nginx.conf /etc/nginx/conf.d/default.conf
# Copy HTML from previous build into the Workdir.
COPY --from=build /opt/HugoApp/public /usr/share/nginx/html

# Expose port 80
EXPOSE 80/tcp
