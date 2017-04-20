#!/usr/bin/env bash

rm -rf ./build

mkdir -p ./build/kibana/kibana-html-plugin

rsync -av --progress . ./build/kibana/kibana-html-plugin \
    --exclude build \
    --exclude build.sh \
    --exclude deploy.sh \
    --exclude .git \
    --exclude .idea

cd ./build/
zip -r ./kibana-html-plugin.zip ./kibana/
cd ..
