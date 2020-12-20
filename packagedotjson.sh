#!/bin/bash

#cp package.json dist/package.json

#jq .name,.scripts package.json
mkdir dist
jq 'del(.scripts, .devDependencies)' package.json > dist/package.json

