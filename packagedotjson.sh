#!/bin/bash

#cp package.json dist/package.json

jq .name package.json
#jq del('.scripts') package.json

#jq "del(.devDependencies)" package.json

