set -e

npm run build

cd dist

echo > .nojekyll

git init
git checkout -B main
git add -A
git commit -m "deploy"

git push -f https://github.com/lack21/Movies.git main:gh-pages

cd -