Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  get 'alpha/base'
  # Defines the root path route ("/")
  root "alpha#base"
end
