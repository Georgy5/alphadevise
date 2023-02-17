Rails.application.routes.draw do
  root "pages#home"
  devise_for :users
  resources :reviews, only: [:new, :create]
end
