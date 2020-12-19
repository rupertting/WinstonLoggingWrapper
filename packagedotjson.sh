#!/bin/bash

#cp package.json dist/package.json

jq .name,.scripts package.json
jq del(.scripts) package.json

