import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Product from './Product';
import SignUp from './SignUp';

function App() {
  return (
    <div className="App">
      <Router>         
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/products' element={<Product />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
