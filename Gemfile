source 'https://rubygems.org'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem "rails", "4.2.0"
# makes respond shortcuts available
gem 'responders', '~> 2.0'

# admin interface and dependencies
gem "activeadmin", github: "gregbell/active_admin" # Until it"s 1.0.0
gem "devise"
gem "rack-cors", require: "rack/cors"
gem 'country_select', github: 'stefanpenner/country_select'
gem "active_admin_import" , '2.1.2'

gem 'geocoder'
gem 'friendly_id', '~> 5.0.0'
#gem "grape", "0.9.0"
#gem "grape-active_model_serializers"
#gem "grape-swagger-rails"

#gem "hashie-forbidden_attributes"
#gem "rack-cors", require: "rack/cors"

# Use jquery as the JavaScript library
gem 'jquery-rails'

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'

# Turbolinks makes following links in your web application faster (use with Rails Asset Pipeline)
#gem 'turbolinks'
# communicate with ember-cli
gem 'ember-cli-rails'

# Use SCSS & Bootstrap for stylesheets
gem 'sass-rails'
gem 'bootstrap-sass'
gem 'autoprefixer-rails'

# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'

# Watches ember directory and refreshes when any changes are saved
gem 'guard'
gem 'guard-livereload'

# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc

gem 'active_model_serializers'

# rails server
gem 'puma'

group :development do
  gem "better_errors"
  gem "meta_request"
  gem "quiet_assets"
  gem "spring"
end

group :development, :test do
  # Use sqlite3 as the database for Active Record
  gem 'sqlite3'

  gem "capybara"
  gem "capybara-screenshot"
  gem "database_cleaner"
  gem "factory_girl_rails"
  gem "poltergeist"
  gem "pry-nav"
  gem "pry-rails"
  gem "pry-stack_explorer"
  gem "pry-theme"
  gem "rspec-rails"
  gem "rubocop"
  gem "shoulda-matchers"
  gem "spring-commands-rspec"
end

group :production do
  gem "pg"
  gem 'rails_12factor', '0.0.2'
end
