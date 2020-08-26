#!/usr/bin/env sh

project_path=$(cd `dirname $0`; pwd)
echo $project_path

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 拷贝CNAME 文件到 dist 目录下
if test -e $project_path/CNAME
then
  echo 'CNAME exist && begin copy'
  cp -r $project_path/CNAME $project_path/dist/
else
  echo 'CNAME not exist'
fi

# 进入生成的文件夹
cd dist

echo 'cd dist'

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
echo 'start push gh-pages'
git push -f git@github.com:MisterBoole/JS-Finder.git master:gh-pages

cd -