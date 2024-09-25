#!/bin/bash
cd ${0%/*}
cd ..

# Produce a release build

quiet=--quiet

# deploy to github pages
#
# update build number
# merge branch main in to branch release
# switch back to branch next
#

bin/build.sh --prod $quiet --lib 1

git add . 
git commit $quiet -m "`cat src/gen/build_ver.txt`"
git push $quiet

# in release
git checkout release $quiet
git merge main $quiet -m "`cat src/gen/build_ver.txt`"
git push $quiet

# in main
git checkout main $quiet

echo
echo "build `cat src/gen/build_ver.txt`"