#!/bin/bash
docker run -it -d -p80:4321 --name astro -u 1000:1000 -w /home/node -v .:/home/node -e LANG=C.UTF-8 node:20-alpine3.17 sh
