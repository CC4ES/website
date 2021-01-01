# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

# Specify where various types of files are located for middleman
# to reference correctly with built-in helper methods.
#
config[:js_dir] = 'wpsrc/javascripts'
config[:css_dir] = 'wpsrc/stylesheets'
config[:images_dir] = 'images'

# All templates/pages have pretty URLs without the .html showing
#
activate :directory_indexes

# Config to enable webpack to correctly build the stylesheets and javascript
# assets.
#
activate :external_pipeline,
         name: :webpack,
         command: build? ? 'npm run build' : 'npm run start',
         source: '.tmp/dist',
         latency: 1

# Build configuration. Can add different configurations to specify different
# build commands for distinct environments (like "development" or "production")
#
configure :build do
  config[:host] = "https://sampledomain.com"

  activate :asset_hash do |f| # adds a hashed URL for assets in the site code.
    f.ignore = [/^fonts/, /^images/]
  end

  # Use relative URLs
  activate :relative_assets
end
