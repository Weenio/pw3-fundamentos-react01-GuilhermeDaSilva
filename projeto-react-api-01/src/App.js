import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';

import Home from './pages/Home';
import Livro from './pages/Livros';
import NovoLivro from './pages/NovoLivro';
import EditarLivro from './pages/EditarLivro';

import NavBar from './components/NavBar';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Container>

          <Routes>
          <Route path="/" element={<NavBar/>}>
            <Route index element={<Home/>}/>
            <Route path="livros" element={<Livro/>}/>
            <Route path="novolivro" element={<NovoLivro/>}/>
            <Route path="editarLivro/:id" element={<EditarLivro/>}/>
          </Route>
          </Routes>

        </Container>

      </BrowserRouter>
    </div>
  );
}

export default App;
