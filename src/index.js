import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { nominalTypeHack } from "prop-types";

function App(props) {
  const [estado, setEstado] = useState("ENTRADA");

  //palpite da maquina
  const [palpite, setPalpite] = useState(150);
  const [numPlapites, sertNumPalpites] = useState(1);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setMin(0);
    setMax(300);
    sertNumPalpites(1);
    setPalpite(150);
  };
  if (estado === "ENTRADA") {
    return <button onClick={iniciarJogo}>Começar a jogar</button>;
  }

  const menor = () => {
    sertNumPalpites(numPlapites + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2);
    setPalpite(proxPalpite);
  };
  const maior = () => {
    sertNumPalpites(numPlapites + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2);
    setPalpite(proxPalpite);
  };
  const acertou = () => {
    setEstado("FIM");
  };
  if (estado === "FIM") {
    return (
      <div>
        <p>
          {" "}
          Acertei o numero {palpite} com {numPlapites} chutes!
        </p>
        <button onClick={iniciarJogo}>Iniciar novamente!</button>
      </div>
    );
  }
  // ENTRADA. RODANDO, FIM
  // 0 <> 300
  // palpites que a maquina deu
  return (
    <div className="App">
      <p>O seu numero é {palpite}</p>
      <button onClick={menor}>Menos!</button>
      <button onClick={acertou}>Acertou!</button>
      <button onClick={maior}>Maior!</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App name="DevPleno" />, rootElement);
