FROM debian:stable-slim

WORKDIR /app

ADD https://github.com/pocketbase/pocketbase/releases/download/v0.24.4/pocketbase_0.24.4_linux_amd64.zip /app
COPY pb_migrations /app/pb_migrations/
COPY pb_public /app/pb_public/

RUN apt update && \
    apt upgrade -y && \
		apt install unzip -y && \
		unzip pocketbase_0.24.4_linux_amd64.zip && \
		useradd pb && \
		chown pb:pb -R /app/*

USER pb
EXPOSE 8090
VOLUME ["/app/pb_data"]
ENTRYPOINT ["/app/pocketbase", "serve", "--http='0.0.0.0:8090'"]
