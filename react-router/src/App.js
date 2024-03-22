import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import NavBar from './navbar/NavBar';
import Home from './components/Home';
import Empresa from './components/Empresa';
import Contato from './components/Contato';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<NavBar/>}>
          <Route index element={<Home/>}/>
          <Route path="empresa" element={<Empresa/>}/>
          <Route path="contatos" element={<Contato/>}/>
        </Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
