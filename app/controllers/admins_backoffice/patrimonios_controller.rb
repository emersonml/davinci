class AdminsBackoffice::PatrimoniosController < AdminsBackofficeController
  before_action :set_admins_backoffice_patrimonio, only: %i[ show edit update destroy ]

  # GET /admins_backoffice/patrimonios or /admins_backoffice/patrimonios.json
  def index
    
    @admins_backoffice_patrimonios = AdminsBackoffice::Patrimonio.all
  end

  # GET /admins_backoffice/patrimonios/1 or /admins_backoffice/patrimonios/1.json
  def show
  end

  # GET /admins_backoffice/patrimonios/new
  def new
    @admins_backoffice_patrimonio = AdminsBackoffice::Patrimonio.new
  end

  # GET /admins_backoffice/patrimonios/1/edit
  def edit
  end

  # POST /admins_backoffice/patrimonios or /admins_backoffice/patrimonios.json
  def create
    @admins_backoffice_patrimonio = AdminsBackoffice::Patrimonio.new(admins_backoffice_patrimonio_params)

    respond_to do |format|
      if @admins_backoffice_patrimonio.save
        format.html { redirect_to admins_backoffice_patrimonio_url(@admins_backoffice_patrimonio), notice: "Patrimonio was successfully created." }
        format.json { render :show, status: :created, location: @admins_backoffice_patrimonio }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @admins_backoffice_patrimonio.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /admins_backoffice/patrimonios/1 or /admins_backoffice/patrimonios/1.json
  def update
    respond_to do |format|
      if @admins_backoffice_patrimonio.update(admins_backoffice_patrimonio_params)
        format.html { redirect_to admins_backoffice_patrimonio_url(@admins_backoffice_patrimonio), notice: "Patrimonio was successfully updated." }
        format.json { render :show, status: :ok, location: @admins_backoffice_patrimonio }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @admins_backoffice_patrimonio.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /admins_backoffice/patrimonios/1 or /admins_backoffice/patrimonios/1.json
  def destroy
    @admins_backoffice_patrimonio.destroy

    respond_to do |format|
      format.html { redirect_to admins_backoffice_patrimonios_url, notice: "Patrimonio was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_admins_backoffice_patrimonio
      @admins_backoffice_patrimonio = AdminsBackoffice::Patrimonio.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def admins_backoffice_patrimonio_params
      params.fetch(:admins_backoffice_patrimonio, {})
    end
end
