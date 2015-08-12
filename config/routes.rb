Rails.application.routes.draw do

  resources :events

  resources :countries
  #resources :regions
  resources :cities
  resources :places
  #get 'places', to: 'places#show'

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  # Initialize geocoder
  get 'address' => 'address#show'

  # Setup catchall path so rails can always find ember
  get '/*path' => 'ember#index'

  # Set root path
  root 'ember#index'

end
