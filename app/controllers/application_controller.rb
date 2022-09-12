class ApplicationController < ActionController::Base
    # layout 'application'

    before_action :get_params, :get_params_infocliente 
    
    

    console
   
    def index

    end
    
    



# FUNCITONS EXTRAS
def get_params
   # mtik = Rails.root.join('lib/mtik')
   if params[:infomk]
      p = params[:infomk]
   #   %x(echo "#{p}" > /home/emerson/projects/sys5gbrasil/#{p}info.txt)
     %x(echo "#{p}" > /home/emerson/projects/mtik/info.mk.txt)
   end  
end  
  
   def get_params_infocliente
      
      if params[:infocliente]
         p = params[:infocliente]
         %x(echo "#{p}" >> /home/emerson/projects/mtik/infocliente.txt)
    end  
   end
 
   
   
end


