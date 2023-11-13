import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import Contato from './pages/contato'
import Fotos from './pages/fotos'
import Comentarios from './pages/comentarios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contatos' element={<Contato />}/>
        <Route path='/fotos' element={<Fotos />}/>
        <Route path='/comentarios' element={<Comentarios />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
