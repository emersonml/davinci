class Iot::WelcomeController < IotController
  def index
  end


  def ligar
# render json: 'http://45.174.219.194:8001/?ligar'
# render 'http://45.174.219.194:8001/?ligar'
redirect_to 'http://45.174.219.194:8001/?ligar'
    
    # redirect_to 'http://5gbrasil.net.br:3003/iot/welcome/index'
  end





end
