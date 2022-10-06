import {React} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import {Header} from './Header';
import {Nav} from './Nav';
import {Home} from './Home';
import {Trabajos} from './Trabajos';
import {Blog} from './Blog';
import {Footer} from './Footer';

// Artículos Blog

import {Armonicos} from './Blog/Armonicos';
import {Automatizacion} from './Blog/Automatizacion';
import {Banco} from './Blog/Banco';
import {Conductor} from './Blog/Conductor';
import {Mantenimiento} from './Blog/Mantenimiento';
import {Megado} from './Blog/Megado';

// Fin artículos blog

function App() {
  return (
    <Router>
    <Header/>
    <Nav/>
      <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path='/trabajos' element = {<Trabajos/>} />
          <Route path='/blog' element = {<Blog/>} />
      </Routes>   
      <Routes>
          <Route path='/armonicos-electricos' element = {<Armonicos/>} />
          <Route path='/automatizacion' element = {<Automatizacion/>} />
          <Route path='/banco-condensadores' element = {<Banco/>} />
          <Route path='/conductor' element = {<Conductor/>} />
          <Route path='/mantenimiento-motores' element = {<Mantenimiento/>} />
          <Route path='/megado' element = {<Megado/>} />
      </Routes> 
    <Footer/>
    </Router>
  );
}

export default App;
