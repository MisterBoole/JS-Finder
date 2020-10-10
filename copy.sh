#!/usr/bin/env sh

project_path=$(cd `dirname $0`; pwd)
echo $project_path

# 确保脚本抛出遇到的错误
set -e

# 拷贝CNAME 文件到 dist 目录下
if test -e $project_path/CNAME
then
  echo 'CNAME exist && begin copy'
  cp -r $project_path/CNAME $project_path/dist/
else
  echo 'CNAME not exist'
fi

# 拷贝CNAME 文件到 dist 目录下
if test -e $project_path/MP_verify_7KIKtv3uIDAlFePw.txt
then
  echo 'MP_verify_7KIKtv3uIDAlFePw.txt exist && begin copy'
  cp -r $project_path/MP_verify_7KIKtv3uIDAlFePw.txt $project_path/dist/
else
  echo 'MP_verify_7KIKtv3uIDAlFePw.txt not exist'
fi