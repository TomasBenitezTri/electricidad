import {React} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import {Header} from './Header';
import {Nav} from './Nav';
import {Home} from './Home';
import {Trabajos} from './Trabajos';
import {Blog} from './Blog';

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
      
    </Router>
  );
}

export default App;
