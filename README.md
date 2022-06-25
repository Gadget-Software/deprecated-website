# gadget-software.tech website

## Development

Dependencies:

- Node v16
- Yarn

```shell
git clone git@github.com:sanaths/gadget_website.git gadget_website
cd gadget_website
yarn
yarn start
```

http://localhost:3000 will be opened automatically by the above command.

The website makes use primarily of React, and [Tailwind CSS][tailwind].

[tailwind]: https://tailwindcss.com/

## Deployment

Deployment is handled automatically by the CI.

It uses a community GitHub Action in order to upload the built files to S3.

The GitHub Action can be found here: https://github.com/jakejarvis/s3-sync-action

It's a simple `aws s3 sync` call, or equivalent.
