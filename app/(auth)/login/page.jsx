import Card from "../../componentes/Card-Formulario/CardFormulario";

export default function login() {
  return (
    <Card
      Subtitulo="Bem vindo ao melhor app de gestão de carteira do Brasil."
      TituloView="Login"
      //
      Formulariotype1="password"
      FormularioPlaceholder1="Digite sua senha"
      Formulariotype2="email"
      FormularioPlaceholder2="Digite seu e-mail"
      //
      TextoBotao="Logar"
      TextoFinal="Caso não tenha acesso"
      Link="Clique aqui."
      Rota="register"
    ></Card>
  );
}
