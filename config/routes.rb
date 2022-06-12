Rails.application.routes.draw do

  namespace :iot do
    get 'welcome/index'
  end
  root to: 'site/welcome#index'
  
  get 'application', to: 'application#index'
  # get 'webcoruja', to: 'webcoruja#dados'
  
  
  namespace :site do
    get 'welcome/index'
    get 'welcome/areacliente'
  end
  namespace :users_backoffice do
    get 'welcome/index'
  end
  namespace :admins_backoffice do
    get 'welcome/index'
  end
  namespace :webcoruja do
    get 'welcome/index'
    get 'welcome/teste'
    # get 'welcome/dados'
    get 'vlans/index'
    post 'welcome/index'
  end
  
  
  devise_for :users
  devise_scope :user do  
  # devise_for :user do  
    get '/users/sign_out' => 'devise/sessions#destroy'     
 end


  devise_for :admins
  
  # root to: 'application#index'
  
  get 'site', to: 'site/welcome#index'
  
end
