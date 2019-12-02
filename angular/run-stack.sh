#! /bin/bash
yarn install
yarn run build:ssr
docker image build -t app-crud:1.0 .
docker image ls
if [ "$1" = "-d"  ];
then
   docker login
   docker run -d 4222:80 --rm app-crud:1.0
else
   docker run -p 4222:80 --rm app-crud:1.0
fi
