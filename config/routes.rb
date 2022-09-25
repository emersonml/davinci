#dev/davinci
Rails.application.routes.draw do

  namespace :admins_backoffice do
    resources :patrimonios
  end
  root to: 'iot/welcome#index'

  
  resource :nome, :default => {format: :json}
  get 'iot', to: 'iot/welcome#index'

  namespace :iot do
    get 'welcome/index'
    get 'welcome/salvar'
    get 'welcome/api'
    get 'welcome/apiresponse'
    get 'welcome/pinsttus'
    get 'welcome/testes'
    get 'welcome/ligar'
    
    get 'api/fetch'
    get 'api/salvar'
  end
  
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
    get 'patrimonios/index'
  end
  namespace :webcoruja do
    get 'welcome/index'
    get 'welcome/teste'
    get 'welcome/dados'
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
