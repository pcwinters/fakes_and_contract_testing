#!/bin/bash
set -ex

docker run -v $PWD/../my-app/pacts:/var/pacts -it --rm pactfoundation/pact-cli:latest verify \
    "/var/pacts/my-app-todos.json" \
    --provider-base-url http://docker.for.mac.host.internal:3001 \
    --provider "todos"
