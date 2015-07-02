Rails.application.routes.draw do

  resources :countries

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  #resources :regions, to: 'regions#index'
  resources :regions
  resources :places
  #get 'places', to: 'places#index'
  #resources :places

  # Setup catchall path so rails can always find ember
  get '/*path' => 'ember#index'

  # Set root path
  root 'ember#index'

  #resources :places
  #resources :regions, path: 'regions'
  #resources :countries


end
