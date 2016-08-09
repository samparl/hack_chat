Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :channels, only: [:index, :create, :update, :show] do
      member do
        patch 'subscribe'
        patch 'unsubscribe'
      end
    end
    resources :users, only: [:create]
    resource :sessions, only: [:create, :destroy]
  end
end
