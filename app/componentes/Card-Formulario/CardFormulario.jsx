import "../../styles/cartoes.css";
import CardHeader from "../CardHeader";
import Formulario from "../Formulario";

export default function Card(props) {
  return (
    <>
      <div className="container">
        <div className="card">
          <CardHeader
            Titulo={props.TituloView}
            SubTitulo={props.Subtitulo}
          ></CardHeader>
          <div className="conteudo">
            <form action="">
              <Formulario
                Formulariotype={props.Formulariotype2}
                FormularioPlaceholder={props.FormularioPlaceholder2}
              ></Formulario>
              <Formulario
                Formulariotype={props.Formulariotype1}
                FormularioPlaceholder={props.FormularioPlaceholder1}
              ></Formulario>
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
