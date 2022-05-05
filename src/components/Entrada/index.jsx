import "./style.css";

export default (props) => {
  return (
    <div>
      <h1>Digite Seus Números</h1>
      <div className="entradas-container">
        <label htmlFor="numero1">Número 1</label>
        <input value={props.n1} id="numero1" type="number" />
        <label htmlFor="numero2">Número 2</label>
        <input value={props.n2} id="numero2" type="number" />
      </div>
    </div>
  );
};
