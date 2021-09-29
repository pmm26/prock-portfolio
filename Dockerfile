# pull official base image
FROM node:16-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# add app
COPY . .

RUN npm install --silent

RUN npm run build

RUN chmod +x start.sh

# start app
CMD ["sh", "start.sh"]
