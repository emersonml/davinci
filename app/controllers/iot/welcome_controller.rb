class Iot::WelcomeController < IotController
  before_action :get_params
  # before_action :get_params, :get_params_infocliente 
  # before_action :dbjose 



  
  def index
    # @pin2 = dbjoseQuery(arg = "pin2")
    # @pin3 = dbjoseQuery(arg = "pin3")
    @pin = "origin=> welcome#index"
    # @infomk = info.split(" ")  
    end
  # console
  
  def dbjoseQuery(arg)
    pin = %x(cat /home/emerson/projects/dbjose/davinci/#{arg}).chomp
    return pin
  end
  def pinsttus
    pin3 = %x(cat /home/emerson/projects/dbjose/davinci/pin3).chomp
    render json: pin3
  end
  def salvar(p1)
      # %x(echo "#{p1}" > /home/emerson/projects/dbjose/davinci/#{arg})
      %x(echo "#{p1}" > /home/emerson/projects/dbjose/davinci/pin3)
  end
  
  # def api_request
  #   if params[:pinosSttus]
  #     @pinosSttus = params[:pinosSttus]
  #     pinosSttusx = @pinosSttus.split(':')
  #     @pinosOutSttus = pinosSttusx[0]
  #     @pinosInSttus = pinosSttusx[1]
  #   end  
  #   render json: @pinosInSttus
  # end
  
# def get_params

# end  
#   %x(echo "#{p}" > /home/emerson/projects/sys5gbrasil/#{p}info.txt)
#  %x(echo "#{p}" > /home/emerson/projects/mtik/info.mk.txt)


def get_params
  if params[:pinRtrnSinal]
    p1 = params[:pinRtrnSinal]
    salvar(p1)
    @alertController = p1
    console
  end  
end


end


