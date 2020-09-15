
# Markdown Options
# If you'd like GitHub-style code fencing, check out https://github.com/middleman/middleman-syntax
set :markdown_engine, :redcarpet

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

config[:js_dir] = 'wpsrc/javascripts'
config[:css_dir] = 'wpsrc/stylesheets'
config[:images_dir] = 'images'

activate :directory_indexes

activate :external_pipeline,
         name: :webpack,
         command: build? ? 'npm run build' : 'npm run start',
         source: '.tmp/dist',
         latency: 1

# Build-specific configuration
configure :build do
  config[:host] = "https://sampledomain.com"

  activate :asset_hash do |f|
    f.ignore = [/^fonts/, /^images/]
  end

  # Use relative URLs
  activate :relative_assets
end
