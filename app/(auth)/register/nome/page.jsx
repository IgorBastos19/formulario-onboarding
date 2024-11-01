import CardFormulario from "../../../componentes/Card-Formulario/CardFormulario";

export default function login() {
  return (
    <CardFormulario
      TituloView="Cadastre o seu nome"
      Subtitulo="Digite abaixo o seu nome completo"
      //
      campos={[
        {
          Formulariotype: "text",
          FormularioPlaceholder: "Digite o seu nome aqui",
        },
      ]}
      //
      TextoBotao="Avançar"
      RotaBotao="endereco"
    ></CardFormulario>
  );
}
