#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# npm run build

cd dist

git init
git add -A
git commit -m 'init-demo'

git push -f git@github.com:ryanschen/vmui.git master:gh-pages

cd -