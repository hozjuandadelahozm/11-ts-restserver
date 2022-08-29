FROM node:16.17.0

WORKDIR /ts-restserver

COPY package*json ./
COPY tsconfig*.json ./

RUN npm install

COPY . .

EXPOSE 8000/tcp

CMD ["npm","start"]