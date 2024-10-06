import React from 'react';
import './ProductList.css';

const products = [
    { id: 1, name: "Pasteles", price: 2000 },
    { id: 2, name: "Hamburguesas Caseras", price: 2000 },
    { id: 3, name: "Aborrajado de Queso", price: 2500 },
    { id: 4, name: "Empanadas", price: 1000 },
    { id: 5, name: "Arepas Rellenas", price: 3000 },
    { id: 6, name: "Chorizos", price: 5000 },
    { id: 7, name: "Salchipapas", price: 5000 },
    { id: 8, name: "Perros Calientes", price: 6000 },
    { id: 9, name: "Maxi", price: 2000 },
    { id: 10, name: "Coca-Cola", price: 3000 }
];

const ProductList = ({ onAddToCart }) => {
    return (
        <div className="product-list">
            <h2>Lista de productos</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <span className="product-name">{product.name}</span> 
                        <span className="product-price">${product.price.toLocaleString('es-CO')}</span>
                        <button onClick={() => onAddToCart(product)}>Añadir al carrito</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
