# FROM node:alpine

# WORKDIR '/app'

# COPY package.json .
# RUN npm install
# COPY . .

# CMD ["npm", "start"]

#this one
# FROM node:16

# WORKDIR /usr/src/server

# COPY ./ ./

# RUN npm install 

# CMD ["/bin/bash"]




FROM node:14

WORKDIR /usr/app

COPY package.json .
RUN npm install 

COPY . .

# CMD ["npm", "start"]