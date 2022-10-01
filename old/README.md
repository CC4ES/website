# Middleman Site Scaffold with Webpack

## Overview

This is site scaffold to build static website without a blog. This particular
flavor uses webpack via Middleman 4's external pipelines feature.

A blog can be re-added by following the middleman v4 documentation.

Some documentation to be familiar with:

- [Middleman V4 Documentation](https://middlemanapp.com/)
- [Webpack - Configuration](https://webpack.js.org/concepts/configuration/)
- [YAML Syntax](https://docs.ansible.com/ansible/latest/reference_appendices/YAMLSyntax.html)
  \- used in the `/data/site.yml` file and in the "frontmatter" that appears
  at the top of most of the template/website page files.

## Making Changes

Follow the "Local Development Setup" OR make changes in the GitHub editor.

If you want to preview a changes before deploying it to the live/production
site, open a GitHub Pull Request. This will automatically spin up a review
app for you to see the changes before publishing to your main website.

IMPORTANT: Any commits to the `master` branch will deploy to the live site.

### Style (CSS/SCSS) Changes

The `site.css.scss` file located in `/wpsrc/stylesheets/` shows the hierarchy
of the website stylesheets that are all imported. Generally, you'll find styles
organized by name in a partial file, indicated by an `_` prefixing the filename.

This site uses [Zurb Foundation 6](https://get.foundation/sites/docs/). For the
most part, you'll be using the Foundation utility classes and only writing
custom CSS when you want to modify the defaults. The `_settings.scss` file in
the `/wpsrc/stylesheets/` directory is the Foundation 6 settings that are
basically the theme settings for the website styles.

### Javascript changes

The only Javascript on the site are Zurb Foundation 6 plugins activated in the 
`wpsrc/javascripts/all.js` file. You can add any custom javascript you want to
run on all pages in this file.

### Creating New Pages

1. Create a new file in the `/source` directory.
2. Name the file (before the `.html.erb` part) like you want it to appear in
the browser. Putting page files in folders will make the folder name appear in
front of the filename in the URL. Example: `testpage.html.erb` located in
`/source` will show up at `cc4es.org/testpage/`. Putting it a directory located
at `/source/onefolder/two-folders/` will have the URL be
`https://cc4es.org/onefolder/two-folders/testpage/`.

   _Note: The "slug" in the main_nav config is everything that appears after
   the `cc4es.org/` in the example above._
3. Add the relevant YAML frontmatter (look at an existing file for what this 
   might be.)
4. Modify the template code and you're done!

### Main Navigation Changes

See instructions in the `/data/site.yml` file.

### Homepage Six Modules Card content/text

See instructions in the `/data/site.yml` file.

## Local Development

### Prerequisites

If you want to make major changes, having a local development environment set
up on your computer is ideal. To do this, you'll need:

- [ruby](https://www.ruby-lang.org/)\*\* to run the middleman framework.
- [bundler for ruby](https://bundler.io/) to manage ruby gems (dependencies)
- [node and npm](https://nodejs.org/en/)\*\*

_\*\*Verify you have the required versions of ruby and node by referencing the
 `.ruby-version` file and "engines" in the `package.json` file, respectively._

### Setup

1. Get the prerequisites listed above installed
2. Run `bundle install` to install middleman and other ruby dependencies (gems)
3. Run `npm install` to install webpack and the required libraries for assets

### Usage

#### Development

Running `middleman s` will run the necessary development tools with livereload.

#### Build

Run `middleman build`.

### Deploy

This website can be deployed on any server that can host static websites. It is
configured to work out-of-box with Netlify. This means a push to `master` will
automatically trigger a production deploy using the Netlify service.

Opening a Pull Request in GitHub will create an ephemeral Review App in Netlify
to preview your changes before merging to `master`.

## Known Issues/Considerations

### Update webpack config

The update to Middleman 4 was made with minimal support for active development.
Consider updating the webpack config to support dev-friendly configs like asset
hash maps.
