import logo from './logo.svg';
import './App.css';
import Product from './components/Product';
import Cart from './components/Cart';
import Header from './components/Header';
import { Router,Route,Routes } from 'react-router-dom';


function App() {
     return (
         <div className="container">
             <Header />
             <Routes>

                <Route path="/"  element={<Product/>} />
                <Route path="/carts"  element={<Cart/>} />
              </Routes>

         </div>
  );
}

export default App;
