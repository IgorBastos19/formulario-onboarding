import CardFormulario from "../../../componentes/Card-Formulario/CardFormulario";

export default function login() {
  return (
    <CardFormulario
      TituloView="Confirme E-mail"
      Subtitulo="Digite o código enviado para o seu e-mail no campo abaixo"
      //
      campos={[
        {
          Formulariotype: "text",
          FormularioPlaceholder: "Digite o código aqui",
        },
      ]}
      //
      TextoBotao="Avançar"
      RotaBotao="telefone"
    ></CardFormulario>
  );
}
