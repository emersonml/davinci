class Webcoruja::WelcomeController < WebcorujaController

   
  def index
    # console
  #  puts = "blablablablablablablablablablablablablabla"

  #  mtik = Rails.root.join('lib/mtik')
  #  puts = "Rails.root.join('node_modules')"
  #  puts = Rails.root.join('node_modules')
     

  #  infotxt = %x(cat /home/emerson/projects/sys5gbrasil/lib/mtik/info.txt)
  #  infotxt = %x(cat /home/emerson/projects/mtik/info.mk.txt)
   infotxt = %x(cat /home/emerson/projects/mtik/info.mk.txt)
   @infomk = infotxt.split(" ")

 end




end
