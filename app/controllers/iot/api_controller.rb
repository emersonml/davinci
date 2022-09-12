class Iot::ApiController < IotController
  before_action :get_params
  # before_action :get_params, :get_params_infocliente 
  # before_action :dbjose 



  
  def fetch
    if params[:p1]
      table = params[:p1]
      col = params[:p2]
      devRtrn = %x(cat /home/emerson/projects/dbjose/davinci/#{table}/#{col}).chomp
    end
    render json: devRtrn
  end
  # console
  
  def dbjoseQuery(arg)
    pin = %x(cat /home/emerson/projects/dbjose/davinci/#{arg}).chomp
    return pin
  end

  def salvar()
    if params[:rtncircuit1]
      cod = params[:rtncircuit1]
      devRtrn = %x(cat /home/emerson/projects/dbjose/davinci/dev#{cod}).chomp
    end
      # %x(echo "#{p1}" > /home/emerson/projects/dbjose/davinci/#{arg})
      # %x(echo "#{p1}" > /home/emerson/projects/dbjose/davinci/pin3)
  end
  


end


