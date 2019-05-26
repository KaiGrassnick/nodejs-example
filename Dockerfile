FROM node:10-jessie

ARG TINI_VERSION=0.18.0

# download tini
RUN set -xe \
    && wget -O - https://github.com/krallin/tini/releases/download/v${TINI_VERSION}/tini > /usr/local/bin/tini \
    && chmod +x /usr/local/bin/tini \
    && mkdir -p /data \
    && mkdir -p /data/output

# copy app
COPY *.js /data/
COPY *.json /data/

# install dependencies
RUN cd /data \
    && npm install

WORKDIR /data

ENTRYPOINT ["tini", "--"]

CMD ["npm", "start"]
