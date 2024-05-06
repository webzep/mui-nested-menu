# Releasing

Update the README.md file in the root then run the below from the root.

```sh
yarn menu publish:minor
# or
yarn menu publish:patch
# Check versions and stuff have updated

# Cause parcel sucks
rm -rf **/.parcel-cache
rm -rf **/node_modules
yarn

yarn menu parcel build --no-optimize --no-source-maps --no-content-hash --target

cd ./packages/mui-nested-menu
yarn copy

cd ./packages/mui-nested-menu/dist
npm publish

cd ..
yarn set-package:dev
```
