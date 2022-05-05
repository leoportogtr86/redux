import "./style.css";

export default (props) => {
  return (
    <div>
      <h2>Soma</h2>
      <h3>{Number(props.n1) + Number(props.n2)}</h3>
    </div>
  );
};
