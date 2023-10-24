FROM node:current

RUN npm install -g mintlify sharp

WORKDIR /app

ADD . .

CMD ["mintlify", "dev"]
