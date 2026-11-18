
from flask import Flask, render_template
from controllers.hortalica_controller import hortalica_controller

app = Flask(__name__)

app.secret_key = "hormy-chave-local"

# Registra o Controller
app.register_blueprint(hortalica_controller)


# Rota que exibe a página de cadastro
@app.route("/")
def cadastro():
    return render_template("cadastro.html")


if __name__ == "__main__":
    app.run(debug=True)
