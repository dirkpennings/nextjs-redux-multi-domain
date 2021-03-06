# Next.JS withRedux multi domain example

## Prerequisites
- NodeJS 10.15.0 (or use `nvm use` which honors the `.nvmrc` file)

## Installation
- `git clone https://github.com/dirkpennings/nextjs-redux-multi-domain`
- `cd nextjs-redux-multi-domain`
- `npm install`
- Add `variant-a.local  127.0.0.1` to the hosts file
- Add `variant-b.local  127.0.0.1` to the hosts file
- Clear hosts file cache

## Run
- `npm run dev`
- Visit [Variant A website](http://variant-a.local:3000)
- Visit [Variant B website](http://variant-b.local:3000)

## Debug
- Look in the terminal console log output to verifiy the domain settings (which are determined in `utils/helpers.js`)