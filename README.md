# Shopify with Next Boilerplate

This is a storefront built on React and NextJS, using the Shopify Buy SDK and the Shopify Graphql API to list and interact with products and checkouts.

The store is built for HG Blades.


## Toolkit
- [React](reactjs.org/)
- [NextJS](https://nextjs.org) (server-side rendering, routing, framework)
- [Shopify SDK](https://shopify.github.io/js-buy-sdk/) - connect to shopify as headless CMS
- [Styled Components](https://styled-components.com/) - css in js
- [Neat Components](https://github.com/magicink/neat-components) - layout

## How to use

- `yarn dev` will run the application locally, spinning up a local dev server
- `yarn build` will export the project for deployment, based on the environment variable
- `yarn start` will serve the files exported by `yarn build`
- `yarn preview-dev` will run a build and then run `netlify dev`, to preview the app as it would run on Netlify environment.