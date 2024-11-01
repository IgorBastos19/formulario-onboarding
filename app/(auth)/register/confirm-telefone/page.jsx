import CardFormulario from "../../../componentes/Card-Formulario/CardFormulario";

export default function login() {
  return (
    <CardFormulario
      TituloView="Confirme o seu telefone"
      Subtitulo="Digite o código enviado para o seu e-mail no campo abaixo"
      //
      campos={[
        {
          Formulariotype: "text",
          FormularioPlaceholder: "Digite o seu telefone aqui",
        },
      ]}
      //
      TextoBotao="Avançar"
      RotaBotao="nome"
    ></CardFormulario>
  );
}
