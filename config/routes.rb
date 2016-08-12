Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create]
    resources :channels, only: [:index, :create, :update, :show] do
      resources :messages
      collection do
        get 'direct'
      end
      member do
        patch 'subscribe'
        patch 'unsubscribe'
      end
    end
    resource :sessions, only: [:create, :destroy]
  end
end
