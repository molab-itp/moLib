#!/bin/bash
cd ${0%/*}
cd ..

# publish lib to npm

quiet=--quiet

bin/build.sh --prod $quiet --lib 1

git add . 
git commit $quiet -m "publish"
git push $quiet

npm version patch

npm run build > notes/publish.txt

npm publish 2>> notes/publish.txt

git push $quiet

# cat notes/publish.txt

