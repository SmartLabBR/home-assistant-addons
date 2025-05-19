FROM node:20-alpine

WORKDIR /app
COPY run.sh /run.sh
COPY app/ /app/
RUN chmod +x /run.sh

EXPOSE 3030

CMD [ "/run.sh" ]