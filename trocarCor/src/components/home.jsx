import "../components/styles.css";
import { useState, useRef } from "react";

function Home() {
  const [cor, setCor] = useState("white");
  const nomeCor = useRef();

  const TrocaCor = (novaCor) => {
    setCor(novaCor);
  };

  const SelecionaCor = () => {
    const novaCor = nomeCor.current.value;
    TrocaCor(novaCor);
  };

  return (
    <div className="container" style={{ backgroundColor: cor }}>
      <main className="main">
        <h1>Troca Cor</h1>
        <div className="conteudo">
          <button className="button-red" onClick={() => TrocaCor("red")}>
            Vermelho
          </button>
          <button className="button-green" onClick={() => TrocaCor("green")}>
            Verde
          </button>
          <button className="button-blue" onClick={() => TrocaCor("blue")}>
            Azul
          </button>

          <div style={{ marginTop: "20px" }}>
            <input type="text" placeholder="Nome da Cor" ref={nomeCor} />
            <button className="button-primary" onClick={SelecionaCor}>
              Trocar Cor
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
