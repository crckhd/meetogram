#!/usr/bin/env bash

####
# Скрипт для установки husky и проверки по commitlint
###
yarn husky install
yarn husky add .husky/commit-msg 'npx commitlint --edit $1'
