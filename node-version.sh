#!/bin/bash

version=${1:-"17.6.0"}

echo "$version" > .node-version
echo "nodejs $version" > .tool-versions

for d in apps/*/ ; do
  echo "$version" > $d.node-version
done

echo "node version set to $version"
