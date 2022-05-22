

# declara e inicializa uma variável string
frase = "Gosto muito de Ruby"
 
# vamos quebrar a string e obter um array
# usaremos o espaço como delimitador
palavras = frase.split(' ')
 
# vamos exibir o resultado
for palavra in palavras
  puts palavra
end