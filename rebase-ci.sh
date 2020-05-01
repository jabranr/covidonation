#!/bin/env bash

git config --global push.default simple
git fetch -t

echo 'Rebase CI branch from master'

git checkout origin/develop -B develop
git merge origin/master --no-ff --no-edit
git push origin develop

echo 'Rebase to CI branch completed'