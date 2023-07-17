import './App.css';
import{Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Shop from './Components/Shop';
import About from './Components/About';
import Contact from './Components/Contact';
import Cart from './Components/Cart';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
