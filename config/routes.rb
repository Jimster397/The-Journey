Rails.application.routes.draw do
  resources :hikes, only: [:index, :show]
  resources :reviews, only: [:index, :show]
  resources :users, only: [:index, :create, :show, :update, :destroy]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/reviews", to: "reviews#index" 
end
