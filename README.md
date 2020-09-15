# Middleman Site Scaffold with Webpack

## Overview

This is site scaffold to build static website without a blog. This particular flavor uses webpack via Middleman 4's 
external pipelines feature.

## Setup

_In order to use this scaffold, you will need to have `ruby`, `bundler`, `node`._

1. `bundle install`
2. `npm install`

## Usage

### Development

Running `middleman s` will run the necessary development tools with livereload.

### Build

Run `middleman build`.

### Test

Run `bundle exec rake test` to run the HTML proofer tests found in the `Rakefile`.

### Deploy

This website can be deployed on any server that can host static websites. It is configured to work out-of-box with
Netlify. This means a push to `master` will automatically trigger a production deploy using the Netlify service.

Opening a pull request on a new branch in your repository will create an ephemeral Review App in Netlify.

## Known Issues/Considerations

### Update webpack config

The update to Middleman 4 was made with minimal support for active development. Consider updating the webpack config to
support dev-friendly configs like asset hash maps.
