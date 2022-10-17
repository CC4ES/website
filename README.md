# CC4ES Website built using [Astro](https://astro.build)

## Making Changes

Follow the "Local Development Setup" OR make changes in the GitHub editor.

If you want to preview a changes before deploying it to the live/production
site, open a GitHub Pull Request. This will automatically spin up a review
app for you to see the changes before publishing to your main website.

IMPORTANT: Any commits to the `master` branch will deploy to the live site.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

### Creating New Pages

1. Create a new folder in the `/src/pages` directory corresponding with the url you want (ex: `/src/pages/my-new-page`).
2. Create and name a file `index.astro`. Putting `index.astro` files in folders will make the folder name appear in
   front of the filename in the URL. Example: `/src/pages/testpage/index.astro` will show up at `cc4es.org/testpage/`. Putting it a directory located
   at `/src/pages/onefolder/two-folders/index.astro` will have the URL be `https://cc4es.org/onefolder/two-folders/testpage/`.

   _Note: The "slug" in the main_nav config is everything that appears after
   the `cc4es.org/` in the example above._

3. Modify the template code and you're done!

## Local Development

### Prerequisites

If you want to make major changes, having a local development environment set
up on your computer is ideal. To do this, you'll need:

- [node and npm](https://nodejs.org/en/)\*\*

_\*\*Verify you have the required versions of node by referencing the `.nvmrc` file_

### Setup

1. Get the proper Node version installed
2. Run `npm install` to install the required libraries for assets

### Usage

#### Development

Running `npm run dev` will run the necessary development tools with livereload.

#### Build

Run `npm run build`.

### Deploy

This website can be deployed on any server that can host static websites. It is
configured to work out-of-box with Netlify. This means a push to `master` will
automatically trigger a production deploy using the Netlify service.

Opening a Pull Request in GitHub will create an ephemeral Review App in Netlify
to preview your changes before merging to `master`. |

### Style (CSS/SCSS) Changes

The website is styled using [Tailwind CSS](https://tailwindcss.com/).
