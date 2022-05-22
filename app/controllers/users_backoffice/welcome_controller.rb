class UsersBackoffice::WelcomeController < UsersBackofficeController
   before_action :get_params


   
   def index
    # puts = "bla"
    @infomk = %x(cat /home/emerson/projects/sys5gbrasil/infomk.txt)
    @coins = "coins okok"
  end


# FUNCITONS EXTRAS
  def get_params
    if params[:infomk]
      var_infomk = params[:infomk]
      %x(echo "#{var_infomk}" > /home/emerson/projects/sys5gbrasil/infomk.txt)
      # session[:cursook] = params[:curso]
    end  
  end




end
