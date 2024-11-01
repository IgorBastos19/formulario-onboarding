import CardFormulario from "../../componentes/Card-Formulario/CardFormulario";

export default function login() {
  return (
    <CardFormulario
      TituloView="E-mail"
      Subtitulo="Cadastre o seu e-mail"
      //
      campos={[
        {
          Formulariotype: "email",
          FormularioPlaceholder: "Digite seu e-mail aqui",
        },
      ]}
      //
      TextoBotao="Avançar"
      RotaBotao="register/confirm-email"
    ></CardFormulario>
  );
}
