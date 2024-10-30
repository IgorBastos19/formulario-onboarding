import "../../styles/cartoes.css";
export default function Card() {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="header">
            <h1>Login</h1>
            <p>Bem vindo ao melhor app de gestão de carteira do Brasil.</p>
          </div>
          <div className="conteudo">
            <form action="">
              <input
                type="email"
                name="oi"
                placeholder="exemplo@dominio.com"
                required
                minlength="5"
                maxlength="50"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                title="Digite um endereço de e-mail válido."
                autocomplete="on"
                autofocus
                size="50"
              />
              <input
                type="password"
                name="oi"
                placeholder="Digite uma senha válida."
                required
                minlength="5"
                maxlength="50"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                title="Digite uma senha válida."
                autocomplete="on"
                autofocus
                size="50"
              />
            </form>
          </div>
          <div className="footer">
            <button type="submit">Entrar</button>
            <p>
              Caso não tenha cadastro <a href="register">clique aqui.</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
