# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

activate :livereload
# Layouts
# https://middlemanapp.com/basics/layouts/

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# Deploy to github pages
activate :deploy do |deploy|
  deploy.deploy_method = :git
  deploy.build_before = true # default: false
end

import_path File.expand_path('bower_components', app.root)
# extensions
# require 'lib/extensions/permalink.rb'
# activate :permalink
activate :syntax
set :markdown_engine, :kramdown

configure :development do
  # set :images_dir, 'source/images'
  # set :js_dir, 'source/javascripts'
  # set :css_dir, 'assets/stylesheets'
  # set :fonts_dir, 'source/fonts'
  # set :site_url, 'taco-truck-site'
end

configure :build do
  set :relative_links, true
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
  

  # Relative assets needed to deploy to Github Pages
  activate :relative_assets
  # Name of the project where you working on
  set :site_url, 'taco-truck-site'
end

# With alternative layout
# page '/path/to/file.html', layout: 'other_layout'

# Proxy pages
# https://middlemanapp.com/advanced/dynamic-pages/

# proxy(
#   '/this-page-has-no-template.html',
#   '/template-file.html',
#   locals: {
#     which_fake_page: 'Rendering a fake page with a local variable'
#   },
# )

# Helpers
# Methods defined in the helpers block are available in templates
# https://middlemanapp.com/basics/helper-methods/

# helpers do
#   def some_helper
#     'Helping'
#   end
# end

# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings

# configure :build do
#   activate :minify_css
#   activate :minify_javascript
