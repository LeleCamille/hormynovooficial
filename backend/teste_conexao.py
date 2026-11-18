
from config.database import conectar

try:
    conexao = conectar()

    if conexao.is_connected():
        print("Conexão com o MySQL realizada com sucesso!")
        print("Banco conectado: hormy")

    conexao.close()

except Exception as erro:
    print("Erro ao conectar com o MySQL:")
    print(erro)
