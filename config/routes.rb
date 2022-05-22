Rails.application.routes.draw do

  root to: 'site/welcome#index'
  
  get 'application', to: 'application#index'
  
  
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
    get 'vlans/index'
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
