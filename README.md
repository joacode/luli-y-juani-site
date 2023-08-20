## Getting Started

First, create a `.env` file with the content of the `.env.example` file to allow the connection to a local database.

Then, you can install the dependencies with:

```bash
npm install
# or
yarn install
```

Finally, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The endpoints for the api are in the `/pages/api` directory. This folder is mapped to `/api/*`. Files in this directory
are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
