#! /bin/bash
docker container stop $(docker container list -q)
docker rmi -f $(docker images -q)
if [ "$1" = "-v"  ];
then
  docker system prune -f --volumes
fi
