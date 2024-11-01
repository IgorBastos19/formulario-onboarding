import CardFormulario from "../../../componentes/Card-Formulario/CardFormulario";

export default function login() {
  return (
    <CardFormulario
      TituloView="Cadastro de endereço"
      Subtitulo="Endereço completo"
      //
      campos={[
        {
          Formulariotype: "number",
          FormularioPlaceholder: "Digite o seu CEP",
        },
        {
          Formulariotype: "text",
          FormularioPlaceholder: "Digite a sua rua",
        },
        {
          Formulariotype: "text",
          FormularioPlaceholder: "Digite o seu numero",
        },
        {
          Formulariotype: "text",
          FormularioPlaceholder: "Digite o seu bairro",
        },
        {
          Formulariotype: "text",
          FormularioPlaceholder: "Digite a sua cidade",
        },
        {
          Formulariotype: "text",
          FormularioPlaceholder: "Digite o seu estado",
        },
      ]}
      //
      TextoBotao="Avançar"
      RotaBotao="../dashboard"
    ></CardFormulario>
  );
}
