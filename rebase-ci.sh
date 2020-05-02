#!/bin/env bash

git config --global push.default simple
git fetch --all

echo 'Rebase CI branch from master'

git checkout develop || exit
git merge master --no-ff --no-edit
git push origin develop

echo 'Rebase to CI branch completed'