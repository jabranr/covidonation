#!/bin/env bash

git config --global push.default simple
git fetch --all
git pull
git branch -a

echo 'Rebase CI branch from master'

git checkout origin/develop -B develop || exit
git merge origin/master --no-ff --no-edit
git push origin develop

echo 'Rebase to CI branch completed'