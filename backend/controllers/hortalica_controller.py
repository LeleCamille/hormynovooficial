from flask import Blueprint, request, redirect, url_for, flash
from models.hortalica import Hortalica

hortalica_controller = Blueprint("hortalica", __name__)


@hortalica_controller.route("/cadastrar", methods=["POST"])
def cadastrar_hortalica():
    nome = request.form.get("nome", "").strip()
    especie = request.form.get("especie", "").strip()
    descricao = request.form.get("descricao", "").strip()

    if not nome:
        flash("Informe o nome da hortaliça.", "erro")
        return redirect(url_for("cadastro"))

    hortalica = Hortalica(nome, especie, descricao)

    if hortalica.cadastrar():
        flash("Hortaliça cadastrada com sucesso!", "sucesso")
    else:
        flash("Erro ao cadastrar hortaliça.", "erro")

    return redirect(url_for("cadastro"))