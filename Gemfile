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
#gem 'thin'

group :development do
  #gem "better_errors"
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
  # deploy to heroku
  gem 'rails_12factor', '0.0.2'
end
