#!/bin/bash
# cd ${0%/*}

# echo bin-path ${0%/*}
bin_path="${0%/*}"
abs_path="$(readlink -f "$bin_path")"
# echo $abs_path
root=`pwd`
# echo root $root

# exit

# build without incrementing build number:
# bin/build.sh --dev

# Install npm if needed for node build scripts
#
dest=$abs_path/../node
if [ ! -e "$dest/node_modules" ]; then
  pushd "$dest" > /dev/null
  npm install
  popd > /dev/null
fi


# Process files in build to expand build version 

node "$abs_path/../node/build.js" --root "$root" "$@"

# prefer $() vs. back tick
# https://chat.openai.com/c/15c2edeb-3880-470a-81de-ee94faf6cffc
