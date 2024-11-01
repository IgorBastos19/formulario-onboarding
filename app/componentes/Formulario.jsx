export default function Formulario({ campos }) {
  return (
    <>
      {campos.map((campo, index) => (
        <input
          key={index}
          type={campo.Formulariotype}
          placeholder={campo.FormularioPlaceholder}
          required
          maxLength="30"
          autoComplete="on"
          autoFocus
        />
      ))}
    </>
  );
}

/*
type="email"
      name="oi"
      placeholder="exemplo@dominio.com"
      required
      minlength="5"
      maxlength="50"
      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
      title="Digite um endereço de e-mail válido."
      autocomplete="on"
      autofocus
      size="50"
*/

/*
<input
  type="password"
  name="oi"
  placeholder="Digite uma senha válida."
  required
  minlength="5"
  maxlength="50"
  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
  title="Digite uma senha válida."
  autocomplete="on"
  autofocus
  size="50"
/>
*/
