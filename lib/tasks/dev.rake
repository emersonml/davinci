
DEFAULT_PASSWORD = 666666

namespace :dev do
  desc "TODO"
  task setup: :environment do
    if Rails.env.development?
      # show_spinner("pingando...") { %x(ping 1.1.1.1 -c 33) }
      show_spinner("Apagando BD...") { %x(rails db:drop) }
      show_spinner("Criando BD...") { %x(rails db:create) }
      show_spinner("Migrando BD...") { %x(rails db:migrate) }
      show_spinner("Cadastrando o administrador padrão...") { %x(rails dev:add_default_admin) }
      # show_spinner("Cadastrando o administrador extra...") { %x(rails dev:add_extras_admins) }
      show_spinner("Cadastrando o usuário padrão...") { %x(rails dev:add_default_user) }
      # show_spinner("Cadastrando assuntos padroes ") { %x(rails dev:add_subjects) }
      # show_spinner("Cadastrando perguntas e respostas...") { %x(rails dev:add_answers_and_questions) }
      else
      puts "Você não está em ambiente de desenvolvimento!"
    end

  end


  
  def show_spinner(msg_start, msg_end = "Concluído!")
    spinner = TTY::Spinner.new("[:spinner] #{msg_start}")
    spinner.auto_spin
    yield
    spinner.success("(#{msg_end})")    
  end



  desc "Adiciona o administrador padrão"
  task add_default_admin: :environment do
    Admin.create!(
      email: 'admin@admin.com',
      password: DEFAULT_PASSWORD,
      password_confirmation: DEFAULT_PASSWORD
    )
  end

  desc "Adiciona o usuário padrão"
  task add_default_user: :environment do
    User.create!(
      email: 'user@user.com',
      password: DEFAULT_PASSWORD,
      password_confirmation: DEFAULT_PASSWORD
  )
  end


end

