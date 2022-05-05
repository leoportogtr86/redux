import {useState} from "react";

import "./App.css";
import Diferenca from "./components/Diferenca";
import Divisao from "./components/Divisao";
import Entrada from "./components/Entrada";
import Produto from "./components/Produto";
import Soma from "./components/Soma";

function App() {
  const [n1, setN1] = useState(10);
  const [n2, setN2] = useState(20);

  return (
    <div className="App">
      <Entrada n1={n1} n2={n2} onN1Change={setN1} onN2Change={setN2} />
      <div className="resultado">
        <Soma n1={n1} n2={n2} />
        <Produto n1={n1} n2={n2} />
        <Diferenca n1={n1} n2={n2} />
        <Divisao n1={n1} n2={n2} />
      </div>
    </div>
  );
}

export default App;
