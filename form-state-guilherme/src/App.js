import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  /*Estados de Dados*/
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");

  /*Função de Cadastro*/
  function cadastroUser(e){
    e.preventDefault();
    alert(`NOME: ${nome} EMAIL: ${email} SENHA: ${senha}`);
  }

  return (
    <div className="App">
      <form onSubmit={cadastroUser} className="form">
        <h1>FORMULÁRIO DE CADÁSTRO</h1>

        <input type="text"
        placeholder="Digite seu Nome aqui"
        required
        value={nome}
        onChange={(event) => {setNome(event.target.value)}}/>

        <input type="email"
        placeholder="Digite seu E-Mail aqui"
        required
        value={email}
        onChange={(event) => {setEmail(event.target.value)}}/>

        <input type="password"
        placeholder="Digite sua senha aqui"
        required
        value={senha}
        onChange={(event) => {setSenha(event.target.value)}}/>

        <input type="submit"
        required />

      </form>
    </div>
  );
}

export default App;
