#!/bin/bash

echo "Fetching from GitHub."
cd /gome/djnd/stanovanja
git fetch --all

echo "Resetting to remote HEAD."
git reset --hard origin/master

echo "Switching to Node 10."
nvm use 10

echo "Running npm install"
npm install

echo "Time to build ..."
npm run build

echo "All done."
