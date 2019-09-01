#!/bin/bash

git checkout master

# read version number
echo '版本号格式为(major.minor.patch), 输入[n/N]退出'
while read -p "请输入版本号:" version; do
  if [[ $version =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then 
    break
  fi

  if [[ $version =~ [nN] ]]; then
    exit 0
  fi
done

#build
echo -e '\nbuild bundle for production'
npm run build:production -- RELEASE_VERSION=$version

echo -e '\nbuild bundle for expample'
npm run build:example

# commit
git add .
git commit -m "build: $version"
npm version $version --message "release: $version"
git push

# publish
npm publish