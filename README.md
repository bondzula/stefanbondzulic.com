# About

This is a personal website used to showcase my work, as well ass do some light blogging. Currently working in progress.

I chose a simple stack for this, Astro has nice markdown support for my blog, and is very fast. For styling Tailwind and lastly I'm doing hosting on AWS using SST framework to deploy.

Currently deployed on: https://d1pzznv5j13wfi.cloudfront.net

# Getting started

Node is the only dependency, however, i personally use nix flakes to manage versions of my dependencies for each project, thus flake.nix file is present

```bash
npm install
```

And run the dev server:

```bash
npm run dev
```

# Deploying to AWS

First configure your AWS access, I would recommend deploying it on its own AWS account, and configuring AWS profile for a login. Change the profile in `sst.config.ts` to newly created profile, and then simply run:

```bash
npx sst deploy --stage prod
```
