# script for updating to latest version of sly from
# https://github.com/darsain/sly.git 

git submodule init
git submodule update
cd lib && git pull origin master
