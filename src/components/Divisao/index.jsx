import "./style.css";

export default (props) => {
  return (
    <div>
      <h2>Divisão</h2>
      <h3>{props.n1 / props.n2}</h3>
    </div>
  );
};
