export default function CardHeader(props) {
  return (
    <div className="header">
      <h1>{props.Titulo}</h1>
      <p>{props.SubTitulo}</p>
    </div>
  );
}
