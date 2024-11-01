import CardFormulario from "../../componentes/Card-Formulario/CardFormulario";

export default function login() {
  return (
    <CardFormulario
      TituloView="Login"
      Subtitulo="Bem vindo ao melhor app de gestão de carteira do Brasil."
      //
      campos={[
        {
          Formulariotype: "email",
          FormularioPlaceholder: "Digite seu e-mail",
        },
        {
          Formulariotype: "password",
          FormularioPlaceholder: "Digite sua senha",
        },
      ]}
      //
      TextoBotao="Logar"
      RotaBotao="dashboard"
      TextoFinal="Caso não tenha acesso"
      Link="Clique aqui."
      Rota="register"
    ></CardFormulario>
  );
}
