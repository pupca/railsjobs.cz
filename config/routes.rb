RailsjobsCz::Application.routes.draw do
  resources :categories

  devise_for :users
  resources :dashboards
  resources :jobs do
    member do
      get :preview
      get :approve
      get :check_out
      get :congratulation
    end
  end
  resources :users
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'dashboards#index'
end
