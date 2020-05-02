#!/bin/env bash

git config --global push.default simple
git status
git fetch -t

echo 'Rebase CI branch from master'

git checkout develop -B develop
git merge master --no-ff --no-edit
git push origin develop

echo 'Rebase to CI branch completed'