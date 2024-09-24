#!/bin/bash


echo bin-path ${0%/*}
bin_path="${0%/*}"
echo abs-path $(readlink -f "$bin_path")

echo pwd `pwd`

echo

bin/build.sh --dev --quiet

bin/build.sh --prod --quiet
