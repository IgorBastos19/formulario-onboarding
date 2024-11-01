import CardFormulario from "../../../componentes/Card-Formulario/CardFormulario";

export default function login() {
  return (
    <CardFormulario
      TituloView="Cadastre o seu telefone"
      Subtitulo="Cadastre o seu telefone"
      //
      campos={[
        {
          Formulariotype: "tel",
          FormularioPlaceholder: "Digite o seu telefone aqui",
        },
      ]}
      //
      TextoBotao="Avançar"
      RotaBotao="confirm-telefone"
    ></CardFormulario>
  );
}
