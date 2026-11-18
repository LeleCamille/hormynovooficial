
from config.database import conectar


class Hortalica:

    def __init__(self, nome, especie, descricao):
        self.nome = nome
        self.especie = especie
        self.descricao = descricao

    def cadastrar(self):
        conexao = conectar()
        cursor = conexao.cursor()

        sql = """
            INSERT INTO HORTALICA (nome, especie, descricao)
            VALUES (%s, %s, %s)
        """

        try:
            cursor.execute(
                sql,
                (self.nome, self.especie, self.descricao)
            )

            conexao.commit()
            return True

        except Exception as erro:
            conexao.rollback()
            print("Erro ao cadastrar hortaliça:", erro)
            return False

        finally:
            cursor.close()
            conexao.close()
