Rails.application.routes.draw do

  resources :events

  resources :countries

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  #resources :regions
  resources :cities
  resources :places
  #get 'places', to: 'places#index'
  #resources :places

  # Initialize geocoder
  get 'address' => 'address#show'

  # Setup catchall path so rails can always find ember
  get '/*path' => 'ember#index'

  # Set root path
  root 'ember#index'

  #resources :places
  #resources :regions, path: 'regions'
  #resources :countries


end
