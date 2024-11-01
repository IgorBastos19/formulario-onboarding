"use client";

import "../../styles/cartoes.css";
import CardHeader from "../CardHeader";
import Formulario from "../Formulario";

export default function CardFormulario(props) {
  const handleSubmit = (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Aqui você pode adicionar qualquer lógica de validação que desejar.
    const isFormValid = event.target.checkValidity(); // Verifica a validade dos campos

    if (isFormValid) {
      // Se o formulário for válido, redireciona
      window.location.href = props.RotaBotao; // Usando a prop RotaBotao
    }
  };

  return (
    <>
      <div className="container">
        <div className="card">
          <CardHeader Titulo={props.TituloView} SubTitulo={props.Subtitulo} />
          <div className="conteudo">
            <form onSubmit={handleSubmit}>
              <Formulario campos={props.campos} />
              <button type="submit">{props.TextoBotao}</button>
              <p>
                {props.TextoFinal} <a href={props.Rota}>{props.Link}</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
