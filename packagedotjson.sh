#!/bin/bash

cp package.json dist/package.json

jq .name package.json
#jq del('.scripts') dist/package.json

#jq "del(.devDependencies)" dist/package.json

