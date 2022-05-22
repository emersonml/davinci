class WebcorujaController < ApplicationController
    before_action :authenticate_user!
    layout 'webcoruja'

end

