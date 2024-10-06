import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import SalesHistory from './components/SalesHistory';
import axios from 'axios';
import './index.css';

const App = () => {
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);

    const handleAddToCart = (product) => {
        const itemInCart = cartItems.find(item => item.id === product.id);
        if (itemInCart) {
            itemInCart.quantity += 1;
            setCartItems([...cartItems]);
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
        setTotal(total + product.price);
    };

    const handleRemoveItem = (index) => {
        const item = cartItems[index];
        setTotal(total - item.price * item.quantity);
        const newCart = cartItems.filter((_, i) => i !== index);
        setCartItems(newCart);
    };

    const handleRegisterSale = async () => {
      const salesData = {};
  
      // Agrupar los productos y sus cantidades
      cartItems.forEach(item => {
          const key = `${item.name} x${item.quantity}`;
          salesData[key] = (salesData[key] || 0) + item.price * item.quantity;
      });
  
      try {
          // Hacer un registro para cada producto agrupado
          for (const [product, totalPrice] of Object.entries(salesData)) {
              await axios.post('http://localhost:5000/api/sales', {
                  product_name: product,
                  quantity: 1,
                  total_price: totalPrice,
              });
          }
          alert('Venta registrada correctamente');
          setCartItems([]);
          setTotal(0);
      } catch (error) {
          console.error('Error registrando la venta:', error.response ? error.response.data : error.message);
          alert('Hubo un error al registrar la venta. Intenta nuevamente.');
      }
  };
  

    return (
        <Router>
            <div className="container">
                <h1>Sistema POS - Restaurante</h1>
                <nav className="nav">
                    <Link className="nav-link" to="/">Inicio</Link>
                    <Link className="nav-link" to="/sales-history">Historial de Ventas</Link>
                </nav>
                <div className="pos-container">
                    <Routes>
                        <Route path="/" element={
                            <>
                                <ProductList onAddToCart={handleAddToCart} />
                                <Cart 
                                    cartItems={cartItems} 
                                    total={total} 
                                    onRemoveItem={handleRemoveItem} 
                                    onCalculateChange={handleRegisterSale} 
                                />
                            </>
                        } />
                        <Route path="/sales-history" element={<SalesHistory />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
