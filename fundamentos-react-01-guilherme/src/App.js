import logo from "./logo.svg";

import CardLivro from "./components/CardLivro";

import dadosJSON from "./dados.json";
import "./App.css";

function App() {
  return (
    <div className="App">
      <CardLivro dadosJSON={dadosJSON} />
    </div>
  );
}

export default App;
