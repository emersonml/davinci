file = File.open('teste.txt')
#fazendo um For Linha a Linha
file.each_line do |line|
        #Separando as palavras e convertendo para string      

        values = line.split(';').to_s()
        #capturando o index da palavra que seja igual a 'a'
        #idExc = Array[]
        idExc = values.index(/a/)

        puts values[idExc]

end